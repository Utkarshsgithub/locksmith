import React from "react";
import { Link } from "react-router-dom";

export default function Automotive({setProgress}) {
  return (
    <>
      <div id="service-page">
        <div id="sp-top">
          <div id="sp-top-card">
            <h1>Best Automotive Locksmith In Florida</h1>
            <p>
              We have a team of professional locksmiths that will help you
              regarding any problems you are facing with your vichle. We are
              providing Automotive Locksmith service in Florida since past 10
              years and we are very popular due to our expertise!
            </p>
            <h2>(938)349-437</h2>
            <p style={{ marginTop: "15px" }}>
              We are available 24/7 and All days of the week.
            </p>
            <button className="btn-red trans2s">Contact Us</button>
          </div>
        </div>
        {()=>setProgress(50)}
        <div id="sp-main">
          <article>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
              quae?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur cupiditate corporis sunt minima corrupti, aperiam
              repellat temporibus ipsum eum optio distinctio, veritatis eaque
              molestiae unde eligendi dolorem quas ipsa atque ad nisi iure?
              Fugiat officiis dignissimos explicabo delectus maiores at
              accusantium non, nihil modi laboriosam tempora, totam doloribus
              rerum rem.
            </p>

            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              corrupti ratione numquam eveniet perferendis esse, rerum
              exercitationem necessitatibus. Deleniti sequi beatae tempore amet?
              Quaerat officia eaque dolores nesciunt, aperiam recusandae velit
              incidunt soluta ullam eum itaque id deleniti. Consequatur
              accusantium facilis modi ad qui quidem exercitationem, cupiditate
              at. Ipsum quae enim harum laboriosam accusantium? Doloribus
              facilis facere, quae ex amet praesentium repudiandae temporibus
              sint iusto, asperiores vitae fuga accusamus tempore nemo
              voluptatem officiis pariatur. Veniam ea amet reiciendis itaque
              iure.
            </p>

            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              corrupti ratione numquam eveniet perferendis esse, rerum
              exercitationem necessitatibus. Deleniti sequi beatae tempore amet?
              Quaerat officia eaque dolores nesciunt, aperiam recusandae velit
              incidunt soluta ullam eum itaque id deleniti. Consequatur
              accusantium facilis modi ad qui quidem exercitationem, cupiditate
              at. Ipsum quae enim harum laboriosam accusantium? Doloribus
              facilis facere, quae ex amet praesentium repudiandae temporibus
              sint iusto, asperiores vitae fuga accusamus tempore nemo
              voluptatem officiis pariatur. Veniam ea amet reiciendis itaque
              iure.
            </p>

            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              corrupti ratione numquam eveniet perferendis esse, rerum
              exercitationem necessitatibus. Deleniti sequi beatae tempore amet?
              Quaerat officia eaque dolores nesciunt, aperiam recusandae velit
              incidunt soluta ullam eum itaque id deleniti. Consequatur
              accusantium facilis modi ad qui quidem exercitationem, cupiditate
              at. Ipsum quae enim harum laboriosam accusantium? Doloribus
              facilis facere, quae ex amet praesentium repudiandae temporibus
              sint iusto, asperiores vitae fuga accusamus tempore nemo
              voluptatem officiis pariatur. Veniam ea amet reiciendis itaque
              iure.
            </p>
            <h3>Read about our other services:</h3>
            <ul id='article-links' className="remove_list_style">
              <li className='link article-link'><Link className="remove_link_style" to="/automotive-service">Automotive Services</Link></li>
              <li className='link article-link'><Link className="remove_link_style" to="/residential-service">Residential Services</Link></li>
              <li className='link article-link'><Link className="remove_link_style" to="/commercial-service">Commercial Services</Link></li>
              <li className='link article-link'><Link className="remove_link_style" to="/emergency-service">Emergency Services</Link></li>
          </ul>
          </article>
        </div>
      </div>
    </>
  );
}