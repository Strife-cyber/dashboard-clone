import React from "react";
import Interfaces from "./interfaces";

import ColorCard from "../components/color_card";

interface ColorsProps {
  dark_mode: boolean;
}

const Colors: React.FC<ColorsProps> = ({ dark_mode = false }) => {
  return (
    <Interfaces
      heading="Colors"
      dark_mode={dark_mode}
      links={
        <div className="d-flex gap-3">
          <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/theme">Theme</a>
        </div>
      }
    >
      <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100`}>
        <h6 style={{ padding: "1rem 0 0 1rem" }}>Theme Colors</h6>
        <hr />
        <div className="d-flex flex-wrap p-4">
          <ColorCard title="Brand Primary Color" hex="#3d99f5" rgb="rgb(61, 153, 245)" />
          <ColorCard title="Brand Secondary Color" hex="#ff6347" rgb="rgb(255, 99, 71)" />
          <ColorCard title="Success Color" hex="#28a745" rgb="rgb(40, 167, 69)" />
          <ColorCard title="Danger Color" hex="#dc3545" rgb="rgb(220, 53, 69)" />
          <ColorCard title="Warning Color" hex="#ffc107" rgb="rgb(255, 193, 7)" />
          <ColorCard title="Info Color" hex="#17a2b8" rgb="rgb(23, 162, 184)" />
          <ColorCard title="Light Color" hex="#f8f9fa" rgb="rgb(248, 249, 250)" />
        </div>
      </div>
    </Interfaces>
  );
};

export default Colors;
