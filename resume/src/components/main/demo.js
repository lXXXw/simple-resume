import React from "react";

const ChildComponent = React.forwardRef((props, ref) => (
  <div>
    {/* Other elements */}
    <button ref={ref}>Click me!</button>
  </div>
));
ChildComponent.displayName = "ChildComponent";
export default ChildComponent;
