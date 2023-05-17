import React from "react";
import TestComponent from "./components/component/Components";
import WithDataComponent from "./components/withDataComponent/WithDataComponent";

function App() {
  const testProps = {
    testValue: 1,
    testName: 'asdasd'
  }
  const params = {
    endpoint: 'https://jsonplaceholder.typicode.com/todos/1',
    propName: 'users'
  }

  const testHoc = class WithDataComponent extends React.Component {}

  const Hoc = WithDataComponent(TestComponent, params.endpoint, params.propName)

  return (
    <div className="App">
      {/* <TestComponent {...testProps}></TestComponent> */}
      <Hoc {...testProps} endpoint={params.endpoint} propName={params.propName}></Hoc>
     
    </div>
  );
}

export default App;
