import React from 'react';

function VisuallyHidden({ as: Component = 'span', ...props }) {
  return (
    <Component
      style={{
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
      }}
      role="presentation"
      {...props}
    />
  );
}

export default VisuallyHidden;
