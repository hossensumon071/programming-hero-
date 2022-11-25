import React from 'react'
import DeviceDetails from '../DeviceDetails/DeviceDetails'
import Watch from '../Watch/Watch'

const Device = (props) => {
  return (
    <div>
      <h2>I have: {props.name}</h2>
      <DeviceDetails price={props.price}></DeviceDetails>
      <Watch></Watch>
    </div>
  )
}

export default Device