import React from 'react'

const AppHeader = ({ setPage, ...props }) =>
    <header>
        <button className='header_button' onClick={() => setPage('films')}>Films</button>
        <button className='header_button' onClick={() => setPage('planets')}>Planets</button>
        <button className='header_button' onClick={() => setPage('people')}>People</button>
        <button className='header_button' onClick={() => setPage('vehicles')}>Vehicles</button>
    </header>

export default AppHeader
