import React from "react";
import brand from "../../assets/brand.svg";

import './side_bar_header.css';

interface SideBarHeaderProps {
    isOpen: boolean; // Determines if the sidebar is open
    setClosed: () => void; // Toggles the sidebar state
}

const SideBarHeader: React.FC<SideBarHeaderProps> = ({ isOpen = true, setClosed }) => {
    return (
        <div>
            <div className="side-bar-header d-flex align-items-center justify-content-center p-4 gap-3">
                <a href="#"> {/* TODO: Add redirect link */}
                    <img src={brand} alt="Brand Logo" />
                </a>
                <button
                    className={`arrow-button ${isOpen ? "rotate-left" : "rotate-right"}`}
                    onClick={setClosed}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>
            </div>
            <hr style={{ margin: "0", width: "250px", color: "blue" }}/>
        </div>
    );
};

export default SideBarHeader;
