import React from 'react';
import './StarBorder.css';

export interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: number | string;
  children?: React.ReactNode;
}

export const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'div',
  className = '',
  color = '#ED1B77',
  speed = '5s',
  thickness = 2,
  backgroundColor = '#FFFFFF',
  textColor = 'inherit',
  borderColor = 'rgba(232, 226, 214, 0.8)',
  borderRadius = 24,
  children,
  style,
  ...rest
}) => {
  const radiusValue = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px`,
        borderRadius: radiusValue,
        ...style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed
        }}
      />
      <div
        className="star-inner-content"
        style={{
          background: backgroundColor,
          color: textColor,
          borderColor,
          borderRadius: `calc(${radiusValue} - ${thickness}px)`
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
