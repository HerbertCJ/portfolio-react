import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xnqydrvy");    
    if (state.succeeded) {
        return <p className='return-p-msg'>Thanks for sending a message. I will answer you soon.</p>;        
    }    
    return (
        <form onSubmit={handleSubmit} className='form-contact'>
            <label htmlFor="name">
                Name
            </label>
            <input
                id="name"
                type="name"
                name="name"
                maxLength='20'
                required
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                maxLength='40'
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
             <label htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                maxLength='250'
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}
