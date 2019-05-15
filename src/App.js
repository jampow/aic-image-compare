import React, { useState } from 'react';
import Switcher from './Image/Switcher.js'
import styled from 'styled-components'

//const percs = [15, 25, 35]

function App() {
  const percs = [35, 45, 55, 65, 75, 85, 95]
  const imgs = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]

  const [pic, setPic] = useState(imgs[0])

  const selectPicture = n => {
    setPic(n)
  }

  return (
    <div>
      <ImgsMenu>      
        {imgs.map(n => (
          <li key={n} onClick={() => selectPicture(n)}>
            {n}
            {n === pic && ' <'}
          </li>
        ))}
      </ImgsMenu>      
      <Switcher percs={percs} imgNumber={pic} />
    </div>
  );
}

const ImgsMenu = styled.ul`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  color: #fff;
  top: 50px;
  left: 0;
  z-index: 1;
  padding: 4px 0;

  li {
    padding: 4px 10px;
  }
`

export default App;
