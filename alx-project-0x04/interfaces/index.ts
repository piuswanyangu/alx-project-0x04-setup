import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content displayed inside the button. */
  children: React.ReactNode;
  /** Defines the size of the button (padding and text size). */
  size?: ButtonSize;
  /** Defines the corner radius/shape of the button. */
  shape?: ButtonShape;
  // Standard button attributes (onClick, type, disabled) are inherited
}