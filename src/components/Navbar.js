import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [serviceUl, setServiceUl] = useState(<></>)

  function showDropdown() {
    if (dropdown === false) {
      setDropdown(true);
      setServiceUl(
          <ul id="service-ul" className="remove_list_style">
                  <li style={{ marginTop: "50px" }}>
                    <a className="remove_link_style" href="/">
                      Residential Services
                    </a>
                  </li>
                  <li>
                    <a className="remove_link_style" href="/">
                      Automotive Services
                    </a>
                  </li>
                  <li>
                    <a className="remove_link_style" href="/">
                      Commercial Services
                    </a>
                  </li>
                  <li>
                    <a className="remove_link_style" href="/">
                      Emergency Services
                    </a>
                  </li>
                </ul>
      )
      console.log('true chala')
    } else {
      setDropdown(false);
      setServiceUl(<></>)
      console.log('false chala')
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
          <Link
            onClick={() => showDropdown()}
            className="remove_link_style trans2s"
            to="/service"
            >
            Services<i className="fas fa-chevron-down"></i>
          </Link>
          {serviceUl}
        </li>
        <li className="padding-50">
          <a className="remove_link_style trans2s" href="/">
            About Us
          </a>
        </li>
        <li className="padding-50">
          <a className="remove_link_style trans2s" href="/">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
