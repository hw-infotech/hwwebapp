import { FastField } from "formik";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipComp = ({ component, tooltip, placement = "top"}) => {
  return (
    <OverlayTrigger
      className="tooltip"
    
      delay={{ hide: 10, show: 50 }}
      overlay={(props) => (
        <Tooltip {...props} className="tooltip">
          {tooltip}
        </Tooltip>
      )}
      placement={placement}
    >
      {({ placement, arrowProps, show: _show, popper, ...props }) => (
        <div
          {...props}
          style={{
            padding: "0px",
            color: "#9A0000",
          
            margin: "0px",
            pointerEvents: "all",
            ...props.style,
          }}
        >
          {component}
        </div>
      )}
    </OverlayTrigger>
  );
};

export default TooltipComp;
