import Preview from "../components/preview";
import Interfaces from "./interfaces";

const Buttons = ({ dark_mode = false }) => {
  return (
    <Interfaces
      dark_mode={dark_mode}
      heading="Buttons"
      links={
        <div className="d-flex gap-3">
          <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/buttons">Buttons</a>
        </div>
      }
    >
      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button"
        description="CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience."
      >
        <div className="tab-pane fade active show p-3 preview">
          <button className="btn btn-primary">Normal</button>
          <button className="btn btn-primary active">Active</button>
          <button className="btn btn-primary" disabled>
            Disabled
          </button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button with Icons"
        description="You can combine button with our CoreUI Icons."
      >
        <div className="tab-pane fade active show p-3 preview">
          <button className="btn btn-primary">
            <i className="cil-heart"></i> Normal
          </button>
          <button className="btn btn-primary active">
            <i className="cil-check-circle"></i> Active
          </button>
          <button className="btn btn-primary" disabled>
            <i className="cil-ban"></i> Disabled
          </button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Button Components"
        description="The <CButton> component are designed for <button> , <a> or <input> elements."
      >
        <div className="tab-pane fade active show p-3 preview">
          <a href="#" role="button" className="btn btn-primary">
            Button as Link
          </a>
          <button className="btn btn-primary">Normal Button</button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Outline"
        description="If you need a button, but without the strong background colors, set variant='outline' to remove all background colors."
      >
        <div className="tab-pane fade active show p-3 preview">
          <button className="btn btn-outline-primary">Normal</button>
          <button className="btn btn-outline-primary active">Active</button>
          <button className="btn btn-outline-primary" disabled>
            Disabled
          </button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Ghost"
        description="If you need a ghost variant of button, set variant='ghost' to remove all background colors."
      >
        <div className="tab-pane fade active show p-3 preview">
          <button className="btn btn-ghost-primary">Normal</button>
          <button className="btn btn-ghost-primary active">Active</button>
          <button className="btn btn-ghost-primary" disabled>
            Disabled
          </button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Sizes"
        description="Larger or smaller buttons? Add size='lg' or size='sm' for additional sizes."
      >
        <div className="tab-pane fade active show p-3 preview">
          <button className="btn btn-primary btn-lg">Large</button>
          <button className="btn btn-primary">Normal</button>
          <button className="btn btn-primary btn-sm">Small</button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Pill"
        description="Create pill-shaped buttons."
      >
        <div className="tab-pane fade active show p-3 preview">
          <button className="btn btn-primary btn-pill">Pill Button</button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Square"
        description="Create square-shaped buttons."
      >
        <div className="tab-pane fade active show p-3 preview">
          <button className="btn btn-primary btn-square">Square</button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Disabled State"
        description="Add the disabled boolean prop to any <CButton> component to make buttons look inactive."
      >
        <div className="tab-pane fade active show p-3 preview">
          <button className="btn btn-primary" disabled>
            Disabled
          </button>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Block Buttons"
        description="Create buttons that span the full width of a parent using utilities."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="d-grid gap-2">
            <button className="btn btn-primary">Block Button 1</button>
            <button className="btn btn-secondary">Block Button 2</button>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/buttons"
        heading="React Button Responsive Block Buttons"
        description="Use responsive classes to change button layout based on screen size."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-primary">Responsive Block 1</button>
            <button className="btn btn-secondary">Responsive Block 2</button>
          </div>
        </div>
      </Preview>
    </Interfaces>
  );
};

export default Buttons;
