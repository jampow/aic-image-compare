import React from 'react';
import Switcher from './Image/Switcher.js'

const percs = [45, 55, 65, 75, 85, 95]
//const percs = [15, 25, 35]

function App() {
  return (
    <Switcher percs={percs} imgNumber="01" />
  );
}

export default App;
