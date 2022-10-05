import { useState } from "react"
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
        if (event.target.name === 'firstName') {
            setFirstName(event.target.value)
            console.log(firstName)
            return
        }
        if (event.target.name === 'lastName') {
            setLastName(event.target.value)
            console.log(lastName)
            return
        }
        if (event.target.name === 'email') {
            setEmail(event.target.value)
            console.log(email)
            return
        }
        if (event.target.name === 'message') {
            setMessage(event.target.value)
            console.log(message)
            return
        }
    }

    return (
        <div className='ContactContainer' >
            <form className='form' onSubmit={handleSubmit}>
                <input  
                    type='text'
                    placeholder='Your First Name'
                    className='input'
                    name='firstName'
                    value={firstName}
                    required
                    onChange={handleChange}
                />
                <input  
                    type='text'
                    placeholder='Your Last Name'
                    className="input"
                    name='lastName'
                    value={lastName}
                    required
                    onChange={handleChange}
                />
                <input  
                    type='email'
                    placeholder='Your email address'
                    className='input'
                    name='email'
                    value={email}
                    required
                    onChange={handleChange}
                />
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