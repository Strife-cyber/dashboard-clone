import React from "react";

import './color_card.css';

interface ColorCardProps {
  title: string;
  hex: string;
  rgb: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ title, hex, rgb }) => {
  return (
    <div className="col-xl-2 col-md-4 col-sm-6 col-12 mb-4">
      <div
        className="w-75 rounded mb-3"
        style={{ paddingTop: "75%", backgroundColor: hex }} // Corrected to use backgroundColor
      ></div>
      <h6>{title}</h6>
      <table className="table w-100">
        <tbody>
          <tr>
            <td className="text-medium-emphasis color-card-attrib ">HEX:</td>
            <td className="font-weight-bold color-card-attrib">{hex}</td>
          </tr>
          <tr>
            <td className="text-medium-emphasis color-card-attrib">RGB:</td>
            <td className="font-weight-bold color-card-attrib">{rgb}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ColorCard;
