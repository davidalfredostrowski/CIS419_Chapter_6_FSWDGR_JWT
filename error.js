ubuntu@ip-172-31-4-219:~/graphbook/src/client/components$ cat error.js
import React from 'react';

export default ({ children }) => {
  return (
    <div className="error message">
      {children}
    </div>
  );
}
