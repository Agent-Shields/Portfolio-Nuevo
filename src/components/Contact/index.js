import React from 'react'

function ContactForm() {
    return (
        <section>
            <h1 style={{
                color: "#023E7D"
            }}>
                Contact Me</h1>
            <form id='contact-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;