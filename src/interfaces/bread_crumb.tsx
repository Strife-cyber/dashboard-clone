import Preview from "../components/preview"
import Interfaces from "./interfaces"

const BreadCrumb = ({ dark_mode = false }) => {
    return (
        <Interfaces dark_mode={dark_mode} heading="Breadcrumbs" links={
            <div className="d-flex gap-3">
                <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
            </div>
        }>
            <Preview dark_mode={dark_mode} code_href="https://coreui.io/react/docs/components/breadcrumb" heading="React Breadcrumb" description="The breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. You don’t have to add separators, because they automatically added in CSS through ::before and content.">
            <div className="tab-pane fade active show p-3 preview"><nav aria-label="breadcrumb"><ol className="breadcrumb"><li className="breadcrumb-item"><a className="" href="#">Home</a></li><li className="breadcrumb-item active" aria-current="page">Library</li></ol></nav><nav aria-label="breadcrumb"><ol className="breadcrumb"><li className="breadcrumb-item"><a className="" href="#">Home</a></li><li className="breadcrumb-item"><a className="" href="#">Library</a></li><li className="breadcrumb-item active" aria-current="page">Data</li></ol></nav><nav aria-label="breadcrumb"><ol className="breadcrumb"><li className="breadcrumb-item"><a className="" href="#">Home</a></li><li className="breadcrumb-item"><a className="" href="#">Library</a></li><li className="breadcrumb-item"><a className="" href="#">Data</a></li><li className="breadcrumb-item active" aria-current="page">Bootstrap</li></ol></nav></div>
            </Preview>
        </Interfaces>
    )
}

export default BreadCrumb;
