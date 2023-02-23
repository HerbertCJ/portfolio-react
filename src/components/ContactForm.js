import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xnqydrvy");
    if (state.succeeded) {
        return <p>Thanks for sending a message, I'll get back to you shortly.</p>;
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
function App() {
    return (
        <ContactForm />
    );
}
export default App;