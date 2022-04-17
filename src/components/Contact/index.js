import React, {useState} from 'react'

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })

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
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={handleChange} type="text" name="name" placeholder='Name' defaultValue={name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email address:</label>
                    <input onChange={handleChange} type="email" name="email" placeholder='Email' defaultValue={email} />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message:</label>
                    <textarea onChange={handleChange} name="message" rows="5" placeholder='Message' defaultValue={message} />
                </div>
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;