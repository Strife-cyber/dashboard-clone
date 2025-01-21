import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Tooltips = ({ dark_mode = false }) => {
    return (
        <Interfaces
            dark_mode={dark_mode}
            heading="Tooltips"
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/components">Components</a>
                </div>
            }
        >
            {/* Preview 1: Basic Tooltip */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/tooltips#overview"
                heading="Basic Tooltip"
                description="A simple tooltip displayed on hover over a button."
            >
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="basic-tooltip">This is a basic tooltip!</Tooltip>}
                >
                    <Button variant="primary">Hover me</Button>
                </OverlayTrigger>
            </Preview>

            {/* Preview 2: Tooltip Placements */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/tooltips#placement"
                heading="Tooltip Placements"
                description="Tooltips can be placed in different directions: top, right, bottom, and left."
            >
                <div className="d-flex gap-3 justify-content-center">
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-top">Top Tooltip</Tooltip>}
                    >
                        <Button variant="secondary">Top</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip id="tooltip-right">Right Tooltip</Tooltip>}
                    >
                        <Button variant="secondary">Right</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="tooltip-bottom">Bottom Tooltip</Tooltip>}
                    >
                        <Button variant="secondary">Bottom</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        overlay={<Tooltip id="tooltip-left">Left Tooltip</Tooltip>}
                    >
                        <Button variant="secondary">Left</Button>
                    </OverlayTrigger>
                </div>
            </Preview>

            {/* Preview 3: Disabled Tooltip Trigger */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/tooltips#disabled-elements"
                heading="Disabled Tooltip Trigger"
                description="Tooltips can still be triggered on disabled elements using wrappers."
            >
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-disabled">I still work on disabled elements!</Tooltip>}
                >
                    <span className="d-inline-block">
                        <Button variant="danger" disabled style={{ pointerEvents: "none" }}>
                            Disabled Button
                        </Button>
                    </span>
                </OverlayTrigger>
            </Preview>

            {/* Preview 4: Custom Tooltip */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/tooltips#custom"
                heading="Custom Tooltip"
                description="Tooltips can have custom content and styles."
            >
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id="custom-tooltip">
                            <strong>Custom Content:</strong> Tooltips can be customized with HTML!
                        </Tooltip>
                    }
                >
                    <Button variant="info">Custom Tooltip</Button>
                </OverlayTrigger>
            </Preview>
        </Interfaces>
    );
};

export default Tooltips;
