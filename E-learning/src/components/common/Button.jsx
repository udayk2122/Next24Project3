import React from 'react';

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
}) => {
  const baseStyles = 'font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300';

  const variantStyles = {
    primary: 'bg-yellow-300 text-white hover:bg-blue-600 focus:ring-primary',
    ghost: 'bg-blue-300 text-primary hover:bg-yellow-100 focus:ring-primary',
  };

  const sizeStyles = {
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-7 text-lg',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};