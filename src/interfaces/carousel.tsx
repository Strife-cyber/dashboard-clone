import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Carousel = ({ dark_mode = false }) => {
    return (
        <Interfaces dark_mode={dark_mode} heading="Carousel" links={
            <div className="d-flex gap-3">
                <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
            </div>
        }>
            <Preview 
                dark_mode={dark_mode} 
                code_href="https://coreui.io/react/docs/components/carousel" 
                heading="Carousel Slide Only" 
                description="Here’s a carousel with slides">
                <div className="tab-pane fade active show p-3 preview">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        {/* Carousel inner slides */}
                        <div className="carousel-inner">
                            {/* Slide 1 */}
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src="https://coreui.io/demos/next-js/2.0/modern/_next/static/media/react.34f8281a.jpg"
                                    alt="slide 1"
                                />
                            </div>
                            {/* Slide 2 */}
                            <div className="carousel-item active carousel-item-start carousel-item-next">
                                <img
                                    className="d-block w-100"
                                    src="https://coreui.io/demos/next-js/2.0/modern/_next/static/media/angular.ff4b225e.jpg"
                                    alt="slide 2"
                                />
                            </div>
                            {/* Slide 3 */}
                            <div className="carousel-item carousel-item-start carousel-item-next">
                                <img
                                    className="d-block w-100"
                                    src="https://coreui.io/demos/next-js/2.0/modern/_next/static/media/vue.aa12f499.jpg"
                                    alt="slide 3"
                                />
                            </div>
                        </div>

                        {/* Carousel controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </Preview>
        </Interfaces>
    );
};

export default Carousel;
