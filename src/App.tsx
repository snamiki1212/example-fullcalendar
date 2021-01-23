import React from "react";
import { FullCalendar } from "./components/organisms/FullCalendar";

import {Provider} from './Provider'
import {useAgeContext} from './hooks/useAgeContext'

function App() {
  const { birth } = useAgeContext();
  const onChange = (e: React.SyntheticEvent) => {
    // const _value = e.target.value;
    console.log(e);
  };
  return (
    <div className="App">
      <Provider>
        <input value={birth} type="date" onChange={onChange} />
        <FullCalendar />
      </Provider>
    </div>
  );
}

export default App;
