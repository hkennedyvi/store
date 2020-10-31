import React from 'react';
import './contact.scss';

function Contact() {

    function sendMessage(e) {
        e.preventDefault();
    }
    return (
        <div className="contact">
            <form className="contact-form" action="">
                <h3 className="contact-header">
                    HOLLER AT US
                </h3>
                <label className="contact-label" htmlFor="">
                    First Name:
                    <input className="contact-input" type="text" />
                </label>
                <label className="contact-label" htmlFor="">
                    Last Name:
                    <input className="contact-input" type="text" />
                </label>
                <label className="contact-label" htmlFor="">
                    Email:
                    <input className="contact-input" type="text" />
                </label>
                <label className="contact-label" htmlFor="">
                    Message:
                </label>
                <textarea className="contact-textarea" name="" id="" cols="100" rows="15" />
                <input onClick={sendMessage} className="contact-submit" type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact;