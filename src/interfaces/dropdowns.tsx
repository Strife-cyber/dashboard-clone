import { Dropdown, DropdownButton, ButtonGroup, Button } from "react-bootstrap";
import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Dropdowns = ({ dark_mode = false }) => {
    return (
        <Interfaces
            dark_mode={dark_mode}
            heading="Dropdowns"
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/components">Components</a>
                </div>
            }
        >
            {/* Preview 1: Basic Dropdown */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/dropdowns#overview"
                heading="Basic Dropdown"
                description="A basic dropdown with a single menu."
            >
                <Dropdown>
                    <Dropdown.Toggle variant="primary">Dropdown Button</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Preview>

            {/* Preview 2: Dropdown with Button Groups */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/dropdowns#button-groups"
                heading="Dropdown with Button Group"
                description="Dropdowns can be used as part of a button group."
            >
                <ButtonGroup>
                    <Button variant="secondary">Button</Button>
                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </Preview>

            {/* Preview 3: Split Button Dropdown */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/dropdowns#split-button-dropdowns"
                heading="Split Button Dropdown"
                description="A split dropdown button allows you to have an additional action along with the dropdown menu."
            >
                <Dropdown as={ButtonGroup}>
                    <Button variant="info">Split Button</Button>
                    <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Preview>

            {/* Preview 4: Dropdown with Alignment */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/dropdowns#menu-alignment"
                heading="Dropdown with Menu Alignment"
                description="Dropdown menus can be aligned to the left, right, or center."
            >
                <Dropdown align="end">
                    <Dropdown.Toggle variant="success">Aligned Dropdown</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Right Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Preview>
        </Interfaces>
    );
};

export default Dropdowns;
