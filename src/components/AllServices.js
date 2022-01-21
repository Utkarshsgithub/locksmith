import React from "react";

export default function AllServices({setProgress}) {
  setProgress(40)
  return (
    <div id="all-services">
      <h1>Know More About Our Locksmith Services!</h1>
      <div id="cards">
        <div className="card" id="res">
          <div id="res-img" className='card-img-height'></div>
          <h3>Looking for Residendial Locksmith?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            dolorem.
          </p>
          <p className='link'>
            <a href="/">Read More</a>
          </p>
        </div>
        <div className="card" id="com">
          <div id="com-img" className='card-img-height'></div>
          <h3>Need a Commercial Locksmith?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            dolorem.
          </p>
          <p className='link'>
            <a href="/">Read More</a>
          </p>
        </div>
        <div className="card" id="aut">
          <div id="aut-img" className='card-img-height'></div>
          <h3>Need Locksmith for your vichle?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            dolorem.
          </p>
          <p className='link'>
            <a href="/">Read More</a>
          </p>
        </div>
        <div className="card" id="eme">
          <div id="eme-img" className='card-img-height'></div>
          <h3>Are you in an emergency?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            dolorem.
          </p>
          <p className='link'>
            <a href="/">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
}
