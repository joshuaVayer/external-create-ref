import React from 'react';

import ChildComponent from "./Components/ChildComponent";

import appRef from './Refs/appRef';

class App extends React.Component {
  constructor() {
    super();
    console.log("[App] appRef.current is not available in constructor", appRef?.current);
  }

  componentDidMount() {
    console.log("[App] appRef.current is available on first mount", appRef.current);
  }

  render() {
    return (
      <div ref={appRef} className="app">
        <h1>Here's an example of using "createRef" inside the component it's defined in.</h1>
        <ChildComponent />
      </div>
    );
  }
}

export default App;
