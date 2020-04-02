import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Markup } from "interweave";

const TourItems = ({
  tour_name,
  tour_price,
  description,
  hot,
  id_tour,
  image
}) => (
  <div className="strip_all_tour_list wow fadeIn" data-wow-delay="0.1s">
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="ribbon_3 popular">
          <span>{hot === 1 ? "Hot" : "Popular"}</span>
        </div>
        <div className="img_list">
          <Link to={`/tours/${id_tour}`}>
            <img src={`/img/tour/${image}`} alt="tours" />
            <div className="short_info">
              <i className="icon_set_1_icon-4" />
              Museums{" "}
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="tour_list_desc">
          <h3>
            <strong>{tour_name}</strong>
          </h3>
          <div>
            <Markup content={description.slice(0, 170) + " ..."} />
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-2">
        <div className="price_list">
          <div>
            <sup>
              {tour_price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND"
              })}
            </sup>
            {/* <span className="normal_price_list">$99</span> */}
            <small>*Trên người</small>
            <p>
              <Link to={`/tours/${id_tour}`} className="btn_1">
                Chi tiết
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(TourItems);
