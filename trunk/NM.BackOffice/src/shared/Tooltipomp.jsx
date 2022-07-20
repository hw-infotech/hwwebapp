import { FastField } from "formik";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipComp = ({ component, tooltip, placement = "top" }) => {
  return (
    <OverlayTrigger
      popperConfig={{
        modifiers: {
          preventOverflow: {
            enabled: false,
          },
        },
      }}
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
            position: "relative",
            overflow: "hidden",
            padding: "0px",
            color: "white",
            margin: "0px",

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
