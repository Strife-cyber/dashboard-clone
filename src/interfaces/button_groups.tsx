import Preview from "../components/preview";
import Interfaces from "./interfaces";

const ButtonGroups = ({ dark_mode = false }) => {
  return (
    <Interfaces
      dark_mode={dark_mode}
      heading="Button Groups"
      links={
        <div className="d-flex gap-3">
          <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/buttons">Buttons</a>
        </div>
      }
    >
      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/button-groups"
        heading="React Button Group"
        description="Button groups are a collection of buttons on a single line. They allow you to group buttons together to perform a related action."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="btn-group">
            <button className="btn btn-primary">Button 1</button>
            <button className="btn btn-primary">Button 2</button>
            <button className="btn btn-primary">Button 3</button>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/button-groups"
        heading="React Button Group with Icons"
        description="You can combine buttons with icons in button groups."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="btn-group">
            <button className="btn btn-primary">
              <i className="cil-heart"></i> Like
            </button>
            <button className="btn btn-primary">
              <i className="cil-share"></i> Share
            </button>
            <button className="btn btn-primary">
              <i className="cil-comment"></i> Comment
            </button>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/button-groups"
        heading="React Button Group Vertical"
        description="Button groups can be arranged vertically by setting the className to `btn-group-vertical`."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="btn-group-vertical">
            <button className="btn btn-secondary">Button 1</button>
            <button className="btn btn-secondary">Button 2</button>
            <button className="btn btn-secondary">Button 3</button>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/button-groups"
        heading="React Button Group with Dropdown"
        description="You can combine button groups with dropdowns for additional actions."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="btn-group">
            <button className="btn btn-info">Action 1</button>
            <button className="btn btn-info">Action 2</button>
            <div className="btn-group">
              <button className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Dropdown Action 1</a></li>
                <li><a className="dropdown-item" href="#">Dropdown Action 2</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/button-groups"
        heading="React Button Group with Block-Level Buttons"
        description="Button groups can also span the full width of a parent with block-level buttons."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="btn-group d-grid gap-2">
            <button className="btn btn-success">Full-width Button 1</button>
            <button className="btn btn-success">Full-width Button 2</button>
            <button className="btn btn-success">Full-width Button 3</button>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/button-groups"
        heading="React Button Group with Sizes"
        description="You can adjust the size of the button group by using size classes."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="btn-group">
            <button className="btn btn-primary btn-lg">Large Button</button>
            <button className="btn btn-primary">Normal Button</button>
            <button className="btn btn-primary btn-sm">Small Button</button>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/button-groups"
        heading="React Button Group with Active State"
        description="Set an active button in the button group to highlight it."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="btn-group">
            <button className="btn btn-primary">Button 1</button>
            <button className="btn btn-primary active">Button 2</button>
            <button className="btn btn-primary">Button 3</button>
          </div>
        </div>
      </Preview>

      <Preview
        dark_mode={dark_mode}
        code_href="https://coreui.io/react/docs/components/button-groups"
        heading="React Button Group with Disabled State"
        description="Add a disabled state to any button in a button group."
      >
        <div className="tab-pane fade active show p-3 preview">
          <div className="btn-group">
            <button className="btn btn-danger" disabled>
              Disabled
            </button>
            <button className="btn btn-danger">Active</button>
            <button className="btn btn-danger" disabled>
              Disabled
            </button>
          </div>
        </div>
      </Preview>
    </Interfaces>
  );
};

export default ButtonGroups;
