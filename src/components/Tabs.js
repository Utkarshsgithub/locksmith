import React, { useState } from "react";
import Service from "./Service";

// IMG IMPORTS
import commercial from "../images/commercial2.jpg";
import emergency from "../images/emergency.jpg";
import residential from "../images/residential.jpg";
import automotive from "../images/automotive.jpg";
import ResService from "./ResService";
///////////////////////////////////////////////////

export default function Tabs({ tab, setTab }) {
  const [h1, setH1] = useState("Commercial Locksmith Services");
  const [p1, setP1] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo,corporis sapiente quos deserunt id non quis aut eligendi molestiaefacere quaerat temporibus dignissimos aliquid, repellendus similiquemollitia dolorem recusandae, ab laudantium. Quisquam, numquam. Loremipsum dolor sit amet consectetur. Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Id, ea."
  );
  const [h2, setH2] = useState("Get our Commercial Locksmith Services Now");
  const [p2, setP2] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ducimus."
  );
  const [service, setService] = useState("Commercial");
  const [imgSrc, setImgSrc] = useState(commercial);
  let windowWidth = window.innerWidth;

  function commercialClick() {
    setH1("Commercial Locksmith Services");
    setP1(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo,corporis sapiente quos deserunt id non quis aut eligendi molestiaefacere quaerat temporibus dignissimos aliquid, repellendus similiquemollitia dolorem recusandae, ab laudantium. Quisquam, numquam. Loremipsum dolor sit amet consectetur. Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Id, ea."
    );
    setH2("Get our Commercial Locksmith Services Now");
    setP2(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ducimus."
    );
    setService("Commercial");
    setTab(1);
    setImgSrc(commercial);
  }
  function residentialClick() {
    setH1("Residential Locksmith Services");
    setP1(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo,corporis sapiente quos deserunt id non quis aut eligendi molestiaefacere quaerat temporibus dignissimos aliquid, repellendus similiquemollitia dolorem recusandae, ab laudantium. Quisquam, numquam. Loremipsum dolor sit amet consectetur. Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Id, ea."
    );
    setH2("Get our Residential Locksmith Services Now");
    setP2(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ducimus."
    );
    setService("Residential");
    setTab(2);
    setImgSrc(residential);
  }
  function automotiveClick() {
    setH1("Automotive Locksmith Services");
    setP1(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo,corporis sapiente quos deserunt id non quis aut eligendi molestiaefacere quaerat temporibus dignissimos aliquid, repellendus similiquemollitia dolorem recusandae, ab laudantium. Quisquam, numquam. Loremipsum dolor sit amet consectetur. Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Id, ea."
    );
    setH2("Get our Automotive Locksmith Services Now");
    setP2(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ducimus."
    );
    setService("Automotive");
    setTab(3);
    setImgSrc(automotive);
  }
  function emergencyClick() {
    setH1("Emergency Locksmith Services");
    setP1(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo,corporis sapiente quos deserunt id non quis aut eligendi molestiaefacere quaerat temporibus dignissimos aliquid, repellendus similiquemollitia dolorem recusandae, ab laudantium. Quisquam, numquam. Loremipsum dolor sit amet consectetur. Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Id, ea."
    );
    setH2("Get our Emergency Locksmith Services Now");
    setP2(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ducimus."
    );
    setService("Emergency");
    setTab(4);
    setImgSrc(emergency);
  }
  if (windowWidth > 900) {
    return (
      <div className="container">
        <div id="tabs">
          <ul className="remove_list_style">
            <li
              onClick={() => commercialClick()}
              className={tab === 1 ? "active-tab" : "non-active-tab"}
            >
              Commercial Locksmith
            </li>
            <li
              onClick={() => residentialClick()}
              className={tab === 2 ? "active-tab" : "non-active-tab"}
            >
              Residential Lcoksmith
            </li>
            <li
              onClick={() => automotiveClick()}
              className={tab === 3 ? "active-tab" : "non-active-tab"}
            >
              Automotive Locksmith
            </li>
            <li
              onClick={() => emergencyClick()}
              className={tab === 4 ? "active-tab" : "non-active-tab"}
            >
              Emergency Lcoksmith
            </li>
          </ul>
        </div>
        <Service
          h1={h1}
          h2={h2}
          p1={p1}
          p2={p2}
          tab={tab}
          service={service}
          imgSrc={imgSrc}
        />
      </div>
    );
  } else {
    return (
      <ResService
        h1={h1}
        h2={h2}
        p1={p1}
        p2={p2}
        tab={tab}
        service={service}
        imgSrc={imgSrc}
      />
    );
  }
}
