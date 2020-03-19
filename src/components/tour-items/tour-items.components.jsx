import React from "react";

const TourItems = () => (
  <div className="strip_all_tour_list wow fadeIn" data-wow-delay="0.1s">
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="ribbon_3 popular">
          <span>Popular</span>
        </div>
        <div className="wishlist">
          <a className="tooltip_flip tooltip-effect-1" href="/">
            +
            <span className="tooltip-content-flip">
              <span className="tooltip-back">Add to wishlist</span>
            </span>
          </a>
        </div>
        <div className="img_list">
          <a href="single_tour.html">
            <img src="img/tour_box_1.jpg" alt="tours" />
            <div className="short_info">
              <i className="icon_set_1_icon-4" />
              Museums{" "}
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="tour_list_desc">
          <div className="rating">
            <i className="icon-smile voted" />
            <i className="icon-smile  voted" />
            <i className="icon-smile  voted" />
            <i className="icon-smile  voted" />
            <i className="icon-smile" />
            <small>(75)</small>
          </div>
          <h3>
            <strong>Arch Triomphe</strong> tour
          </h3>
          <p>
            Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad
            dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci
            maiestatis inciderint no, eos in elit dicat.....
          </p>
          <ul className="add_info">
            <li>
              <div className="tooltip_styled tooltip-effect-4">
                <span className="tooltip-item">
                  <i className="icon_set_1_icon-83" />
                </span>
                <div className="tooltip-content">
                  <h4>Schedule</h4>
                  <strong>Monday to Friday</strong> 09.00 AM - 5.30 PM
                  <br />
                  <strong>Saturday</strong> 09.00 AM - 5.30 PM
                  <br />
                  <strong>Sunday</strong>{" "}
                  <span className="label label-danger">Closed</span>
                </div>
              </div>
            </li>
            <li>
              <div className="tooltip_styled tooltip-effect-4">
                <span className="tooltip-item">
                  <i className="icon_set_1_icon-41" />
                </span>
                <div className="tooltip-content">
                  <h4>Address</h4> Musée du Louvre, 75058 Paris - France
                  <br />
                </div>
              </div>
            </li>
            <li>
              <div className="tooltip_styled tooltip-effect-4">
                <span className="tooltip-item">
                  <i className="icon_set_1_icon-97" />
                </span>
                <div className="tooltip-content">
                  <h4>Languages</h4> English - French - Chinese - Russian -
                  Italian
                </div>
              </div>
            </li>
            <li>
              <div className="tooltip_styled tooltip-effect-4">
                <span className="tooltip-item">
                  <i className="icon_set_1_icon-27" />
                </span>
                <div className="tooltip-content">
                  <h4>Parking</h4> 1-3 Rue Elisée Reclus
                  <br /> 76 Rue du Général Leclerc
                  <br /> 8 Rue Caillaux 94923
                  <br />
                </div>
              </div>
            </li>
            <li>
              <div className="tooltip_styled tooltip-effect-4">
                <span className="tooltip-item">
                  <i className="icon_set_1_icon-25" />
                </span>
                <div className="tooltip-content">
                  <h4>Transport</h4>
                  <strong>Metro: </strong>Musée du Louvre station (line 1)
                  <br />
                  <strong>Bus:</strong> 21, 24, 27, 39, 48, 68, 69, 72, 81, 95
                  <br />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-2">
        <div className="price_list">
          <div>
            <sup>$</sup>39*
            <span className="normal_price_list">$99</span>
            <small>*Per person</small>
            <p>
              <a href="single_tour.html" className="btn_1">
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TourItems;
