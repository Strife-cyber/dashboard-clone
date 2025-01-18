import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Collapse = ({ dark_mode = false }) => {
    return (
        <Interfaces 
            dark_mode={dark_mode} 
            heading="Collapse" 
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
                </div>
            }
        >
            {/* Basic Vertical Collapse */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/collapse" 
                heading="React Collapse" 
                description="You can use a link or a button component to trigger the collapse."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <button 
                        className="btn btn-primary mb-3" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#basicCollapse" 
                        aria-expanded="false" 
                        aria-controls="basicCollapse"
                    >
                        Toggle Collapse
                    </button>
                    <div className="collapse" id="basicCollapse">
                        <div className="card card-body">
                            This is the basic vertical collapse. It expands and collapses vertically.
                        </div>
                    </div>
                </div>
            </Preview>

            {/* Horizontal Collapse */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/collapse#horizontal" 
                heading="Horizontal Collapse" 
                description="You can have content collapse horizontally as well."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <button 
                        className="btn btn-primary mb-3" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#horizontalCollapse" 
                        aria-expanded="false" 
                        aria-controls="horizontalCollapse"
                    >
                        Toggle Horizontal Collapse
                    </button>
                    <div 
                        className="collapse collapse-horizontal" 
                        id="horizontalCollapse"
                        style={{ minHeight: "120px" }} // Adds height to better visualize horizontal collapse
                    >
                        <div className="card card-body" style={{ width: "200px" }}>
                            This is a horizontal collapse. It expands and collapses horizontally.
                        </div>
                    </div>
                </div>
            </Preview>

            {/* Vertical Sliding Collapse */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/collapse#custom-animation" 
                heading="Vertical Sliding Collapse" 
                description="Use custom CSS for a vertical sliding animation."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <button 
                        className="btn btn-primary mb-3" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#verticalSlidingCollapse" 
                        aria-expanded="false" 
                        aria-controls="verticalSlidingCollapse"
                    >
                        Toggle Vertical Sliding Collapse
                    </button>
                    <div 
                        className="collapse" 
                        id="verticalSlidingCollapse"
                        style={{
                            transition: "height 0.5s ease", // Custom animation for sliding effect
                        }}
                    >
                        <div className="card card-body">
                            This collapse uses a custom animation to slide in and out vertically.
                        </div>
                    </div>
                </div>
            </Preview>
        </Interfaces>
    );
};

export default Collapse;
