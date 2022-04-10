import React from 'react'

const AppPlanet = ({ item }) =>
    <div className='card'>
        <h3>{item?.name}</h3>
        <p>Population - {item?.population}</p>
        <p>Terrain - {item?.terrain}</p>
    </div>
    
export default AppPlanet