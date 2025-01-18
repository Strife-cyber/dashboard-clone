import Preview from "../components/preview";
import Interfaces from "./interfaces";

const ListGroup = ({ dark_mode = false }) => {
    return (
        <Interfaces 
            dark_mode={dark_mode} 
            heading="List Group" 
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
                </div>
            }
        >
            {/* Basic List Group */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/list-group" 
                heading="Basic List Group" 
                description="The most basic list group displays a series of items."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </Preview>

            {/* List Group with Badges */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/list-group#badges" 
                heading="List Group with Badges" 
                description="Add badges to list items for additional context."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Dapibus ac facilisis in
                            <span className="badge bg-success rounded-pill">2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span className="badge bg-danger rounded-pill">1</span>
                        </li>
                    </ul>
                </div>
            </Preview>

            {/* Interactive List Group */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/list-group#interactive" 
                heading="Interactive List Group" 
                description="Make list items interactive by using buttons or links."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <div className="list-group">
                        <button 
                            type="button" 
                            className="list-group-item list-group-item-action active" 
                            aria-current="true"
                        >
                            The current button
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">
                            A second button item
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">
                            A third button item
                        </button>
                        <button type="button" className="list-group-item list-group-item-action" disabled>
                            A disabled button item
                        </button>
                    </div>
                </div>
            </Preview>
        </Interfaces>
    );
};

export default ListGroup;
