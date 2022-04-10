import React from 'react'

const AppFilm = ({ item }) =>
    <div className='card'>
        <h3>{item?.title}</h3>
        <p>Director - {item?.director}</p>
        <p>Producer - {item?.producer}</p>
        <p>Description - {item?.opening_crawl}</p>
        <p>Release Date - {item?.release_date}</p>
    </div>

export default AppFilm