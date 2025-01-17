import React from "react";
import Interfaces from "./interfaces";

import './typography.css';

interface TypographyProps {
    dark_mode: boolean;
}
  

const Typography: React.FC<TypographyProps> = ({ dark_mode = false }) => {
    return (
        <Interfaces heading="Typography" dark_mode={dark_mode} links={
            <div className="d-flex gap-3">
                <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/theme">Theme</a>
            </div>
        }>
            <div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100`} style={{ border: "1px solid #e0e0e0" }}>
                    <h6 style={{ padding: "1rem 0 0 1rem" }}>Headings</h6>
                    <hr />
                    <div className="p-2">
                        <div className="card-body">
                            <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>
                            <table className="table">
                                <thead><tr><th className="typography-attrib">Heading</th><th className="typography-attrib">Example</th></tr></thead>
                                <tbody>
                                    <tr><td className="typography-attrib"><p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p></td><td className="typography-attrib"><span className="h1">h1. Bootstrap heading</span></td></tr>
                                    <tr><td className="typography-attrib"><p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p></td><td className="typography-attrib"><span className="h2">h2. Bootstrap heading</span></td></tr>
                                    <tr><td className="typography-attrib"><p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p></td><td className="typography-attrib"><span className="h3">h3. Bootstrap heading</span></td></tr>
                                    <tr><td className="typography-attrib"><p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p></td><td className="typography-attrib"><span className="h4">h4. Bootstrap heading</span></td></tr>
                                    <tr><td className="typography-attrib"><p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p></td><td className="typography-attrib"><span className="h5">h5. Bootstrap heading</span></td></tr>
                                    <tr><td className="typography-attrib"><p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p></td><td className="typography-attrib"><span className="h6">h6. Bootstrap heading</span></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100 mt-5`} style={{ border: "1px solid #e0e0e0" }}>
                    <h6 style={{ padding: "1rem 0 0 1rem" }}>Headings</h6>
                    <hr />
                    <div className="p-3">
                        <p><code className="highlighter-rouge">.h1</code> through<code className="highlighter-rouge">.h6</code>classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
                        <div className="bd-example">
                            <p className="h1">h1. Bootstrap heading</p>
                            <p className="h2">h2. Bootstrap heading</p>
                            <p className="h3">h3. Bootstrap heading</p>
                            <p className="h4">h4. Bootstrap heading</p>
                            <p className="h5">h5. Bootstrap heading</p>
                            <p className="h6">h6. Bootstrap heading</p>
                        </div>
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100 mt-5`} style={{ border: "1px solid #e0e0e0" }}>
                    <h6 style={{ padding: "1rem 0 0 1rem" }}>Display headings</h6>
                    <hr />
                    <div className="p-3">
                        <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
                        <div className="bd-example bd-example-type">
                            <table className="table">
                                <tbody>
                                    <tr><td className="typography-attrib"><span className="display-1">Display 1</span></td></tr>
                                    <tr><td className="typography-attrib"><span className="display-2">Display 2</span></td></tr>
                                    <tr><td className="typography-attrib"><span className="display-3">Display 3</span></td></tr>
                                    <tr><td className="typography-attrib"><span className="display-4">Display 4</span></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100 mt-5`} style={{ border: "1px solid #e0e0e0" }}>
                    <h6 style={{ padding: "1rem 0 0 1rem" }}>Inline text elements</h6>
                    <hr />
                    <div className="p-3">
                        <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
                        <div className="bd-example">
                            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                            <p><del>This line of text is meant to be treated as deleted text.</del></p>
                            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                            <p><u>This line of text will render as underlined</u></p>
                            <p><small>This line of text is meant to be treated as fine print.</small></p>
                            <p><strong>This line rendered as bold text.</strong></p>
                            <p><em>This line rendered as italicized text.</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </Interfaces>
    );
}

export default Typography;
