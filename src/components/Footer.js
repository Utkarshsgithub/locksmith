import React from 'react'
import End from './End'

export default function Footer({setProgress}) {
    setProgress(100)
    return (
        <>
        <footer id="footer">
            <div id="footer-top">
               <p style={{fontStyle: 'italic'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum veritatis, animi id commodi exercitationem velit dicta corporis quidem. Modi, a! Eveniet velit assumenda fugiat molestias tempora sit error, vitae nihil voluptatem id dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ratione quod iusto sit amet facere quibusdam quia veniam, recusandae molestiae deleniti? Quae fugit vel maxime accusamus exercitationem ea id dignissimos voluptas, adipisci consequuntur dicta!</p>
               <br />
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi impedit minus, id reiciendis soluta excepturi.</p>
               <br />
               <p>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam consequuntur vitae sunt et facere nemo, provident distinctio dolore veniam. Omnis blanditiis quod illum maiores?
               </p>
            </div>
            <div id="footer-bottom">
                <div id="socials">
                    CONNECT WITH US
                    <div id="icons">
                        <a target='_blank' className='remove_link_style' href="https://facebook.com"><div id='fb' className="icon"><i className="fab fa-facebook-f"></i></div></a>
                        <a target='_blank' className='remove_link_style' href="https://youtube.com"><div id='yt' className="icon"><i className="fab fa-youtube"></i></div></a>
                        <a target='_blank' className='remove_link_style' href="https://twitter.com"><div id='tw' className="icon"><i className="fab fa-twitter"></i></div></a>
                        <a target='_blank' className='remove_link_style' href="https://linkedin.com"><div id='li' className="icon"><i className="fab fa-linkedin-in"></i></div></a>
                        <a target='_blank' className='remove_link_style' href="https://instagram.com"><div id='in' className="icon"><i className="fab fa-instagram"></i></div></a>
                    </div>
                </div>
                <hr />
                <div id="links">
                    <ul className='remove_list_style'>
                        <li className='ul-heading'><strong>Go To</strong></li>
                        <li><a target='_blank' className='remove_link_style' href="/">Home</a></li>
                        <li><a target='_blank' className='remove_link_style' href="/">Contact Us</a></li>
                        <li><a target='_blank' className='remove_link_style' href="/">About Us</a></li>
                        <li><a target='_blank' className='remove_link_style' href="/">Our Services</a></li>
                    </ul>
                    <ul className='remove_list_style'>
                        <li className='ul-heading'><strong>Contact Us</strong></li>
                        <li><a target='_blank' className='remove_link_style' href="mailto:info@vikinglocksmith.com">Email</a></li>
                        <li><a target='_blank' className='remove_link_style' href="tel:(783)4309-9743">Call Us</a></li>
                        <li><a target='_blank' className='remove_link_style' href="https://twitter.com/">Twitter</a></li>
                        <li><a target='_blank' className='remove_link_style' href="https://facebook.com/">Facebook</a></li>
                    </ul>
                    <ul className='remove_list_style'>
                        <li className='ul-heading'><strong>What We Offer</strong></li>
                        <li><a target='_blank' className='remove_link_style' href="/">Residential Services</a></li>
                        <li><a target='_blank' className='remove_link_style' href="/">Automotive Services</a></li>
                        <li><a target='_blank' className='remove_link_style' href="/">Commercial Services</a></li>
                        <li><a target='_blank' className='remove_link_style' href="/">Emergency Services</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <End />
        </>
    )
}
