import React, { useState, useEffect } from 'react'
import Tile from '../components/Tile'

function Home( props ) {
    const { showList } = props;
    return (
        <div className = "Home flex flex-col place-items-center">
            <h1 className = "font-extrabold text-white text-7xl mt-5">Home</h1>
            <div id = "show-list" className = "my-10 grid grid-cols-3 gap-10 place-items-center">
                { showList.map((show) => {
                    return <Tile showData= { show }/>
                }) }
            </div>
        </div>
    )
}

export default Home;