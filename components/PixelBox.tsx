import React from 'react';

interface PixelBoxProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export const PixelBox: React.FC<PixelBoxProps> = ({
  children,
  color = '#764ba2',
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        background: 'white',
        boxShadow: `
          0 0 0 3px ${color},
          3px 0 0 3px ${color},
          -3px 0 0 3px ${color},
          0 3px 0 3px ${color},
          0 -3px 0 3px ${color},
          6px 6px 0 0 rgba(0,0,0,0.3)
        `,
        imageRendering: 'pixelated',
      }}
    >
      {children}
    </div>
  );
};