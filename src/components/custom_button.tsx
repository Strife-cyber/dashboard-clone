import React from "react";

interface ButtonProps {
  text: string; // Button text
  iconClass?: string; // Optional Font Awesome icon class (e.g., "fas fa-user-plus")
  backgroundColor?: string; // Button background color
  hoverColor?: string; // Background color on hover
  textColor?: string; // Text color
  borderColor?: string; // Border color
  width?: string; // Button width
  height?: string; // Button height
  fontSize?: string; // Text font size
  iconSize?: string; // Icon font size
  borderRadius?: string; // Button border radius
  onClick?: () => void; // Click handler
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  iconClass,
  backgroundColor = "#6c757d",
  hoverColor = "#5a6268",
  textColor = "#fff",
  borderColor = "#6c757d",
  width = "auto",
  height = "auto",
  fontSize = "16px",
  iconSize = "20px",
  borderRadius = "4px",
  onClick,
}) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 16px",
        backgroundColor,
        color: textColor,
        fontSize,
        fontWeight: 500,
        borderRadius,
        cursor: "pointer",
        border: `1px solid ${borderColor}`,
        transition: "background-color 0.2s ease",
        userSelect: "none",
        width,
        height,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = backgroundColor;
      }}
      onClick={onClick}
    >
      {iconClass && (
        <i
          className={iconClass}
          style={{
            marginRight: text ? "8px" : "0", // Add margin only if text is present
            fontSize: iconSize,
          }}
        ></i>
      )}
      {text}
    </div>
  );
};

export default CustomButton;
