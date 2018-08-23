import React from 'react';
// import '../styles/styles.css';
import { createStore } from 'redux';

import Toggle from '../components/Toggle';
import UserInput from '../components/UserInput';
import reducer from '../reducers/reducer';

const store = createStore(reducer);
const App = () => (
    <div>
      <h2 className="fizzbuzz-title">FizzBuzz</h2>
      <hr/>
      <Toggle store={store} />
      <hr/>
      <UserInput store={store} />
    </div>
  )
  
  export default App