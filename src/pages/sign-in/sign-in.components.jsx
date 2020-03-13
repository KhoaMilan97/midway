import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  googleSignInStart,
  facebookSignInStart
} from "../../redux/user/user.action";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    };
  }

  handleChange = event => {
    let { name } = event.target;
    let { value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("submitted");
  };
  render() {
    const { googleSignInStart, facebookSignInStart } = this.props;
    return (
      <React.Fragment>
        <section id="hero" className="login">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                <div id="login">
                  <div className="text-center">
                    <img
                      src="img/logo_sticky.png"
                      alt="logo sticky"
                      data-retina="true"
                    />
                  </div>
                  <hr />
                  <form onSubmit={this.handleSubmit}>
                    <button
                      onClick={facebookSignInStart}
                      type="button"
                      className="social_bt facebook"
                    >
                      Login with Facebook
                    </button>
                    <button
                      onClick={googleSignInStart}
                      type="button"
                      className="social_bt google"
                    >
                      Login with Google
                    </button>
                    <div className="divider">
                      <span>Or</span>
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        name="username"
                        className=" form-control "
                        placeholder="Username"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        className=" form-control"
                        placeholder="Password"
                        onChange={this.handleChange}
                      />
                    </div>
                    <p className="small">
                      <a href="/">Forgot Password?</a>
                    </p>
                    <button type="submit" className="btn_full">
                      Sign in
                    </button>
                    <Link to="/sign-up" className="btn_full_outline">
                      Register
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  facebookSignInStart: () => dispatch(facebookSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);
