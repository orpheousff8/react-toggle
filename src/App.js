import React, { useState } from 'react';
import ToggleSwitch from './Components/ToggleSwitch';

function App() {
  const optionLabels = ["On", "Off"];
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  return (
    <div className="App">
      <h4>The original tutorial and codes are at: <a href="https://www.sitepoint.com/react-toggle-switch-reusable-component/">sitepoint.com</a> by Praveen Kumar and Michael Wanyoike</h4>
      <label htmlFor={`onReadOnly`}>Custom label as On, readOnly</label>
      <ToggleSwitch
        id={`onReadOnly`}
        name={`onReadOnly`}
        checked={true}
        optionLabels={optionLabels}
        readOnly={true}
      />
      <br />
      <label htmlFor={`offReadOnly`}>Custom label as Off, readOnly</label>
      <ToggleSwitch
        id={`offReadOnly`}
        name={`offReadOnly`}
        checked={false}
        optionLabels={optionLabels}
        readOnly={true}
      />
      <br />
      <label htmlFor={`toggle1`}>Toggle1 checked</label>
      <ToggleSwitch
        id={`toggle1`}
        name={`toggle1`}
        checked={toggle1}
        onChange={() => setToggle1(!toggle1)}
      />
      <br />
      <label htmlFor={`toggle2`}>Toggle2 unchecked</label>
      <ToggleSwitch
        id={`toggle2`}
        name={`toggle2`}
        checked={toggle2}
        onChange={() => setToggle2(!toggle2)}
      />
    </div>
  );
}

export default App;
