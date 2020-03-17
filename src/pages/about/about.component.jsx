import React from "react";
import { Link } from "react-router-dom";

import BannerHeader from "../../shared/banner-header.components";

const About = () => (
  <React.Fragment>
    <BannerHeader
      title="Về chúng tôi"
      content="Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula."
    />
    <main>
      <div id="position">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>Giới thiệu</li>
          </ul>
        </div>
      </div>
      {/* End Position */}
      <div className="container margin_60">
        <div className="main_title">
          <h2>
            Some <span>good </span>reasons
          </h2>
          <p>
            Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur
            consequat.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature">
              <i className="icon_set_1_icon-30" />
              <h3>
                <span>+ 1000</span> Customers
              </h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
            <div className="feature">
              <i className="icon_set_1_icon-41" />
              <h3>
                <span>+120</span> Premium city tours
              </h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
        </div>
        {/* End row */}
        <div className="row">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="feature">
              <i className="icon_set_1_icon-57" />
              <h3>
                <span>H24</span> Support
              </h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.4s">
            <div className="feature">
              <i className="icon_set_1_icon-61" />
              <h3>
                <span>10 Languages</span> available
              </h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
        </div>
        {/* End row */}
        <div className="row">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="feature">
              <i className="icon_set_1_icon-13" />
              <h3>
                <span>Accesibility</span> managment
              </h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.6s">
            <div className="feature">
              <i className="icon_set_1_icon-22" />
              <h3>
                <span>Pet</span> allowed
              </h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                doctus volumus explicari qui ex, appareat similique an usu.
              </p>
            </div>
          </div>
        </div>
        {/* End row */}
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <h4>Pertinax elaboraret sed</h4>
            <p>
              Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide
              soluta, ut <a href="/">utamur antiopam inciderint</a> sed. Ut
              iriure perpetua voluptaria has, vim postea denique in, mollis
              pertinax elaboraret sed in. Per no vidit timeam, quis omittam sed
              at.{" "}
            </p>
            <div className="general_icons">
              <ul>
                <li>
                  <i className="icon_set_1_icon-59" />
                  Breakfast
                </li>
                <li>
                  <i className="icon_set_1_icon-8" />
                  Dinner
                </li>
                <li>
                  <i className="icon_set_1_icon-32" />
                  Photo collection
                </li>
                <li>
                  <i className="icon_set_1_icon-50" />
                  Personal shopper
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h4>Mel at vide soluta</h4>
            <p>
              Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide
              soluta, ut <strong>utamur antiopam inciderint</strong> sed. Ut
              iriure perpetua voluptaria has, vim postea denique in, mollis
              pertinax elaboraret sed in. Per no vidit timeam, quis omittam sed
              at.{" "}
            </p>
            <div className="general_icons">
              <ul>
                <li>
                  <i className="icon_set_1_icon-98" />
                  Audio guide
                </li>
                <li>
                  <i className="icon_set_1_icon-27" />
                  Parking
                </li>
                <li>
                  <i className="icon_set_1_icon-36" />
                  Exchange
                </li>
                <li>
                  <i className="icon_set_1_icon-63" />
                  Mobile
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 nopadding features-intro-img">
            <div className="features-bg">
              <div className="features-img" />
            </div>
          </div>
          <div className="col-lg-6 nopadding">
            <div className="features-content">
              <h3>"Ex vero mediocrem"</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                lorem quis neque interdum consequat ut sed sem. Duis quis tempor
                nunc. Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
              </p>
              <p>
                <a href="/" className=" btn_1 white">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End container-fluid  */}
      <div className="container margin_60">
        <div className="main_title">
          <h2>
            What <span>customers </span>says
          </h2>
          <p>
            Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur
            consequat.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="review_strip">
              <img
                src="img/avatar1.jpg"
                alt="avatar"
                className="rounded-circle"
              />
              <h4>Jhon Doe</h4>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                lorem quis neque interdum consequat ut sed sem. Duis quis tempor
                nunc. Interdum et malesuada fames ac ante ipsum primis in
                faucibus."
              </p>
              <div className="rating">
                <i className="icon-star voted" />
                <i className="icon-star voted" />
                <i className="icon-star voted" />
                <i className=" icon-star-empty" />
                <i className=" icon-star-empty" />
              </div>
            </div>
            {/* End review strip */}
          </div>
          <div className="col-lg-6">
            <div className="review_strip">
              <img
                src="img/avatar2.jpg"
                alt="avatar"
                className="rounded-circle"
              />
              <h4>Frank Rosso</h4>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                lorem quis neque interdum consequat ut sed sem. Duis quis tempor
                nunc. Interdum et malesuada fames ac ante ipsum primis in
                faucibus."
              </p>
              <div className="rating">
                <i className="icon-star voted" />
                <i className="icon-star voted" />
                <i className="icon-star voted" />
                <i className=" icon-star-empty" />
                <i className=" icon-star-empty" />
              </div>
            </div>
            {/* End review strip */}
          </div>
        </div>
        {/* End row */}
        <div className="row">
          <div className="col-lg-6">
            <div className="review_strip">
              <img
                src="img/avatar3.jpg"
                alt="avatar"
                className="rounded-circle"
              />
              <h4>Marc twain</h4>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                lorem quis neque interdum consequat ut sed sem. Duis quis tempor
                nunc. Interdum et malesuada fames ac ante ipsum primis in
                faucibus."
              </p>
              <div className="rating">
                <i className="icon-star voted" />
                <i className="icon-star voted" />
                <i className="icon-star voted" />
                <i className=" icon-star-empty" />
                <i className=" icon-star-empty" />
              </div>
            </div>
            {/* End review strip */}
          </div>
          <div className="col-lg-6">
            <div className="review_strip">
              <img
                src="img/avatar1.jpg"
                alt="avatar"
                className="rounded-circle"
              />
              <h4>Peter Gabriel</h4>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                lorem quis neque interdum consequat ut sed sem. Duis quis tempor
                nunc. Interdum et malesuada fames ac ante ipsum primis in
                faucibus."
              </p>
              <div className="rating">
                <i className="icon-star voted" />
                <i className="icon-star voted" />
                <i className="icon-star voted" />
                <i className=" icon-star-empty" />
                <i className=" icon-star-empty" />
              </div>
            </div>
            {/* End review strip */}
          </div>
        </div>
        {/* End row */}
        <hr />
      </div>
      {/* End Container */}
    </main>
  </React.Fragment>
);

export default About;
