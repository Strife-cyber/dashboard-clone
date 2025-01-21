import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Placeholders = ({ dark_mode = false }) => {
    return (
        <Interfaces 
            dark_mode={dark_mode} 
            heading="Placeholders" 
            links={
                <div className="d-flex gap-3">
                    <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
                </div>
            }
        >
            <Preview dark_mode={dark_mode} code_href="https://coreui.io/react/docs/components/placeholders" heading="React Placeholder" description="In the example below, we take a typical card component and recreate it with placeholders applied to create a 'loading card'. Size and proportions are the same between the two.">
                <div className="tab-pane fade active show p-3 preview"> <div className="d-flex justify-content-around p-3">  <div className="card" style={{width: "18rem"}}>  <img className="card-img-top" src="https://coreui.io/demos/next-js/2.0/modern/_next/static/media/react.34f8281a.jpg"/>  <div className="card-body"    ><h5 className="card-title">Card title</h5><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</    p><a className="btn btn-primary" href="#">Go somewhere</a></div></div>  <div className="card" style={{width: "18rem"}}>  <svg className="card-img-top" width="100%" height="162" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg> <div className="card-body"   ><h5 className="card-title placeholder-glow col-7"><   span className="placeholder col-6"></span></h5><p className="card-text placeholder-glow">< span className="placeholder col-7"></span><  span className="placeholder col-4"></span><   span className="placeholder col-4"></span><    span className="placeholder col-6"></span>< span className="placeholder col-8"></span></ p><a className="btn btn-undefined placeholder bg-primary col-6 disabled" aria-disabled="true" tabIndex={-1} href="#"></a></div></div></div></div>
            </Preview>
            <Preview dark_mode={dark_mode} code_href="https://coreui.io/react/docs/components/placeholders" heading="React Placeholder" description="Create placeholders with the <CPlaceholder> component and a grid column propx (e.g., xs=6) to set the width. They can replace the text inside an element or be added as a modifier class to an existing component.">
                <div className="tab-pane fade active show p-3 preview"><p aria-hidden="true"><span className="placeholder col-6"></span></p><a className="btn btn-undefined placeholder bg-primary col-4 disabled" aria-disabled="true" tabIndex={-1} aria-hidden="true" href="#"></a></div>
            </Preview>
            <Preview dark_mode={dark_mode} code_href="https://coreui.io/react/docs/components/placeholders" heading="React Placeholder width" description="You can change the width through grid column classes, width utilities, or inline styles.">
            <div className="tab-pane fade active show p-3 preview"><span className="placeholder col-6"></span><span className="placeholder w-75"></span><span className="placeholder" style={{width: "30%"}}></span></div>
            </Preview>
        </Interfaces>
    )
}

export default Placeholders;
