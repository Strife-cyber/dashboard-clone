import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Progress = ({ dark_mode = false }) => {
  return (
    <Interfaces
      dark_mode={dark_mode}
      heading="Progress"
      links={
        <div className="d-flex gap-3">
          <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/base">Base</a>
        </div>
      }
    >
      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/progress"
        heading="React Progress Basic Example"
        description="Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use the HTML5 <progress> element, ensuring you can stack progress bars, animate them, and place text labels over them."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="progress">
            <div className="progress-bar" style={{ width: "50%" }}>
              50%
            </div>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/progress"
        heading="React Progress Labels"
        description="Add labels to your progress bars by placing text within the <CProgressBar>."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="progress">
            <div className="progress-bar" style={{ width: "25%" }}>
              25%
            </div>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/progress"
        heading="React Progress Height"
        description="We only set a height value on the <CProgress>, so if you change that value, the inner <CProgressBar> will automatically resize accordingly."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="progress" style={{ height: "30px" }}>
            <div className="progress-bar" style={{ width: "70%" }}>
              70%
            </div>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/progress"
        heading="React Progress Backgrounds"
        description="Use color prop to change the appearance of individual progress bars."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="progress">
            <div
              className="progress-bar bg-success"
              style={{ width: "60%" }}
            >
              60%
            </div>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/progress"
        heading="React Progress Multiple Bars"
        description="Include multiple progress bars in a progress component if you need."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="progress">
            <div
              className="progress-bar bg-info"
              style={{ width: "50%" }}
            >
              50%
            </div>
            <div
              className="progress-bar bg-warning"
              style={{ width: "30%" }}
            >
              30%
            </div>
            <div
              className="progress-bar bg-danger"
              style={{ width: "20%" }}
            >
              20%
            </div>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/progress"
        heading="React Progress Striped"
        description="Add variant='striped' to any <CProgressBar> to apply a stripe via CSS gradient over the progress bar's background color."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped"
              style={{ width: "50%" }}
            >
              50%
            </div>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/progress"
        heading="React Progress Animated Stripes"
        description="The striped gradient can also be animated. Add animated property to <CProgressBar> to animate the stripes right to left via CSS3 animations."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "50%" }}
            >
              50%
            </div>
          </div>
        </div>
      </Preview>
    </Interfaces>
  );
};

export default Progress;
