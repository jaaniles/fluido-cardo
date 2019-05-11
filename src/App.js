import React from 'react';
import styled from 'styled-components'

import FluidCard from './FluidCard'

import * as ds from './design'


function App() {
  return (
    <Page>
      <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </Svg>
      <FluidCard /> 
    </Page>
  );
}


const Svg = styled.svg({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
})

export default App;

const Page = styled.div({
  ...ds.flexCol,
  padding: 32,
})