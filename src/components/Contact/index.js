import React, { useState } from 'react'
import { validateEmail } from '../../utils/helper'

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState

    function handleChange(e) {

        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value)
            console.log(isValid)

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid. ')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('')
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

        // console log here verifies that state of form is synchronized with user input
        // console.log(formState)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1 style={{
                color: "#023E7D"
            }}>
                Contact Me</h1>
            <form onSubmit={handleSubmit} id='contact-form'>
                <div className='row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor='name' style={{
                            color:"#001233"
                        }}>Name:</label>
                        <input className='form-control' onBlur={handleChange} type="text" name="name" placeholder='Name' defaultValue={name} />
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor='email' style={{
                            color:"#001233"
                        }}>Email address:</label>
                        <input className='form-control' onChange={handleChange} type="email" name="email" placeholder='Email' defaultValue={email} />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='message' style={{
                            color:"#001233"
                        }}>Message:</label>
                    <textarea className='form-control' onBlur={handleChange} name="message" rows="5" placeholder='Message' defaultValue={message} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className='btn btn-primary mt-2' type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;