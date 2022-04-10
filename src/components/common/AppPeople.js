import React from 'react'

const AppPeople = ({ item }) =>
    <div className='card'>
        <h3>{item?.name}</h3>
        <p>Gender - {item?.gender}</p>
        <p>Height - {item?.height}</p>
        <p>Mass - {item?.mass}</p>
    </div>

export default AppPeople