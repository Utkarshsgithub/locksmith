import React from "react";

export default function AboutUs({ setProgress }) {
  setProgress(50);
  return (
    <div className="center">
      <div id="about">
        <div id="about-top">
          <div id="top-main">
            <div id="top-content">
              <p id="stylish-p">Best Locksmith Company In Florida</p>
              <h1>Viking Locksmith</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto, amet? Ad natus <br /> tempora obcaecati ex amet
                error tempore quae temporibus.
              </p>
            </div>
          </div>
        </div>
        <div id="about-main">
          <article id="about-article" style={{ width: "100%" }}>
            <h1>We Are A Locksmith Company Based In Florida</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              architecto laborum quisquam, maxime voluptas unde, distinctio modi
              ut nostrum corrupti fugiat nesciunt adipisci tempore perferendis
              fugit vel a repellat iste magni necessitatibus consequuntur quo
              error officiis! Quia dolore eligendi nostrum.
            </p>

            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              corrupti modi odio excepturi, neque, alias iusto facilis esse,
              accusamus sint enim? Ipsum, dolor natus accusamus, libero ipsa
              eius aliquid ullam optio eaque quo blanditiis?
            </p>

            <h3>Lorem ipsum dolor sit adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              corrupti modi odio excepturi, neque, alias iusto facilis esse,
              accusamus sint enim? Ipsum, dolor natus accusamus, libero ipsa
              eius aliquid ullam optio eaque quo blanditiis?
            </p>
          </article>
          <div id="about-cards">
            <div className="about-card">
              <div className="card-circle"><i class="fas fa-car"></i></div>
              <div className="about-card-content">
                <h2>Automotive Locksmith</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia illum at et ut nisi nulla aliquid quasi ipsa sed
                  omnis!
                </p>
                <button className="about-btn btn">Let's Talk</button>
              </div>
            </div>
            <div className="about-card">
              <div className="card-circle"><i class="fas fa-key"></i></div>
              <div className="about-card-content">
                <h2>Commercial Locksmith</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia illum at et ut nisi nulla aliquid quasi ipsa sed
                  omnis!
                </p>
                <button className="about-btn btn">Let's Talk</button>
              </div>
            </div>
            <div className="about-card">
              <div className="card-circle"><i class="fas fa-home"></i></div>
              <div className="about-card-content">
                <h2>Residential locksmith</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia illum at et ut nisi nulla aliquid quasi ipsa sed
                  omnis!
                </p>
                <button className="about-btn btn">Let's Talk</button>
              </div>
            </div>
            <div className="about-card">
              <div className="card-circle"><i class="far fa-times-circle"></i></div>
              <div className="about-card-content">
                <h2>Emergency Locksmith</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia illum at et ut nisi nulla aliquid quasi ipsa sed
                  omnis!
                </p>
                <button className="about-btn btn">Let's Talk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
