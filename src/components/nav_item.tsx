import React from "react";

export interface navItem {
    href: string;
    icon?: React.ReactNode; // `icon` is now optional
    badge?: {
        text: string;
        style: React.CSSProperties;
    };
    label?: string;
}

interface NavItemProps extends navItem {
    width?: string;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, children, badge, width = "20px" }) => {
    const containerStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        padding: "10px 15px",
        borderRadius: "8px",
        transition: "background-color 0.3s ease",
        cursor: "pointer",
        maxWidth: "25vw",
    };

    const linkStyle: React.CSSProperties = {
        textDecoration: "none",
        color: "#333",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
    };

    const iconStyle: React.CSSProperties = {
        marginRight: "10px",
        width: width,
    };

    const badgeStyle: React.CSSProperties = badge?.style || {
        backgroundColor: "#f0ad4e",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "15px",
        fontSize: "12px",
        marginLeft: "auto",
    };

    const hoverStyle: React.CSSProperties = {
        backgroundColor: "grey",
    };

    return (
        <div
            className="nav-item"
            style={{
                ...containerStyle,
            }}
            onMouseEnter={(e) =>
                Object.assign((e.currentTarget as HTMLElement).style, hoverStyle)
            }
            onMouseLeave={(e) =>
                Object.assign((e.currentTarget as HTMLElement).style, { backgroundColor: "transparent" })
            }
        >
            <a className="nav-link" href={href} style={linkStyle}>
                {icon && ( // Only render the icon if it's provided
                    <span className="nav-icon" style={iconStyle}>
                        {icon}
                    </span>
                )}
                {children}
            </a>
            {badge && (
                <span className="badge" style={badgeStyle}>
                    {badge.text}
                </span>
            )}
        </div>
    );
};

export default NavItem;
