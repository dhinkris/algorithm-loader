import { Dom, Shape } from "@antv/x6";

Shape.Rect.define({
  shape: "rect-port",
  attrs: {
    body: {
      strokeWidth: 1,
      stroke: "#108ee9",
      fill: "#fff",
      rx: 15,
      ry: 15
    }
  },
  portMarkup: [
    {
      tagName: "foreignObject",
      selector: "fo",
      attrs: {
        width: 10,
        height: 10,
        x: -5,
        y: -5,
        magnet: "true"
      },
      children: [
        {
          ns: Dom.ns.xhtml,
          tagName: "body",
          selector: "foBody",
          attrs: {
            xmlns: Dom.ns.xhtml
          },
          style: {
            width: "100%",
            height: "100%"
          },
          children: [
            {
              tagName: "div",
              selector: "content",
              style: {
                width: "100%",
                height: "100%"
              }
            }
          ]
        }
      ]
    }
  ]
});
