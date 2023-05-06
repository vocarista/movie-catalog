import React, { useEffect } from 'react' 
import { Link, Routes, Route } from 'react-router-dom'
import Description from '../pages/Description'
const pTextClass = "text-slate-300 font-normal mx-4  my-1"

function Tile (props) {
    const { showData } = props
    const imageObj = showData['show']['image']
    return (<>
        <Link to = {`/desc/${showData['show']['id']}`}>
        <div className = "tile flex w-[425px] h-auto bg-slate-700 hover:scale-110 hover:shadow-xl rounded-md ease hover:shadow-blue-500 active:scale-95 duration-300">
        { imageObj !== null ? <img className = "tile-image" src = { imageObj['medium'] } /> : <img src = "../assets/insert-picture-icon.png" /> }
        <div className = "info flex flex-col">
        <h1 className = "text-3xl text-white font-bold m-4">{ showData['show']['name'] }</h1>
        <p className = { pTextClass }> { `Score: ${Math.floor(showData['score']*100)}/100`} </p>
        <p className = { pTextClass }> { showData['show']['language'] }</p>
        <p className = { pTextClass }> { showData['show']['genres'].map((genre) => {
            return `${genre}, `
        }) }</p>
        <p className = { pTextClass }>{ `Premiered: ${showData['show']['premiered']}` }</p>
        <p className = { pTextClass }>Click to Know More</p>
        </div>
        </div>
        </Link>
        </>
    )
}

export default Tile