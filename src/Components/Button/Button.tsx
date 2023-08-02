import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  style: 'fill' | 'outline' | 'link';
  type?: 'button' | 'submit' | 'reset';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  as?: React.ElementType;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const Styles = {
  'primary:fill':
    'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  'primary:outline':
    'bg-white ring-1 ring-inset ring-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-sm',
  'primary:link': 'text-indigo-600 hover:text-indigo-500',
  'secondary:fill':
    'bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-gray-900 shadow-sm',
  'secondary:outline': 'bg-white hover:bg-gray-50 text-gray-900 shadow-sm',
  'secondary:link': 'text-gray-900 hover:text-gray-500',
  'danger:fill': 'bg-red-600 hover:bg-red-500 text-white',
  'danger:outline':
    'bg-white ring-1 ring-inset ring-red-600 hover:bg-red-600 text-red-600 hover:text-white shadow-sm',
  'danger:link': 'text-red-600 hover:text-red-500',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  style = 'fill',
  type = 'button',
  disabled = false,
  as = 'button',
  className = '',
  onClick,
  href,
  target,
  rel,
  size = 'medium',
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'rounded px-2 py-1 text-xs';
      case 'medium':
        return 'rounded-md px-3 py-2 text-sm';
      case 'large':
        return 'rounded-md px-4 py-3 text-sm';
      default:
        return '';
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  const renderButton = () => {
    const commonStyles = 'font-semibold focus:outline-none';
    const sizeStyles = getSizeStyles();

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return React.createElement(
      as,
      {
        className: twMerge(
          commonStyles,
          Styles[`${variant}:${style}`],
          sizeStyles,
          disabledStyles,
          className
        ),
        type,
        disabled: disabled,
        onClick: handleClick,
        href,
        target,
        rel,
      },
      children
    );
  };

  return renderButton();
};

export { Button };
