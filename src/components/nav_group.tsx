import React, { useState } from "react";
import NavItem, { navItem } from "./nav_item";
import bullet_icon from "../assets/bullet.svg";
import chevron_icon from "../assets/chevron.svg";

export interface NavGroupProps {
    title: string;
    items: navItem[];
    icon: React.ReactNode;
}

const NavGroup: React.FC<NavGroupProps> = ({ title, items, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleGroup = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Group Header */}
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    toggleGroup();
                }}
                className="nav-link nav-group-toggle d-flex align-items-center flex-grow-1"
                style={{
                    padding: "10px 15px",
                    color: "#e0e0e0",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#444")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
                <span
                    className="nav-icon"
                    style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "24px",
                        height: "24px",
                    }}
                >
                    {icon}
                </span>
                <p
                    style={{
                        margin: 0,
                        color: "#e0e0e0",
                        flexGrow: 1,
                    }}
                >
                    {title}
                </p>
                <span
                    style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "16px",
                        height: "16px",
                        transition: "transform 0.3s",
                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                >
                    {/* Chevron Icon */}
                    <img src={chevron_icon} alt="Chevron Icon" />
                </span>
            </a>

            {/* Group Items */}
            <ul
                className="nav-group-items"
                style={{
                    padding: isOpen ? "10px" : "0",
                    listStyle: "none",
                    margin: 0,
                    height: isOpen ? "auto" : "0",
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                }}
            >
                {items.map((item, index) => (
                    <NavItem
                        key={index}
                        href={item.href}
                        icon={<img src={bullet_icon} alt="Bullet Icon"/>}
                        badge={item.badge}
                    >
                        <span
                            style={{
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: "500",
                            }}
                        >
                            {item.label}
                        </span>
                    </NavItem>
                ))}
            </ul>
        </>
    );
};

export default NavGroup;
