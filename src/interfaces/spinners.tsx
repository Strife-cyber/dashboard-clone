import { Spinner } from "react-bootstrap";
import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Spinners = ({ dark_mode = false }) => {
    return (
        <Interfaces
            dark_mode={dark_mode}
            heading="Spinners"
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/components">Components</a>
                </div>
            }
        >
            {/* Preview 1: Basic Spinner */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/spinners#overview"
                heading="Basic Spinner"
                description="A simple loading spinner with a border animation."
            >
                <Spinner animation="border" variant="primary" />
            </Preview>

            {/* Preview 2: Spinner Colors */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/spinners#colors"
                heading="Spinner Colors"
                description="Spinners can have different colors, such as primary, secondary, success, danger, and more."
            >
                <div className="d-flex gap-3">
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                </div>
            </Preview>

            {/* Preview 3: Spinner with Growing Animation */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/spinners#animation"
                heading="Spinner with Growing Animation"
                description="A growing spinner to indicate an ongoing process."
            >
                <Spinner animation="grow" variant="info" />
            </Preview>

            {/* Preview 4: Spinner Inside Buttons */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/spinners#buttons"
                heading="Spinner Inside Buttons"
                description="Spinners can be embedded inside buttons to indicate a loading state."
            >
                <div className="d-flex gap-3">
                    <button className="btn btn-primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />{" "}
                        Loading...
                    </button>
                    <button className="btn btn-success" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />{" "}
                        Processing...
                    </button>
                </div>
            </Preview>
        </Interfaces>
    );
};

export default Spinners;
