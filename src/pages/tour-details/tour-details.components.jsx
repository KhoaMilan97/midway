import React from "react";
import { connect } from "react-redux";
import { withRouter, Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Markup } from "interweave";

import { selectTourDetails } from "../../redux/tour/tour.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { addCartItems } from "../../redux/cart/cart.action";

import Gallery from "../../components/gallerry/gallery.components";
import Review from "../../components/review/review.components";

import "react-datepicker/dist/react-datepicker.css";
import "./tour-details.styles.scss";

class TourDetails extends React.Component {
  state = {
    date: new Date(),
    time: new Date(),
    adult: 0,
    children: 0,
    price: 0,
  };

  componentDidMount() {
    const { toursDetails } = this.props;
    document.title = `Midways - ${toursDetails.tour_name}`;
  }

  onChange = (date) => this.setState({ date });
  onTimeChange = (time) => this.setState({ time });

  handleClick = (e) => {
    e.preventDefault();

    const {
      currentUser,
      history,
      match,
      addCartItems,
      toursDetails,
    } = this.props;

    const { date, time, adult, children } = this.state;
    const priceChildren = toursDetails.tour_price * 0.1;
    const priceAdult = toursDetails.tour_price * 0.2;

    if (!currentUser) {
      history.push("/sign-in");
    } else {
      const cartItems = {
        id: match.params.id,
        date: date.toLocaleDateString(),
        time: time.toLocaleTimeString(),
        adult,
        children,
        totalCost:
          adult * priceAdult +
          children * priceChildren +
          toursDetails.tour_price,
        name: toursDetails.tour_name,
        price: toursDetails.tour_price,
      };
      addCartItems(cartItems);
      history.push("/checkout");
    }
  };

  onIncrement = (name) => {
    switch (name) {
      case "children":
        this.setState({
          children: this.state.children + 1,
        });
        break;
      case "adult":
        this.setState({
          adult: this.state.adult + 1,
        });
        break;
      default:
        return name;
    }
  };

  onDecrease = (name) => {
    switch (name) {
      case "children":
        if (this.state.children <= 0) {
          return;
        }
        this.setState({
          children: this.state.children - 1,
        });
        break;
      case "adult":
        if (this.state.adult <= 0) {
          return;
        }
        this.setState({
          adult: this.state.adult - 1,
        });
        break;
      default:
        return name;
    }
  };

  onInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { toursDetails } = this.props;
    const { adult, children } = this.state;

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
            backgroundRepeat: "no-repeat",
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
                        currency: "VND",
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
                <Gallery />
                <hr />
                <div className="row">
                  <div className="col-lg-12">
                    <div>
                      <Markup content={toursDetails.description} />
                    </div>
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
                      data-target="#myReview"
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

                    <hr />

                    <div className="review_strip_single">
                      <small> - 10 March 2015 -</small>
                      <h4 style={{ marginLeft: 0 }}>Jhon Doe</h4>
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
                          minDate={new Date()}
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
                          onChange={(time) => this.onTimeChange(time)}
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
                          <div
                            className="dec button_inc"
                            onClick={() => this.onDecrease("adult")}
                          >
                            -
                          </div>
                          <div
                            className="inc button_inc"
                            onClick={() => this.onIncrement("adult")}
                          >
                            +
                          </div>
                          <input
                            type="text"
                            id="adults"
                            className="qty2 form-control"
                            name="adult"
                            value={adult}
                            onChange={this.onInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label>Trẻ em</label>
                        <div className="numbers-row">
                          <div
                            className="dec button_inc"
                            onClick={() => this.onDecrease("children")}
                          >
                            -
                          </div>
                          <div
                            className="inc button_inc"
                            onClick={() => this.onIncrement("children")}
                          >
                            +
                          </div>
                          <input
                            type="text"
                            id="children"
                            className="qty2 form-control"
                            name="children"
                            value={children}
                            onChange={this.onInputChange}
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
                        <td className="text-right">{adult}</td>
                      </tr>
                      <tr>
                        <td>Trẻ em</td>
                        <td className="text-right">{children}</td>
                      </tr>
                      <tr className="total">
                        <td>Tổng tiền</td>
                        <td className="text-right">
                          {(
                            adult * (toursDetails.tour_price * 0.2) +
                            children * (toursDetails.tour_price * 0.1) +
                            toursDetails.tour_price
                          ).toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn_full" onClick={this.handleClick}>
                    Đặt tour
                  </button>
                </div>
                {/*/box_style_1 */}
                <div className="box_style_4">
                  <i className="icon_set_1_icon-90" />
                  <h4>
                    <span>Book</span> by phone
                  </h4>
                  <a href="tel://004542344599" className="phone">
                    +84 985 007 449
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
        <Review />
      </React.Fragment>
    );
  }
}

// ADULT: 0.5TOURS
// CHILD: 0.25TOURS

const mapStateToProps = (state, ownProps) => ({
  toursDetails: selectTourDetails(state, ownProps.match.params.id),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToPorps = (dispatch) => ({
  addCartItems: (cartItems) => dispatch(addCartItems(cartItems)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToPorps)(TourDetails)
);
