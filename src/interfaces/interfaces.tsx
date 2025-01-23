import React from "react";

interface InterfacesProps {
    heading: string;
    links: React.ReactNode;
    dark_mode?: boolean;
    children: React.ReactNode;
}

const Interfaces: React.FC<InterfacesProps> = ({ heading, links, dark_mode = false, children }) => {
    return (
        <div className="container-fluid" style={{ backgroundColor: !dark_mode ? "#f0f0f0" : "#1F2937", color: !dark_mode ? "black" : "white", padding: "2rem 2rem", minHeight: "100vh", border: "1px solid #e0e0e0" }}>
            <h2>{heading}</h2>
            {links}
            <div className="children-space mt-5">
                {children}
            </div>
        </div>
    );
} 

export default Interfaces;
