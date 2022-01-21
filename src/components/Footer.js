import React from 'react'
import End from './End'
import { Link } from "react-router-dom";

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
                    <div style={{marginLeft: '5px'}}>CONNECT WITH US</div>
                    <div id="icons">
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://facebook.com"><div id='fb' className="icon"><i className="fab fa-facebook-f"></i></div></a>
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://youtube.com"><div id='yt' className="icon"><i className="fab fa-youtube"></i></div></a>
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://twitter.com"><div id='tw' className="icon"><i className="fab fa-twitter"></i></div></a>
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://linkedin.com"><div id='li' className="icon"><i className="fab fa-linkedin-in"></i></div></a>
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://instagram.com"><div id='in' className="icon"><i className="fab fa-instagram"></i></div></a>
                    </div>
                </div>
                <hr />
                <div id="links">
                    <ul className='remove_list_style'>
                        <li className='ul-heading'><strong>Go To</strong></li>
                        <li><Link className='remove_link_style' to="/">Home</Link></li>
                        <li><Link className='remove_link_style' to="/contact">Contact Us</Link></li>
                        <li><Link className='remove_link_style' to="/about">About Us</Link></li>
                        <li><Link className='remove_link_style' to="/automotive-service">Our Services</Link></li>
                    </ul>
                    <ul className='remove_list_style'>
                        <li className='ul-heading'><strong>Contact Us</strong></li>
                        <li><a target='_blank' rel="noreferrer" className='remove_link_style' href="mailto:info@vikinglocksmith.com">Email</a></li>
                        <li><a target='_blank' rel="noreferrer" className='remove_link_style' href="tel:(783)4309-9743">Call Us</a></li>
                        <li><a target='_blank' rel="noreferrer" className='remove_link_style' href="https://twitter.com/">Twitter</a></li>
                        <li><a target='_blank' rel="noreferrer" className='remove_link_style' href="https://facebook.com/">Facebook</a></li>
                    </ul>
                    <ul id='extra-ul' className='remove_list_style'>
                        <li className='ul-heading'><strong>What We Offer</strong></li>
                        <li><Link className='remove_link_style' to="/residential-service">Residential Services</Link></li>
                        <li><Link className='remove_link_style' to="/automotive-service">Automotive Services</Link></li>
                        <li><Link className='remove_link_style' to="/commercial-service">Commercial Services</Link></li>
                        <li><Link className='remove_link_style' to="/emergency-service">Emergency Services</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
        <End />
        </>
    )
}
