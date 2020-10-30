import React from 'react';
import './contact.scss';

function Contact() {
    return (
        <div className="contact">
            {/* <h1 className="contact-header">COMING SOON</h1> */}
            <form className="contact-form" action="">
                <h3 className="contact-header">CONTACT</h3>
                <label htmlFor="">
                    First Name:
                    <input className="contact-input" type="text" />
                </label>
                <label htmlFor="">
                    Last Name:
                    <input className="contact-input" type="text" />
                </label>
                <label htmlFor="">
                    Email:
                    <input className="contact-input" type="text" />
                </label>
                <label htmlFor="">
                    Message:
                <textarea className="contact-textarea" name="" id="" cols="100" rows="15" />
                </label>
                <input className="contact-submit" type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default Contact;