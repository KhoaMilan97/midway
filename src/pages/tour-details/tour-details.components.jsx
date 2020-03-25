import React from "react";
import { connect } from "react-redux";
import { withRouter, Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";

import { selectTourDetails } from "../../redux/tour/tour.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import Gallery from "../../components/gallerry/gallery.components";

import "react-datepicker/dist/react-datepicker.css";
import "./tour-details.styles.scss";

class TourDetails extends React.Component {
  state = {
    date: new Date(),
    time: new Date()
  };

  onChange = date => this.setState({ date });
  onTimeChange = time => this.setState({ time });

  handleClick = e => {
    e.preventDefault();
    const { currentUser, history } = this.props;
    if (!currentUser) {
      history.push("/sign-in");
    }
  };

  render() {
    const { toursDetails } = this.props;
    if (!toursDetails) return <Redirect to="/tours" />;
    return (
      <React.Fragment>
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-gallery_image-src="/img/single_tour_bg_1.jpg"
          data-natural-width={1400}
          data-natural-height={470}
          style={{
            backgroundImage: `url(/img/header_bg.jpg)`,
            width: "100%",
            height: "470",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="parallax-content-2">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h1>{toursDetails.tour_name}</h1>
                </div>
                <div className="col-md-4">
                  <div id="price_single_main">
                    <span style={{ fontSize: "30px" }}>
                      {toursDetails.tour_price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND"
                      })}
                    </span>
                    /người
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End section */}
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/tours">Tours</Link>
                </li>
                <li>Chi tiết tours</li>
              </ul>
            </div>
          </div>
          {/* End Position */}
          <div className="collapse" id="collapseMap">
            <div id="map" className="map" />
          </div>
          {/* End Map */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-lg-8" id="single_tour_desc">
                <div id="single_tour_feat">
                  <ul>
                    <li>
                      <i className="icon_set_1_icon-4" />
                      Museum
                    </li>
                    <li>
                      <i className="icon_set_1_icon-83" />3 Hours
                    </li>
                    <li>
                      <i className="icon_set_1_icon-13" />
                      Accessibiliy
                    </li>
                    <li>
                      <i className="icon_set_1_icon-82" />
                      144 Likes
                    </li>
                    <li>
                      <i className="icon_set_1_icon-22" />
                      Pet allowed
                    </li>
                    <li>
                      <i className="icon_set_1_icon-97" />
                      Audio guide
                    </li>
                    <li>
                      <i className="icon_set_1_icon-29" />
                      Tour guide
                    </li>
                  </ul>
                </div>

                <Gallery />
                <hr />
                <div className="row">
                  <div className="col-lg-3">
                    <h3>Description</h3>
                  </div>
                  <div className="col-lg-9">
                    <h4>Paris in love</h4>
                    <p>{toursDetails.description}</p>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-lg-3">
                    <h3>Reviews </h3>
                    <a
                      href="!#"
                      className="btn_1 add_bottom_30"
                      data-toggle="modal"
                      data-target="!#myReview"
                    >
                      Leave a review
                    </a>
                  </div>
                  <div className="col-lg-9">
                    <div id="general_rating">
                      11 Reviews
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile" />
                        <i className="icon-smile" />
                      </div>
                    </div>
                    {/* End general_rating */}
                    <div className="row" id="rating_summary">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Position
                            <div className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                            </div>
                          </li>
                          <li>
                            Tourist guide
                            <div className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Price
                            <div className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                            </div>
                          </li>
                          <li>
                            Quality
                            <div className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End row */}
                    <hr />
                    <div className="review_strip_single">
                      <img
                        src="/img/avatar1.jpg"
                        alt="gallery_image"
                        className="rounded-circle"
                      />
                      <small> - 10 March 2015 -</small>
                      <h4>Jhon Doe</h4>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed a lorem quis neque interdum consequat ut sed
                        sem. Duis quis tempor nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus."
                      </p>
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile" />
                        <i className="icon-smile" />
                      </div>
                    </div>
                    {/* End review strip */}
                    <div className="review_strip_single">
                      <img
                        src="/img/avatar3.jpg"
                        alt="gallery_image"
                        className="rounded-circle"
                      />
                      <small> - 10 March 2015 -</small>
                      <h4>Jhon Doe</h4>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed a lorem quis neque interdum consequat ut sed
                        sem. Duis quis tempor nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus."
                      </p>
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile" />
                        <i className="icon-smile" />
                      </div>
                    </div>
                    {/* End review strip */}
                    <div className="review_strip_single last">
                      <img
                        src="/img/avatar2.jpg"
                        alt="gallery_image"
                        className="rounded-circle"
                      />
                      <small> - 10 March 2015 -</small>
                      <h4>Jhon Doe</h4>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed a lorem quis neque interdum consequat ut sed
                        sem. Duis quis tempor nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus."
                      </p>
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile" />
                        <i className="icon-smile" />
                      </div>
                    </div>
                    {/* End review strip */}
                  </div>
                </div>
              </div>
              {/*End  single_tour_desc*/}
              <aside className="col-lg-4">
                <div className="box_style_1 expose">
                  <h3 className="inner">- Booking -</h3>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          <i className="icon-calendar-7" /> Select a date
                        </label>
                        <DatePicker
                          selected={this.state.date}
                          onChange={this.onChange}
                          className="date-pick form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          <i className=" icon-clock" /> Time
                        </label>
                        <DatePicker
                          selected={this.state.time}
                          onChange={time => this.onTimeChange(time)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="time-pick form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label>Người lớn</label>
                        <div className="numbers-row">
                          <div className="dec button_inc">-</div>
                          <div className="inc button_inc">+</div>
                          <input
                            type="text"
                            defaultValue={1}
                            id="adults"
                            className="qty2 form-control"
                            name="quantity"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label>Trẻ em</label>
                        <div className="numbers-row">
                          <div className="dec button_inc">-</div>
                          <div className="inc button_inc">+</div>
                          <input
                            type="text"
                            defaultValue={0}
                            id="children"
                            className="qty2 form-control"
                            name="quantity"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <table className="table table_summary">
                    <tbody>
                      <tr>
                        <td>Người lớn</td>
                        <td className="text-right">2</td>
                      </tr>
                      <tr>
                        <td>Trẻ em</td>
                        <td className="text-right">0</td>
                      </tr>
                      <tr>
                        <td>Total amount</td>
                        <td className="text-right">3x $52</td>
                      </tr>
                      <tr className="total">
                        <td>Total cost</td>
                        <td className="text-right">$154</td>
                      </tr>
                    </tbody>
                  </table>
                  <a className="btn_full" href="!#" onClick={this.handleClick}>
                    Book now
                  </a>
                </div>
                {/*/box_style_1 */}
                <div className="box_style_4">
                  <i className="icon_set_1_icon-90" />
                  <h4>
                    <span>Book</span> by phone
                  </h4>
                  <a href="tel://004542344599" className="phone">
                    +45 423 445 99
                  </a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>
              </aside>
            </div>
            {/*End row */}
          </div>
          {/*End container */}
          <div id="overlay" />
          {/* Mask on input focus */}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  toursDetails: selectTourDetails(state, ownProps.match.params.id),
  currentUser: selectCurrentUser(state)
});

export default withRouter(connect(mapStateToProps)(TourDetails));
