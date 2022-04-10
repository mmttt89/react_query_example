import React from 'react'

const AppVehicle = ({ item }) =>
    <div className='card'>
        <h3>{item?.name}</h3>
        <p>Model - {item?.model}</p>
        <p>Manufacturer - {item?.manufacturer}</p>
        <p>Const - {item?.cost_in_credits}</p>
    </div>

export default AppVehicle