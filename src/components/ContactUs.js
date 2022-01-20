import React from 'react'

export default function ContactUs({setProgress}) {
    setProgress(50)
    return (
        <div id="contactus">
            <div id="contact-main">
                <div id="contact-info">
                    <h2>Just One Step To Go!</h2>
                    <form>
                        <div id="name-input">
                            <input type="text" placeholder='First Name' />
                            <input type="text" id="lastname" placeholder='Last Name' />
                        </div>
                        <input type="email" placeholder='Email Address' />
                        <input type="number" placeholder='Number' />
                        <div id='contact-btn'>
                            <button className="btn-red">Submit</button>
                        </div>
                    </form>
                </div>
                <div id="contact-img">
                </div>
            </div>
        </div>
    )
}
