import { Button, Spinner } from "react-bootstrap";
import Preview from "../components/preview";
import Interfaces from "./interfaces";

const LoadingButtons = ({ dark_mode = false }) => {
    return (
        <Interfaces
            dark_mode={dark_mode}
            heading="Loading Buttons"
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/components">Components</a>
                </div>
            }
        >
            {/* Preview 1: Basic Loading Button */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/buttons/#button-loading-state"
                heading="Basic Loading Button"
                description="A simple button displaying a spinner to indicate loading."
            >
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="ms-2">Loading...</span>
                </Button>
            </Preview>

            {/* Preview 2: Loading Button with Text */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/buttons/#button-loading-state"
                heading="Loading Button with Text"
                description="A button showing a spinner alongside text."
            >
                <Button variant="success" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="ms-2">Processing...</span>
                </Button>
            </Preview>

            {/* Preview 3: Button with Only Spinner */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/buttons/#button-loading-state"
                heading="Button with Only Spinner"
                description="A button with just a spinner and no text."
            >
                <Button variant="danger" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                </Button>
            </Preview>

            {/* Preview 4: Large Loading Button */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/buttons/#button-loading-state"
                heading="Large Loading Button"
                description="A larger button with a loading spinner."
            >
                <Button variant="warning" size="lg" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="ms-3">Loading Data...</span>
                </Button>
            </Preview>

            {/* Preview 5: Block Loading Button */}
            <Preview
                dark_mode={dark_mode}
                code_href="https://react-bootstrap.github.io/components/buttons/#button-loading-state"
                heading="Block Loading Button"
                description="A full-width button with a loading state."
            >
                <Button variant="info" className="w-100" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="ms-2">Loading...</span>
                </Button>
            </Preview>
        </Interfaces>
    );
};

export default LoadingButtons;
