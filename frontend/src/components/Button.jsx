import React from 'react';

const Button = ({ title, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` text-xl bg-blue text-white rounded-lg hover:bg-blue-600 transition-colors ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;