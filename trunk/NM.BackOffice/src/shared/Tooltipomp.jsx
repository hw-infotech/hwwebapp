import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const TooltipComp = ({ placement, component, tooltip }) => {
    return <OverlayTrigger className="tooltip"
        delay={{ hide: 10, show: 50 }}
        overlay={(props) => (
            <Tooltip {...props} className="tooltip">
                {tooltip}
            </Tooltip>
        )}
        placement={"top"}
    >
        {component}
    </OverlayTrigger>
}

export default TooltipComp