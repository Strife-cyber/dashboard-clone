import Preview from "../components/preview";
import Interfaces from "./interfaces";

const NavsAndTabs = ({ dark_mode = false }) => {
    return (
        <Interfaces 
            dark_mode={dark_mode} 
            heading="Navs & Tabs" 
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
                </div>
            }
        >
            {/* Basic Nav */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/navs" 
                heading="Basic Nav" 
                description="A simple navigation element using the nav class."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Another Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </Preview>

            {/* Tabs with Active State */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/navs#tabs" 
                heading="Tabs with Active State" 
                description="Create tabbed navigation with active state styling."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </Preview>

            {/* Pills Navigation */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/navs#pills" 
                heading="Pills Navigation" 
                description="Change nav items to use pill-style navigation."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Another Link</a>
                        </li>
                    </ul>
                </div>
            </Preview>

            {/* Justified Navigation */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/navs#justified" 
                heading="Justified Navigation" 
                description="Make the nav items fill the available width."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <ul className="nav nav-tabs nav-justified">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </Preview>

            {/* Vertical Nav */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/navs#vertical" 
                heading="Vertical Nav" 
                description="Stack the nav items vertically."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Another Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </Preview>

            {/* Nav with Dropdown */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/navs#dropdown" 
                heading="Nav with Dropdown" 
                description="Combine navigation with dropdown functionality."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Preview>
        </Interfaces>
    );
};

export default NavsAndTabs;
