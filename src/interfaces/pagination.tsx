import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Pagination = ({ dark_mode = false }) => {
    return (
        <Interfaces 
            dark_mode={dark_mode} 
            heading="Paginations" 
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
                </div>
            }
        >
            {/* Basic Pagination */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/pagination" 
                heading="React Pagination" 
                description="We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <nav aria-label="Pagination example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </Preview>

            {/* Pagination with Icons */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/pagination#icons" 
                heading="React Pagination Working with icons" 
                description="Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with aria attributes."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <nav aria-label="Pagination with icons">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#" aria-label="Previous">&laquo;</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#" aria-label="Next">&raquo;</a></li>
                        </ul>
                    </nav>
                </div>
            </Preview>

            {/* Disabled and Active States */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/pagination#disabled-active" 
                heading="React Pagination Disabled and active states" 
                description="Pagination links are customizable for different circumstances. Use disabled for links that appear un-clickable and .active to indicate the current page."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <nav aria-label="Disabled and active states">
                        <ul className="pagination">
                            <li className="page-item disabled"><a className="page-link" href="#" tabIndex={-1} aria-disabled="true">«</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">»</a></li>
                        </ul>
                    </nav>
                </div>
            </Preview>

            {/* Pagination Sizing */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/pagination#sizing" 
                heading="React Pagination Sizing" 
                description="Fancy larger or smaller pagination? Add size='lg' or size='sm' for additional sizes."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <nav aria-label="Large pagination">
                        <ul className="pagination pagination-lg">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                    <nav aria-label="Small pagination">
                        <ul className="pagination pagination-sm">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </Preview>

            {/* Pagination Alignment */}
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/pagination#alignment" 
                heading="React Pagination Alignment" 
                description="Change the alignment of pagination components with flexbox utilities."
            >
                <div className="tab-pane fade active show p-3 preview">
                    <nav aria-label="Left-aligned pagination">
                        <ul className="pagination justify-content-start">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                    <nav aria-label="Center-aligned pagination">
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                    <nav aria-label="Right-aligned pagination">
                        <ul className="pagination justify-content-end">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </Preview>
        </Interfaces>
    );
};

export default Pagination;
