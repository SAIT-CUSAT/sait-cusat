import React from "react";

// Custom Button component
const CustomButton = ({ text, icon, className, onClick }) => {
  return (
    <button
      className={`flex items-center space-x-2 py-2 px-8 rounded-full ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && <span className="text-lg">{icon}</span>}
    </button>
  );
};

export default CustomButton;
