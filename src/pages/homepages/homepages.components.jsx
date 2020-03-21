import React from "react";

import Carousel from "../../components/carousel-home/carousel-home.components";
import TopTours from "../../components/top-tour/top-tour.components";
import PopularTours from "../../components/popular-tour/popular-tours.components";

const HomePages = () => (
  <div>
    <main>
      <Carousel />
      <div className="white_bg">
        <div className="container margin_60">
          <div className="row small-gutters categories_grid">
            <div className="col-sm-12 col-md-6">
              <a href="all_tours_list.html">
                <img
                  src="img/img_cat_home_1.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="wrapper">
                  <h2>Special Offers</h2>
                  <p>1150 Locations</p>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="row small-gutters mt-md-0 mt-sm-2">
                <div className="col-sm-6">
                  <a href="all_tours_list.html">
                    <img
                      src="img/img_cat_home_2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="wrapper">
                      <h2>Tours</h2>
                      <p>800 Locations</p>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href="all_hotels_list.html">
                    <img
                      src="img/img_cat_home_3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="wrapper">
                      <h2>Hotels</h2>
                      <p>650 Locations</p>
                    </div>
                  </a>
                </div>
                <div className="col-sm-12 mt-sm-2">
                  <a href="all_restaurants_list.html">
                    <img
                      src="img/img_cat_home_4.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="wrapper">
                      <h2>Restaurants</h2>
                      <p>1132 Locations</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*/categories_grid*/}
        </div>
        {/* /container */}
      </div>
      {/* /white_bg */}
      <div className="container margin_60">
        <div className="main_title">
          <h2>
            <span>Top</span> Tours
          </h2>
          <p>
            Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur
            consequat.
          </p>
        </div>
        <TopTours />
        <p className="text-center add_bottom_30">
          <a href="all_tours_list.html" className="btn_1">
            View all Tours
          </a>
        </p>
        <hr className="mt-5 mb-5" />
        <div className="main_title">
          <h2>
            <span>Tours</span> phổ biến
          </h2>
          <p>
            Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur
            consequat.
          </p>
        </div>
        <PopularTours />
        <p className="text-center nopadding">
          <a href="all_hotels_list.html" className="btn_1">
            View all Hotels
          </a>
        </p>
      </div>
      {/* End container */}
      <div className="white_bg">
        <div className="container margin_60">
          <div className="main_title">
            <h2>
              Plan <span>Your Tour</span> Easly
            </h2>
            <p>
              Quisque at tortor a libero posuere laoreet vitae sed arcu.
              Curabitur consequat.
            </p>
          </div>
          <div className="row feature_home_2">
            <div className="col-md-4 text-center">
              <img
                src="img/adventure_icon_1.svg"
                alt=""
                width={75}
                height={75}
              />
              <h3>Itineraries studied in detail</h3>
              <p>
                Suscipit invenire petentium per in. Ne magna assueverit vel. Vix
                movet perfecto facilisis in, ius ad maiorum corrumpit, his esse
                docendi in.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="img/adventure_icon_2.svg"
                alt=""
                width={75}
                height={75}
              />
              <h3>Room and food included</h3>
              <p>
                {" "}
                Cum accusam voluptatibus at, et eum fuisset sententiae.
                Postulant tractatos ius an, in vis fabulas percipitur, est
                audiam phaedrum electram ex.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="img/adventure_icon_3.svg"
                alt=""
                width={75}
                height={75}
              />
              <h3>Everything organized</h3>
              <p>
                Integre vivendo percipitur eam in, graece suavitate cu vel. Per
                inani persius accumsan no. An case duis option est, pro ad
                fastidii contentiones.
              </p>
            </div>
          </div>
          <div className="banner_2">
            <div
              className="wrapper d-flex align-items-center opacity-mask"
              data-opacity-mask="rgba(0, 0, 0, 0.3)"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div>
                <h3>
                  Your Perfect
                  <br />
                  Tour Experience
                </h3>
                <p>Activities and accommodations</p>
                <a href="all_tours_list.html" className="btn_1">
                  Read more
                </a>
              </div>
            </div>
            {/* /wrapper */}
          </div>
          {/* /banner_2 */}
        </div>
        {/* End container */}
      </div>
      {/* End white_bg */}
      <div className="container margin_60">
        <div className="main_title">
          <h2>
            Lates <span>Blog</span> News
          </h2>
          <p>
            Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur
            consequat.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure>
                <img src="img/news_home_1.jpg" alt="" />
                <figcaption>
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <ul>
                <li>Mark Twain</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Pri oportere scribentur eu</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </a>
          </div>
          {/* /box_news */}
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure>
                <img src="img/news_home_2.jpg" alt="" />
                <figcaption>
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <ul>
                <li>Jhon Doe</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Duo eius postea suscipit ad</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </a>
          </div>
          {/* /box_news */}
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure>
                <img src="img/news_home_3.jpg" alt="" />
                <figcaption>
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <ul>
                <li>Luca Robinson</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Elitr mandamus cu has</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </a>
          </div>
          {/* /box_news */}
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure>
                <img src="img/news_home_4.jpg" alt="" />
                <figcaption>
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <ul>
                <li>Paula Rodrigez</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Id est adhuc ignota delenit</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </a>
          </div>
          {/* /box_news */}
        </div>
        {/* /row */}
        <p className="btn_home_align">
          <a href="blog.html" className="btn_1 rounded">
            View all news
          </a>
        </p>
      </div>
      {/* End container */}
    </main>
    {/* End main */}
  </div>
);

export default HomePages;
