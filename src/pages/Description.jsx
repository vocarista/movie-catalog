import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from '../components/Button'

const getShow = (showList, id) => {
    for (let i=0 ; i<showList.length ; i++){
        if (showList[i]['show']['id'] == id){
            return showList[i]
        }
    }
}
const pTextClass = "text-slate-300 font-normal mx-4 my-4"
export default function Description(props) {
    const { id } = useParams()
    const { showList } = props
    const showData = getShow(showList, id)

    return (
        <div className = "description rounded-lg hover:shadow-md ease duration-200 hover:shadow-blue-700 flex flex-col h-[90vh] w-[60vw] bg-slate-700 my-10 overflow-y-auto">
            { showData['show']['image'] !== null ? <img src = { showData['show']['image']['original'] } /> : null }
            <h1 className = "place-self-top text-white font-extrabold text-center text-5xl my-5 mx-2">{ showData['show']['name'] }</h1>
            <p className = { pTextClass + "place-self-start flex-grow" } dangerouslySetInnerHTML= {{__html: showData['show']['summary']}}></p> 
            <div className = "my-10 flex justify-center items-end flex-grow">
            <Link to = { `/form/${showData['show']['id']}` } >
                <Button text = "Book Now" />
            </Link>
            </div>
        </div>
    )
}
