import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <React.Fragment>
    <footer className="revealed">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Cần giúp đỡ?</h3>
            <a href="tel://0985007449" id="phone">
              +84 985 007 449
            </a>
            <a href="mailto:khoamilan123@gmail.com" id="email_footer">
              khoamilan123@gmail.com.com
            </a>
          </div>
          <div className="col-md-3">
            <h3>Liên kết hữu ích</h3>
            <ul>
              <li>
                <Link to="/about">Giới thiệu</Link>
              </li>

              <li>
                <Link to="/sign-in">Đăng nhập</Link>
              </li>
              <li>
                <Link to="/sign-up">Đăng kí</Link>
              </li>
              <li>
                <Link to="/">Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Discover</h3>
            <ul>
              <li>
                <Link to="/">Community blog</Link>
              </li>
              <li>
                <Link to="/">Tour guide</Link>
              </li>
              <li>
                <Link to="/">Wishlist</Link>
              </li>
              <li>
                <Link to="/">Gallery</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>Settings</h3>
            <div className="styled-select">
              <select name="lang" id="lang">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Russian">Russian</option>
              </select>
            </div>
            <div className="styled-select">
              <select name="currency" id="currency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="RUB">RUB</option>
              </select>
            </div>
          </div>
        </div>
        {/* End row */}
        <div className="row">
          <div className="col-md-12">
            <div id="social_footer">
              <ul>
                <li>
                  <Link
                    to="https://www.facebook.com/KhoaMilan97"
                    target="_blank"
                  >
                    <i className="icon-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/Khoa_Milan" target="_blank">
                    <i className="icon-twitter" />
                  </Link>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-google" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-vimeo" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-youtube-play" />
                  </a>
                </li>
              </ul>
              <p>© Citytours 2018</p>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </footer>
    {/* End footer */}
    <div id="toTop" />
    {/* Back to top button */}
    {/* Search Menu */}
    <div className="search-overlay-menu">
      <span className="search-overlay-close">
        <i className="icon_set_1_icon-77" />
      </span>
      <form role="search" id="searchform" method="get">
        <input defaultValue name="q" type="search" placeholder="Search..." />
        <button type="submit">
          <i className="icon_set_1_icon-78" />
        </button>
      </form>
    </div>
    {/* End Search Menu */}
    {/* Sign In Popup */}
    <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
      <div className="small-dialog-header">
        <h3>Sign In</h3>
      </div>
      <form>
        <div className="sign-in-wrapper">
          <a href="/0" className="social_bt facebook">
            Login with Facebook
          </a>
          <a href="/0" className="social_bt google">
            Login with Google
          </a>
          <div className="divider">
            <span>Or</span>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
            />
            <i className="icon_mail_alt" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              defaultValue
            />
            <i className="icon_lock_alt" />
          </div>
          <div className="clearfix add_bottom_15">
            <div className="checkboxes float-left">
              <input id="remember-me" type="checkbox" name="check" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <div className="float-right">
              <a id="forgot" href="/">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="text-center">
            <input type="submit" defaultValue="Log In" className="btn_login" />
          </div>
          <div className="text-center">
            Don’t have an account? <a href="/">Sign up</a>
          </div>
          <div id="forgot_pw">
            <div className="form-group">
              <label>Please confirm login email below</label>
              <input
                type="email"
                className="form-control"
                name="email_forgot"
                id="email_forgot"
              />
              <i className="icon_mail_alt" />
            </div>
            <p>
              You will receive an email containing a link allowing you to reset
              your password to a new preferred one.
            </p>
            <div className="text-center">
              <input
                type="submit"
                defaultValue="Reset Password"
                className="btn_1"
              />
            </div>
          </div>
        </div>
      </form>
      {/*form */}
    </div>
  </React.Fragment>
);

export default Footer;
