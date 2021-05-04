import React from 'react'
// import ReactDOM from 'react-dom'
import { Button } from 'antd'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { Graph, Addon, Shape } from '@antv/x6'
import "./shape";

const { Stencil } = Addon
const { Rect, Circle } = Shape
const { Header, Content, Footer, Sider } = Layout;

class ConnectPipeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canRedo: false,
      canUndo: false,
      graph: null
    }
  }


  componentDidMount() {
    class MyShape extends Shape.Rect {
      getInPorts() {
        return this.getPortsByGroup('in')
      }

      getOutPorts() {
        return this.getPortsByGroup('out')
      }

      getUsedInPorts(graph) {
        const incomingEdges = graph.getIncomingEdges(this) || []
        return incomingEdges.map((edge) => {
          const portId = edge.getTargetPortId()
          return this.getPort(portId)
        })
      }

      getNewInPorts(length) {
        return Array.from(
          {
            length,
          },
          () => {
            return {
              group: 'in',
            }
          },
        )
      }

      updateInPorts(graph) {
        const minNumberOfPorts = 2
        const ports = this.getInPorts()
        const usedPorts = this.getUsedInPorts(graph)
        const newPorts = this.getNewInPorts(
          Math.max(minNumberOfPorts - usedPorts.length, 1),
        )

        if (
          ports.length === minNumberOfPorts &&
          ports.length - usedPorts.length > 0
        ) {
          // noop
        } 
        else if (ports.length === usedPorts.length) {
          this.addPorts(newPorts)
        } 
        else if (ports.length + 1 > usedPorts.length) {
          this.prop(
            ['ports', 'items'],
            this.getOutPorts().concat(usedPorts).concat(newPorts),
            {
              rewrite: true,
            },
          )
        }
        return this
      }
    }

    MyShape.config({
      label: "SQL",
      attrs: {
        root: {
          magnet: false,
        },
        body: {
          fill: '#f5f5f5',
          stroke: '#d9d9d9',
          strokeWidth: 1,
        },
      },
      ports: {
        items: [
          {
            group: 'out',
          },
        ],
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              portBody: {
                magnet: 'passive',
                r: 6,
                stroke: '#ffa940',
                fill: '#fff',
                strokeWidth: 2,
              },
            },
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              portBody: {
                magnet: true,
                r: 6,
                fill: '#fff',
                stroke: '#3199FF',
                strokeWidth: 2,
              },
            },
          },
        },
      },
      portMarkup: [
        {
          tagName: 'circle',
          selector: 'portBody',
        },
      ],
    })

    const customMod={
      shape: "rect-port",
      width: 160,
      height: 30,
      x: 360,
      y: 180,
      label: "归一化",
      ports: {
        items: [
          { group: "in", id: "in1" },
          { group: "in", id: "in2" },
          { group: "out", id: "out1" },
          { group: "out", id: "out2" }
        ],
        groups: {
          in: {
            position: { name: "top" },
            zIndex: 1
          },
          out: {
            position: { name: "bottom" },
            zIndex: 1
          }
        }
      }
    }
    const magnetAvailabilityHighlighter = {
      name: 'stroke',
      args: {
        attrs: {
          fill: '#fff',
          stroke: '#47C769',
        },
      },
    }

    const graph = new Graph({
      history: true,
      grid: true,
      container: document.getElementById('container'),
      highlighting: {
        magnetAvailable: magnetAvailabilityHighlighter,
        magnetAdsorbed: {
          name: 'stroke',
          args: {
            attrs: {
              fill: '#fff',
              stroke: '#31d0c6',
            },
          },
        },
      },
      connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        highlight: true,
        connector: 'rounded',
        connectionPoint: 'boundary',
        router: {
          name: 'er',
          args: {
            direction: 'V',
          },
        },
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                strokeDasharray: "5 5",
                stroke: "#808080",
                strokeWidth: 1,
                targetMarker: {
                  name: "block",
                  args: {
                    size: "6"
                  }
                }
              }
            }
          });
        },
        validateConnection({ sourceView, targetView, targetMagnet }) {
          if (!targetMagnet) {
            return false
          }

          if (targetMagnet.getAttribute('port-group') !== 'in') {
            return false
          }

          if (targetView) {
            const node = targetView.cell
            if (node instanceof MyShape) {
              const portId = targetMagnet.getAttribute('port')
              const usedInPorts = node.getUsedInPorts(graph)
              if (usedInPorts.find((port) => port && port.id === portId)) {
                return false
              }
            }
          }

          return true
        },
      },
    })

    const stencil = new Stencil({
      title: 'Components',
      target: graph,
      search(cell, keyword) {
        return cell.shape.indexOf(keyword) !== -1
      },
      placeholder: 'Search by shape name',
      notFoundText: 'Not Found',
      collapsable: true,
      stencilGraphWidth: 200,
      stencilGraphHeight: 180,
      groups: [
        {
          name: 'group1',
          title: 'Group(Collapsable)',
        },
        {
          name: 'group2',
          title: 'Group',
          collapsable: false,
        },
      ],
    })

    document.getElementById('sidebar').appendChild(stencil.container)

    const r = new MyShape().resize(120, 40).position(400, 50).updateInPorts(graph)


    function update(view) {
      const cell = view.cell
      if (cell instanceof MyShape) {
        cell.getInPorts().forEach((port) => {
          const portNode = view.findPortElem(port.id, 'portBody')
          view.unhighlight(portNode, {
            highlighter: magnetAvailabilityHighlighter,
          })
        })
        cell.updateInPorts(graph)
      }
    }

    graph.on('edge:connected', ({ previousView, currentView }) => {
      if (previousView) {
        update(previousView)
      }
      if (currentView) {
        update(currentView)
      }
    })

    graph.on('edge:removed', ({ edge, options }) => {
      if (!options.ui) {
        return
      }

      const target = edge.getTargetCell()
      if (target instanceof MyShape) {
        target.updateInPorts(graph)
      }
    })

    graph.on('edge:mouseenter', ({ edge }) => {
      edge.addTools([
        'source-arrowhead',
        'target-arrowhead',
        {
          name: 'button-remove',
          args: {
            distance: -30,
          },
        },
      ])
    })

    graph.on('edge:mouseleave', ({ edge }) => {
      edge.removeTools()
    })

    this.history = graph.history
    this.history.on('change', () => {
      this.setState({
        canRedo: this.history.canRedo(),
        canUndo: this.history.canUndo(),
      })
    })

    stencil.load([r], "group1")
    this.setState({graph: graph})
    // stencil.load([r, c, c2, r2.clone()], 'group1')
    // stencil.load([c2.clone(), r2, r3, c3], 'group2')
  }
  onUndo = () => {
    this.history.undo()
  }

  onRedo = () => {
    this.history.redo()
  }

  getJSON = () => {
    console.log(this.state.graph.toJSON(), null, 2)
  }
  
  refContainer = (container) => {
    this.container = container
  }

  refStencil = (container) => {
    this.stencilContainer = container
  }
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="app" >
            <div className="app-stencil" id="sidebar">

            </div>
          </div>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
            <Button.Group>
              <Button onClick={this.onUndo} disabled={!this.state.canUndo}>
                Undo
                </Button>
              <Button onClick={this.onRedo} disabled={!this.state.canRedo}>
                Redo
                </Button>
            </Button.Group>
            <Button onClick={this.getJSON} >
                Get connections
                </Button>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="app-content" id="container" style={{ padding: 24, minHeight: 360 }}>

            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default ConnectPipeline;