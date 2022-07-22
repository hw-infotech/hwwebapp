import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

const TooltipComp = ({ component, tooltip, placement = "top", id }) => {
  return (
    <>
      {component}
      <ReactTooltip id={id} place={placement} effect="solid">
        Tooltip for the register button
      </ReactTooltip>
    </>
  );
};

export default TooltipComp;
