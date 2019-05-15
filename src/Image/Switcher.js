import React, { useState } from 'react'
import styled from 'styled-components'

const Switcher = props => {
  const { percs, imgNumber } = props
  const [idx, setIndex] = useState(0)

  const wheelHandler = e => {
    const dir = e.deltaY
    dir > 0 ? next() : prev()
  }

  const next = () => {
    if (idx + 1 === percs.length) return
    setIndex(idx + 1)
  }

  const prev = () => {
    if (idx === 0) return
    setIndex(idx - 1)
  }

  const getPerc = () => percs[idx]

  const getFilename = () => `/images/img${imgNumber}-${getPerc()}.jpg`

  return (
    <Container onWheel={wheelHandler}>
      <Status>{getPerc()}</Status>
      <img
        alt='comparativo'
        src={getFilename()}
      />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Status = styled.span`
  background-color: rgba(0,0,0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  font-size: 16px;
  color: #fff;

  :after {
    content: '%';
  }
`

export default Switcher
