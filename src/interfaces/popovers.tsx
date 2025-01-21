import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import Preview from "../components/preview";
import Interfaces from "./interfaces";

// Define the Placement type explicitly
type Placement = 'top' | 'bottom' | 'left' | 'right';

const Popovers = ({ dark_mode = false }) => {
    // Popover examples
    const basicPopover = (
        <Popover id="basic-popover">
            <Popover.Header as="h3">Popover Title</Popover.Header>
            <Popover.Body>
                And here's some amazing content. It's very engaging. Right?
            </Popover.Body>
        </Popover>
    );

    const directionsPopover = (placement: Placement) => (
        <Popover id={`popover-${placement}`}>
            <Popover.Header as="h3">{placement.charAt(0).toUpperCase() + placement.slice(1)} Popover</Popover.Header>
            <Popover.Body>
                This is a {placement} popover!
            </Popover.Body>
        </Popover>
    );

    const dismissiblePopover = (
        <Popover id="dismissible-popover">
            <Popover.Header as="h3">Dismissible Popover</Popover.Header>
            <Popover.Body>
                Click outside of me, and I will disappear!
            </Popover.Body>
        </Popover>
    );

    return (
        <Interfaces
            dark_mode={dark_mode}
            heading="Popovers"
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/components">Components</a>
                </div>
            }
        >
            {/* Preview 1: Basic Popover */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://coreui.io/react/docs/components/popovers#basic-example"
                heading="Basic Popover"
                description="A basic example of a popover with a title and body text."
            >
                <OverlayTrigger trigger="click" placement="right" overlay={basicPopover}>
                    <Button variant="info">Click me</Button>
                </OverlayTrigger>
            </Preview>

            {/* Preview 2: Popover with Directions */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://coreui.io/react/docs/components/popovers#directions"
                heading="Popover Directions"
                description="Popovers can be placed in four directions: top, right, bottom, and left."
            >
                <div className="d-flex gap-3">
                    {(["top", "right", "bottom", "left"] as Placement[]).map((placement) => (
                        <OverlayTrigger
                            key={placement}
                            trigger="click"
                            placement={placement}
                            overlay={directionsPopover(placement)}
                        >
                            <Button variant="success">{placement}</Button>
                        </OverlayTrigger>
                    ))}
                </div>
            </Preview>

            {/* Preview 3: Dismissible Popover */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://coreui.io/react/docs/components/popovers#dismiss-on-next-click"
                heading="Dismissible Popover"
                description="A popover that hides when clicking outside of it."
            >
                <OverlayTrigger trigger="focus" placement="bottom" overlay={dismissiblePopover}>
                    <Button variant="danger">Dismissible Popover</Button>
                </OverlayTrigger>
            </Preview>
        </Interfaces>
    );
};

export default Popovers;
