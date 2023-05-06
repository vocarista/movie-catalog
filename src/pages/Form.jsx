import React, { useState } from "react";
import { useParams, Link} from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const getShow = (showList, id) => {
    for (let i=0 ; i<showList.length ; i++){
        if (showList[i]['show']['id'] == id){
            return showList[i]
        }
    }
}

function Form(props){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState(0)
    const [isFormValid, setIsFormValid] = useState(false)
    const { showList } = props
    const { id } = useParams()
    const showData = getShow(showList, id)

    const bookingHandler = () => {
        if (name.length > 0 && email.length > 0 && number > 0){
        localStorage.setItem('formData', JSON.stringify({
            name: name,
            email: email,
            number: number
        }))
        setIsFormValid(true)
    }
    else{
        alert('All fields are required')
    }
    }
    
    return (<>
        <div className = "booking-form rounded-lg hover:shadow-md ease duration-200 hover:shadow-blue-700 flex flex-col h-[80vh] w-[60vw] bg-slate-700 my-10 overflow-y-auto">
            <h1 className = "text-white font-semibold text-4xl text-center my-4">Booking: { showData['show']['name'] }</h1>
            <InputField setFormData = { setName } type = "text" shadowText = {`Enter Your Name`} />
            <InputField setFormData = { setEmail } type = "email" shadowText = {`Enter Your Email`} />
            <InputField setFormData = { setNumber } type = "number" shadowText = {`Enter your Mobile Number`} />
            <div className = "my-10 flex justify-center items-end flex-grow">
                <Link to = "/confirm">
                <Button onClick = { bookingHandler } text = "Complete Booking" />
                </Link>
            </div>
        </div>
    </>)
}

export default Form