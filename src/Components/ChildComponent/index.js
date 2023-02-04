import React from "react";

import appRef from "../../Refs/appRef";
import childRef from "../../Refs/childRef";

const ChildComponent = () => {
  React.useEffect(() => {
    console.log("[ChildComponent] appRef.current is only available after first mount", appRef.current);
    console.log("[ChildComponent] childRef.current is only available after first mount", childRef.current);
  }, []);


  onclick = () => {
    console.log(appRef.current);
  }

  return (
    <div ref={childRef} className="child-component">
      <h2>I am the child component</h2>
      <p> I can access the appRef from inside my component.</p>
      <button onClick={onclick}>Log appRef</button>
    </div>
  );
}

export default ChildComponent;
