import React from 'react';

function ChildComponent({ children }) {
  return (
    <div>
      <p>Proslijeđeno: {children}</p>
    </div>
  );
}

export default ChildComponent;
