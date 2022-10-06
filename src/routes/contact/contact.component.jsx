import { useState } from "react"
import { inputsData } from "../../assets/data/contact.data"
import './contact.styles.scss'

const encode = (data) => {
    return Object.keys(data).map(key =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}

const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const INPUTS_DATA = {
        FIRST_NAME : firstName,
        LAST_NAME : lastName,
        EMAIL : email,
        MESSAGE : message
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/", {
            method : "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({
                "form-name": "contact",
                "first-name": firstName,
                "last-name": lastName,
                email,
                message
            })
        })
    }
    const handleChange = (event) => {
        switch(event.target.name) {
            case 'firstName' :
                setFirstName(event.target.value)
                console.log(firstName)
                return
            case 'lastName' :
                setLastName(event.target.value)
                return
            case 'email' :
                setEmail(event.target.value)
                return
            case 'message' :
                setMessage(event.target.value)
                return
            default : 
                return
        }
    }

    return (
        <div className='ContactContainer' >
            <form className='form' onSubmit={handleSubmit}>
                {
                    inputsData.map((input, index) => (
                        <input  
                            type='text'
                            key={index}
                            placeholder={input.placeholder}
                            className='input'
                            name={input.name}
                            value={INPUTS_DATA[input.value]}
                            required
                            onChange={handleChange}
                        />                        
                    ))
                }
                <textarea
                    placeholder='Message'
                    className='input textarea'
                    name='message'
                    value={message}
                    required
                    onChange={handleChange}
                />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact