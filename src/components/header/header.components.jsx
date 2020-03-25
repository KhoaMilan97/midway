import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user.action";
import { getTypeStart } from "../../redux/type-tour/type-tour.action";
import { selectAllType } from "../../redux/type-tour/type-tour.selector";

class Header extends React.Component {
  componentDidMount() {
    const { getTypeStart } = this.props;
    getTypeStart();
  }
  render() {
    const { signOutStart, currentUser, types } = this.props;

    return (
      <div>
        <div className="layer" />

        <header>
          <div id="top_line">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <i className="icon-phone" />
                  <strong>0985 007 449</strong>
                </div>
                <div className="col-6">
                  <ul id="top_links">
                    <li>
                      {currentUser ? (
                        <div>
                          <span>{currentUser.displayName}</span>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={signOutStart}
                          >
                            {" "}
                            | Đăng xuất
                          </span>
                        </div>
                      ) : (
                        <Link to="/sign-in" id="access_link">
                          Đăng nhập
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              {/* End row */}
            </div>
            {/* End container*/}
          </div>
          {/* End top line*/}
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div id="logo_home">
                  <h1>
                    <Link to="/" title="City tours travel template">
                      City Tours travel template
                    </Link>
                  </h1>
                </div>
              </div>
              <nav className="col-9">
                <Link
                  className="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                  to="/"
                >
                  <span>Menu mobile</span>
                </Link>
                <div className="main-menu">
                  <div id="header_menu">
                    <img
                      src="img/logo_sticky.png"
                      width={160}
                      height={34}
                      alt="City tours"
                      data-retina="true"
                    />
                  </div>
                  <Link to="/" className="open_close" id="close_in">
                    <i className="icon_set_1_icon-77" />
                  </Link>
                  <ul>
                    <li className="submenu">
                      <Link to="/" className="show-submenu">
                        Trang chủ
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="/about" className="show-submenu">
                        Giới thiệu
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="/tours" className="show-submenu">
                        Tours <i className="icon-down-open-mini" />
                      </Link>
                      <ul>
                        {types.map(type => (
                          <li key={type.id}>
                            <Link to={`/tours/${type.type_link}/${type.id}`}>
                              {type.name_type}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="/" className="show-submenu">
                        Liên hệ
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="/" className="show-submenu">
                        Tin tức
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End main-menu */}
                <ul id="top_tools">
                  <li>
                    <Link to="/" className="search-overlay-menu-btn">
                      <i className="icon_search" />
                    </Link>
                  </li>
                  <li>
                    <div className="dropdown dropdown-cart">
                      <Link to="/" data-toggle="dropdown" className="cart_bt">
                        <i className="icon_bag_alt" />
                        <strong>3</strong>
                      </Link>
                      <ul className="dropdown-menu" id="cart_items">
                        <li>
                          <div className="image">
                            <img
                              src="img/thumb_cart_1.jpg"
                              alt="thumb_cart_1"
                            />
                          </div>
                          <strong>
                            <Link to="/">Louvre museum</Link>1x $36.00{" "}
                          </strong>
                          <Link to="/" className="action">
                            <i className="icon-trash" />
                          </Link>
                        </li>
                        <li>
                          <div className="image">
                            <img
                              src="img/thumb_cart_2.jpg"
                              alt="thumb_cart_2"
                            />
                          </div>
                          <strong>
                            <Link to="/">Versailles tour</Link>2x $36.00{" "}
                          </strong>
                          <Link to="/" className="action">
                            <i className="icon-trash" />
                          </Link>
                        </li>
                        <li>
                          <div className="image">
                            <img
                              src="img/thumb_cart_3.jpg"
                              alt="thumb_cart_3"
                            />
                          </div>
                          <strong>
                            <Link to="/">Versailles tour</Link>1x $36.00{" "}
                          </strong>
                          <Link to="/" className="action">
                            <i className="icon-trash" />
                          </Link>
                        </li>
                        <li>
                          <div>
                            Total: <span>$120.00</span>
                          </div>
                          <Link to="cart.html" className="button_drop">
                            Go to cart
                          </Link>
                          <Link
                            to="payment.html"
                            className="button_drop outline"
                          >
                            Check out
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* End dropdown-cart*/}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* container */}
        </header>
        {/* End Header */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  types: selectAllType
});

const mapDispachToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
  getTypeStart: () => dispatch(getTypeStart())
});

export default connect(mapStateToProps, mapDispachToProps)(Header);
