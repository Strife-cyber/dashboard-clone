import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Card = ({ dark_mode = false }) => {
    return (
        <Interfaces dark_mode={dark_mode} heading="Cards" links={
            <div className="d-flex gap-3">
                <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
            </div>
        }>
            <Preview dark_mode={dark_mode} code_href="https://coreui.io/react/docs/components/card" heading="Card Example" description="Cards are built with as little markup and styles as possible but still manage to deliver a bunch of control and customization. Built with flexbox, they offer easy alignment and mix well with other CoreUI components. Cards have no top, left, and right margins by default, so use spacing utilities as needed. They have no fixed width to start, so they'll fill the full width of its parent.
                Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element.">
                <div className="tab-pane fade active show p-3 preview"><div className="card" style={{ width: "18rem" }}><img className="card-img-top" src="https://coreui.io/demos/next-js/2.0/modern/_next/static/media/react.34f8281a.jpg"/><div className="card-body"><h5 className="card-title">Card title</h5><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a className="btn btn-primary" href="#">Go somewhere</a></div></div></div>
            </Preview>
            <div className="mt-2"></div>
            <Preview dark_mode={dark_mode} code_href="https://coreui.io/react/docs/components/card" heading="Card Body" description="The main block of a card is the <CCardBody>. Use it whenever you need a padded section within a card.">
            <div className="tab-pane fade active show p-3 preview"><div className="card"><div className="card-body">This is some text within a card body.</div></div></div>
            </Preview>
        </Interfaces>
    );
};

export default Card;
