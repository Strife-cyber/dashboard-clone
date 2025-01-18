import Preview from "../components/preview";
import Interfaces from "./interfaces";

import './accordion.css';
import { useState } from "react";

const Accordion = ({ dark_mode = false }) => {
  const [collapsed, setCollapsed] = useState([true, true, true]);
  const [flushCollapsed, setFlushCollapsed] = useState([true, true, true]);

  const toggleAccordion = (index: number) => {
    const updatedState = [...collapsed];
    updatedState[index] = !updatedState[index];
    setCollapsed(updatedState);
  };

  const toggleFlushAccordion = (index: number) => {
    const updatedState = [...flushCollapsed];
    updatedState[index] = !updatedState[index];
    setFlushCollapsed(updatedState);
  }

  const accordionItems = [
    <div className="accordion-body"><strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>,
    <div className="accordion-body"><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>,
    <div className="accordion-body"><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
  ]

  const flushAccordionItems = [
    <div className="accordion-body"><strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>,
    <div className="accordion-body"><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>,
    <div className="accordion-body"><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
  ]

  return (
    <Interfaces
      heading="Accordion"
      dark_mode={dark_mode}
      links={
        <div className="d-flex gap-3">
          <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
        </div>
      }
    >
      <Preview
        dark_mode={dark_mode}
        heading="React Accordion"
        description="Click the accordions below to expand/collapse the accordion content."
        code_href="https://coreui.io/react/docs/components/accordion"
      >
        <div className="accordion">
          {[0, 1, 2].map((item, index) => (
            <div className="accordion-item" key={index} style={{ backgroundColor: dark_mode ? "black" : "white" }}>
              <div
                className={`accordion-header ${!collapsed[index] ? "expanded" : ""}`}
                style={{
                    color: collapsed[index] ? "blue !important" : "inherit" 
                }}
              >
                <button
                  type="button"
                  className={`accordion-button ${collapsed[index] ? "collapsed" : ""}`}
                  aria-expanded={!collapsed[index]}
                  onClick={() => toggleAccordion(index)}
                  color={ collapsed[index] ? "blue" : "inherit" }
                >
                  Accordion Item #{item + 1}
                </button>
              </div>
              <div
                className={`accordion-collapse collapse ${
                  !collapsed[index] ? "show" : ""
                }`}
              >
                { accordionItems[index] }
              </div>
            </div>
          ))}
        </div>
      </Preview>
      <Preview dark_mode={dark_mode} code_href="https://coreui.io/react/docs/components/accordion#flush" heading="React Accordion flush" description="Add flush to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.">
      <div className="accordion mt-2">
          {[0, 1, 2].map((item, index) => (
            <div className="accordion-item" key={index} style={{ backgroundColor: dark_mode ? "black" : "white" }}>
              <div
                className={`accordion-header ${!flushCollapsed[index] ? "expanded" : ""}`}
                style={{
                    color: flushCollapsed[index] ? "blue !important" : "inherit" 
                }}
              >
                <button
                  type="button"
                  className={`accordion-button ${flushCollapsed[index] ? "collapsed" : ""}`}
                  aria-expanded={!flushCollapsed[index]}
                  onClick={() => toggleFlushAccordion(index)}
                  color={ flushCollapsed[index] ? "blue" : "inherit" }
                >
                  Accordion Item #{item + 1}
                </button>
              </div>
              <div
                className={`accordion-collapse collapse ${
                  !flushCollapsed[index] ? "show" : ""
                }`}
              >
                { flushAccordionItems[index] }
              </div>
            </div>
          ))}
        </div>
      </Preview>
    </Interfaces>
  );
};

export default Accordion;
