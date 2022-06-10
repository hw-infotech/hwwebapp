import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const TooltipComp = ({ placement, component, tooltip }) => {
    return <OverlayTrigger
        delay={{ hide: 450, show: 50 }}
        overlay={(props) => (
            <Tooltip {...props}>
                {tooltip}
            </Tooltip>
        )}
        placement={placement}
    >
        {component}
    </OverlayTrigger>
}

export default TooltipComp