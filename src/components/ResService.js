import React, { useState } from "react";

// IMG IMPORTS -------------------------------
import comImg from '../images/commercial.jpg'
import resImg from '../images/residential.jpg'
import autImg from '../images/automotive.jpg'
import emeImg from '../images/emergency.jpg'
// -------------------------------------------

export default function ResService({ h2, p1, p2, service}) {
  let comCol = document.getElementById("com-col");
  let resCol = document.getElementById('res-col');
  let autCol = document.getElementById('aut-col');
  let emeCol = document.getElementById('eme-col');
  
  const [showComContent, setShowComContent] = useState(false);
  const [comContent, setComContent] = useState(<></>);

  const [showAutContent, setShowAutContent] = useState(false);
  const [autContent, setAutContent] = useState(<></>);

  const [showResContent, setShowResContent] = useState(false);
  const [resContent, setResContent] = useState(<></>);

  const [showEmeContent, setShowEmeContent] = useState(false);
  const [emeContent, setEmeContent] = useState(<></>);

  const commercialClick = () => {
    if (showComContent === false) {
      comCol.classList.replace("non-active-col", "active-col");
      setShowComContent(true);
      setComContent(
        <div className="trans2s li-content">
          <h2>Commercial Locksmith Services</h2>
          <p>{p1}</p>
          <p className="link">
            <a href="/">{`Read all about our ${service} locksmith services`}</a>
          </p>
          <img src={comImg} alt={`${service} service`} />
          <h2>{h2}</h2>
          <p>{p2}</p>
          <button id="cta-btn" className="btn">
            Contact Us
          </button>
        </div>
      );
    } else {
      setShowComContent(false);
      comCol.classList.replace("active-col", "non-active-col");
      setComContent(<></>);
    }
  };

  const residentialClick = () => {
  if (showResContent === false) {
    resCol.classList.replace("non-active-col", "active-col");
    setShowResContent(true);
      setResContent(
        <div className="trans2s li-content">
          <h2>Residential Locksmith Services</h2>
          <p>{p1}</p>
          <p className="link">
            <a href="/">{`Read all about our ${service} locksmith services`}</a>
          </p>
          <img src={resImg} alt={`${service} service`} />
          <h2>{h2}</h2>
          <p>{p2}</p>
          <button id="cta-btn" className="btn">
            Contact Us
          </button>
        </div>
      );
    } else {
      setShowResContent(false);
      resCol.classList.replace("active-col", "non-active-col");
      setResContent(<></>);
    }
  };

  const automotiveClick = () => {
    if (showAutContent === false) {
      autCol.classList.replace("non-active-col", "active-col");
      setShowAutContent(true);
      setAutContent(
        <div className="trans2s li-content">
          <h2>Automotive Locksmith Services</h2>
          <p>{p1}</p>
          <p className="link">
            <a href="/">{`Read all about our ${service} locksmith services`}</a>
          </p>
          <img src={autImg} alt={`${service} service`} />
          <h2>{h2}</h2>
          <p>{p2}</p>
          <button id="cta-btn" className="btn">
            Contact Us
          </button>
        </div>
      );
    } else {
      setShowAutContent(false);
      autCol.classList.replace("active-col", "non-active-col");
      setAutContent(<></>);
    }
  };

  const emergencyClick = () => {
    if (showEmeContent === false) {
      emeCol.classList.replace("non-active-col", "active-col");
      setShowEmeContent(true);
      setEmeContent(
        <div className="trans2s li-content">
          <h2>Emergency Locksmith Services</h2>
          <p>{p1}</p>
          <p className="link">
            <a href="/">{`Read all about our ${service} locksmith services`}</a>
          </p>
          <img src={emeImg} alt={`${service} service`} />
          <h2>{h2}</h2>
          <p>{p2}</p>
          <button id="cta-btn" className="btn">
            Contact Us
          </button>
        </div>
      );
    } else {
      setShowEmeContent(false);
      emeCol.classList.replace("active-col", "non-active-col");
      setEmeContent(<></>);
    }
  };

  return (
    <div id="res-service-table">
      <ul className="remove_list_style">
        <li style={showComContent?{}:{borderTop: '1px solid var(--forth-color)'}} id="com-col" className="trans2s non-active-col">
          <div onClick={() => commercialClick()} className="li-default">
            Commercial Locksmith Services<i className={showComContent?"fas fa-chevron-up":"fas fa-chevron-down"}></i>
          </div>
          {comContent}
        </li>
        <li id="res-col" className="trans2s non-active-col">
          <div onClick={() => residentialClick()} className="li-default">
            Ressidential Locksmith Services<i className={showResContent?"fas fa-chevron-up":"fas fa-chevron-down"}></i>
          </div>
          {resContent}
        </li>
        <li id="aut-col" className="trans2s non-active-col">
          <div onClick={() => automotiveClick()} className="li-default">
            Automotive Locksmith Services<i className={showAutContent?"fas fa-chevron-up":"fas fa-chevron-down"}></i>
          </div>
          {autContent}
        </li>
        <li id="eme-col" className="trans2s non-active-col">
          <div onClick={() => emergencyClick()} className="li-default">
            Emergency Locksmith Services<i className={showEmeContent?"fas fa-chevron-up":"fas fa-chevron-down"}></i>
          </div>
          {emeContent}
        </li>
      </ul>
    </div>
  );
}
