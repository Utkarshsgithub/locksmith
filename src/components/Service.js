import React from "react";

export default function Service({ h1, h2, p1, p2, service }) {
  return (
    <div id="service">
      <div id="commercial-locksmith-service">
        <div id="service-desc">
          <h1>{h1}</h1>
          <p>{p1}
          </p>
          <p className="link">
            <a href="/">{`Read all about our ${service} locksmith services`}</a>
          </p>
        </div>
        <div id="service-cta">
          <div id="cta-com-img">hello</div>
          <div id="copyright">
            <h1>{h2}</h1>
            <p>{p2}</p>
            <button id="cta-btn" className="btn">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
