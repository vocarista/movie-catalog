import React from 'react'

function InputField(props) {
    const { type, shadowText, setFormData } = props
    return (
        <input required onChange = {event => {
            setFormData(event.target.value)
        }} type = { type } className = "w-[80%] h-10 place-self-center my-4 bg-slate-950 text-white p-2 outline-none focus:outline-4 focus:outline-slate-950 rounded-xl" placeholder= { shadowText }/>
    )
}

export default InputField