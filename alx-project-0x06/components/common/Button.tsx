// components/common/Button.tsx

import React from 'react';
// 💡 Add the correct import from the centralized file
import { ButtonProps, ButtonSize, ButtonShape } from '../../interfaces'; 

// 1. Mapping for Button Sizes (kept locally for component logic)
const sizeMap: Record<ButtonSize, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

// 2. Mapping for Button Shapes (kept locally for component logic)
const shapeMap: Record<ButtonShape, string> = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

/**
 * A reusable Button component with configurable size and shape.
 * ❌ Note: The original props were size, shape, and children, not buttonLabel/backgroundColor.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  ...rest
}) => {
  // Get Tailwind classes from the maps
  const sizeClasses = sizeMap[size] || sizeMap.medium;
  const shapeClasses = shapeMap[shape] || shapeMap['rounded-md'];

  // Base styling classes
  const baseClasses =
    'font-medium text-white transition duration-150 ease-in-out ' +
    'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed shadow-md';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${shapeClasses} ${className}`;

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;