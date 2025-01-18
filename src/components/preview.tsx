import React from "react";

interface PreviewProps {
    heading: string;
    description: string;
    dark_mode: boolean;
    code_href: string;
    children: React.ReactNode;
}

const Preview: React.FC<PreviewProps> = ({ heading, description, dark_mode = false, code_href, children }) => {
    return (
        <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100 mt-5`} style={{ border: "1px solid #e0e0e0" }}>
            <h6 style={{ padding: "1rem 0 0 1rem" }}>{heading}</h6>
            <hr />
            <div className="p-3">
                <p style={{ fontSize: "12px" }}>{description}</p>

                <div className="mt-3">
                    <ul className="nav nav-underline-border" role="navigation">
                        <li className="nav-item" style={{ border: "2px solid grey", borderRadius: "5px" }}>
                            <a className="nav-link active" aria-current="page" href="#" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="icon me-2"
                                    role="img"
                                    aria-hidden="true"
                                    style={{ width: "20px", height: "20px" }}
                                >
                                    <path
                                        fill="blue"
                                        d="M444.4,235.236,132.275,49.449A24,24,0,0,0,96,70.072V434.214a24.017,24.017,0,0,0,35.907,20.839L444.03,276.7a24,24,0,0,0,.367-41.461ZM128,420.429V84.144L416.244,255.71 8Z"
                                        className="ci-primary"
                                    ></path>
                                </svg>
                                Preview
                            </a>
                        </li>
                        <li className="mx-2 nav-item" style={{ border: "2px solid grey", borderRadius: "5px" }}>
                            <a className="nav-link" href={code_href} target="_blank" style={{ color: "grey" }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="icon me-2"
                                    role="img"
                                    aria-hidden="true"
                                    style={{ width: "20px", height: "20px" }}
                                >
                                    <polygon
                                        fill="#e0e0e0"
                                        points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"
                                        className="ci-primary"
                                    ></polygon>
                                    <polygon
                                        fill="#e0e0e0"
                                        points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"
                                        className="ci-primary"
                                    ></polygon>
                                    <polygon
                                        fill="#e0e0e0"
                                        points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"
                                        className="ci-primary"
                                    ></polygon>
                                </svg>
                                Code
                            </a>
                        </li>
                    </ul>
                    <div className="p-3" style={{ background: !dark_mode ? "#e0e0e0" : "#323a49", border: "1px solid #e0e0e0" }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
