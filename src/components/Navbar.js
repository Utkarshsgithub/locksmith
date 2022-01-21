import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({setProgress}) {
  const [dropdown, setDropdown] = useState(false);
  const [serviceUl, setServiceUl] = useState(<></>)
  const [arrow, setArrow] = useState('fas fa-chevron-down')

  setProgress(10)

  function showDropdown() {
    if (dropdown === false) {
      setDropdown(true);
      setArrow('fas fa-chevron-up')
      setServiceUl(
          <ul id="service-ul" className="remove_list_style">
                  <li style={{ marginTop: "50px" }}>
                    <Link className="remove_link_style" to="/residential-service">
                      Residential Services
                    </Link>
                  </li>
                  <li>
                    <Link className="remove_link_style" to="/automotive-service">
                      Automotive Services
                    </Link>
                  </li>
                  <li>
                    <Link className="remove_link_style" to="/commercial-service">
                      Commercial Services
                    </Link>
                  </li>
                  <li>
                    <Link className="remove_link_style" to="/emergency-service">
                      Emergency Services
                    </Link>
                  </li>
                </ul>
      )
    } else {
      setDropdown(false);
      setServiceUl(<></>)
      setArrow('fas fa-chevron-down')
    }
  }
  return (
    <nav id="navbar">
      <Link className="remove_link_style" to="/">
        <h4 id="logo">Viking</h4>
      </Link>
      <ul className="remove_list_style">
        <li className="padding-50">
          <Link className="remove_link_style trans2s" to="/">
            Home
          </Link>
        </li>
        <li className="padding-50">
          <a
            onClick={() => showDropdown()}
            className="remove_link_style trans2s"
            href='#'
            >
            Services<i style={{marginTop: 'auto'}} className={arrow}></i>
          </a>
          {serviceUl}
        </li>
        <li className="padding-50">
          <Link className="remove_link_style trans2s" to="/about">
            About Us
          </Link>
        </li>
        <li className="padding-50">
          <Link className="remove_link_style trans2s" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
