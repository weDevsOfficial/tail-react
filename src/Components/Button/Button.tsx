import { ArrowPathIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { getColorClasses } from '../../utils/colorUtils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  style?: 'fill' | 'outline' | 'link';
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  as?: React.ElementType;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  style = 'fill',
  type = 'button',
  disabled = false,
  as = 'button',
  loading = false,
  className = '',
  onClick,
  href,
  target,
  rel,
  size = 'medium',
}) => {
  const getStyleClasses = () => {
    if (variant === 'primary') {
      if (style === 'fill') {
        return twMerge(
          getColorClasses({
            bg: '600',
            'dark:bg': '500',
            'hover:bg': '700',
            'dark:hover:bg': '400',
            'focus-visible:outline': '',
            'focus-visible:outline-offset': '',
            'focus-visible:outline-2': '',
            'focus-visible:outline-': '600',
          }),
          'text-white shadow-sm'
        );
      } else if (style === 'outline') {
        return twMerge(
          getColorClasses({
            ring: '600',
            'dark:ring': '400',
            text: '600',
            'dark:text': '400',
            'hover:bg': '600',
            'dark:hover:bg': '400',
            'dark:hover:text': '700',
          }),
          'bg-white dark:bg-transparent ring-1 ring-inset hover:text-white shadow-sm'
        );
      } else if (style === 'link') {
        return twMerge(
          getColorClasses({
            text: '600',
            'dark:text': '400',
            'hover:text': '500',
          })
        );
      }
    }

    // If not primary or a different variant, use the existing styles
    return Styles[`${variant}:${style}`];
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'rounded px-2 py-1 text-xs';
      case 'medium':
        return 'rounded-md px-4 py-2 text-sm';
      case 'large':
        return 'rounded-md px-5 py-3 text-sm';
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
    const styleClasses = getStyleClasses();

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return React.createElement(
      as,
      {
        className: twMerge(commonStyles, styleClasses, sizeStyles, disabledStyles, className),
        type,
        disabled: disabled,
        onClick: handleClick,
        href,
        target,
        rel,
      },
      loading ? <ArrowPathIcon className="w-5 h-5 inline-block mr-2 animate-spin" /> : null,
      children
    );
  };

  return renderButton();
};

// Keep the original Styles object for secondary and danger variants
const Styles = {
  'primary:fill':
    'bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  'primary:outline':
    'bg-white dark:bg-transparent ring-1 ring-inset ring-indigo-600 dark:ring-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white dark:hover:text-indigo-700 shadow-sm',
  'primary:link': 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-500',
  'secondary:fill':
    'bg-white dark:bg-white/10 ring-1 ring-inset ring-gray-300 dark:ring-white/10 hover:bg-gray-50 hover:bg-white/5 text-gray-900 dark:text-white shadow-sm',
  'secondary:outline':
    'bg-white dark:bg-transparent dark:ring-1 dark:ring-gray-400 hover:bg-gray-50 text-gray-900 dark:text-gray-400 shadow-sm',
  'secondary:link': 'text-gray-900 dark:text-gray-400 hover:text-gray-500',
  'danger:fill': 'bg-red-600 dark:bg-red-500 hover:bg-red-500 text-white',
  'danger:outline':
    'bg-white ring-1 ring-inset ring-red-600 hover:bg-red-600 text-red-600 hover:text-white shadow-sm',
  'danger:link': 'text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400',
};

export { Button };
