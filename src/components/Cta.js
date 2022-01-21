import React from 'react'

export default function Cta({setProgress}) {
    setProgress(60)
    return (
        <div id="cta-section">
            <div id="cta-content">
                <h1>We Are Available 24/7 To Help You!</h1>
                <p>We are in this business from past 10 Years. Our team of proffesionals locksmiths is always ready to help people in Florida.</p>
                <button className="btn-white">Contact Us</button>
            </div>
        </div>
    )
}
