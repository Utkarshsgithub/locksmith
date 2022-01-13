import React from 'react'

export default function Navbar() {
    return (
        <nav id="navbar">
            <div id="logo">
                <a className='remove_link_style' href="/"><img src="" alt="Viking Locksmith Logo" /></a>
            </div>
            <ul className='remove_list_style'>
                <li><a className='remove_link_style trans2s' href='/'>Home</a></li>
                <li><a className='remove_link_style trans2s' href='/'>Services<i className="fas fa-chevron-down"></i></a></li>
                <li><a className='remove_link_style trans2s' href='/'>About Us</a></li>
                <li><a className='remove_link_style trans2s' href='/'>Contact Us</a></li>
            </ul>
        </nav>
    )
}
