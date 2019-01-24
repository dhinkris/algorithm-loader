import React, { Component } from 'react';
import { Layout, Menu, Icon, Collapse, Button,Row, Col } from 'antd';
import algorithm from '../../data/schema';
import AlgorithmGenerator from './AlgorithmGenerator';

const { Header, Content, Footer, Sider,  } = Layout;
const Panel = Collapse.Panel;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};
const mainAlgorithmSpace=[]
class AlgorithmList extends Component{
    state={
        addedAlgorithmList:[],
    }
    handleClickAdd=(algorithm)=> {
        mainAlgorithmSpace.push(algorithm)
        this.setState({
            addedAlgorithmList: mainAlgorithmSpace
        })
    }
    handleClickRemove=(algorithm) => {
        const index = mainAlgorithmSpace.indexOf(algorithm);
        mainAlgorithmSpace[index]=null;
        this.setState({
            addedAlgorithmList: mainAlgorithmSpace
        })
    }
    render(){
        return(
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => { console.log(broken); }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        {
                            algorithm.map((each_algorithm, index) => {
                                return(
                                    <Menu.Item key={'algorithm'+index} onClick={()=>this.handleClickAdd(each_algorithm)}>
                                        <span className="nav-text">{each_algorithm.name}</span>
                                    </Menu.Item>)
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Row gutter={24}>
                                <Col span={24}>
                                    <Collapse bordered={false} >
                                        {this.state.addedAlgorithmList.map((addedAlgorithm, index) => {
                                            return(
                                                addedAlgorithm!==null?<Panel forceRender header={<React.Fragment>{addedAlgorithm.name+'_'+(index)}</React.Fragment>} key={index} style={customPanelStyle}>
                                                    <AlgorithmGenerator algorithm={addedAlgorithm} index={index} name={addedAlgorithm.name}/>
                                                    <Button onClick={()=>this.handleClickRemove(addedAlgorithm)} style={{paddingLeft:'50'}}>Delete</Button>
                                                </Panel>:null
                                            )
                                        })}
                                    </Collapse>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default AlgorithmList;