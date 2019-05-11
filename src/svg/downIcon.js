import React from 'react'
import posed from 'react-pose'

const Svg = posed.svg({
  init: {
    rotateX: 0
  },
  flipped: {
    rotateX: 180,
    scale: 1
  }
})

export default ({flip}) => (
  <Svg
    pose={flip ? 'flipped' : 'default'}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 14 24"
    version="1.1"
    x="0px"
    y="0px"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-508.000000, -1212.000000)" fill="currentColor">
        <g transform="translate(508.000000, 1212.000000)">
          <path d="M13.8945,14.5527 C13.7245,14.2137 13.3785,13.9997 12.9995,13.9997 L9.9995,13.9997 L9.9995,9.9997 C9.9995,9.4477 9.5525,8.9997 8.9995,8.9997 L4.9995,8.9997 C4.4475,8.9997 3.9995,9.4477 3.9995,9.9997 L3.9995,13.9997 L0.9995,13.9997 C0.6215,13.9997 0.2755,14.2137 0.1055,14.5527 C-0.0635,14.8917 -0.0275,15.2967 0.2005,15.5997 L6.2005,23.5997 C6.3885,23.8517 6.6855,23.9997 6.9995,23.9997 C7.3145,23.9997 7.6115,23.8517 7.7995,23.5997 L13.7995,15.5997 C14.0275,15.2967 14.0635,14.8917 13.8945,14.5527" />
          <path d="M5,8 L9,8 C9.553,8 10,7.553 10,7 C10,6.447 9.553,6 9,6 L5,6 C4.447,6 4,6.447 4,7 C4,7.553 4.447,8 5,8" />
          <path d="M5,5 L9,5 C9.553,5 10,4.553 10,4 C10,3.447 9.553,3 9,3 L5,3 C4.447,3 4,3.447 4,4 C4,4.553 4.447,5 5,5" />
          <path d="M5,2 L9,2 C9.553,2 10,1.553 10,1 C10,0.447 9.553,0 9,0 L5,0 C4.447,0 4,0.447 4,1 C4,1.553 4.447,2 5,2" />
        </g>
      </g>
    </g>
  </Svg>
)