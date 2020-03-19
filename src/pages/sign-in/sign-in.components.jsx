import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  googleSignInStart,
  facebookSignInStart,
  signInWithEmail
} from "../../redux/user/user.action";

import "./sign-in.styles.scss";

function FormError(props) {
  if (props.isHidden) {
    return null;
  } else {
    return <div className="message">{props.errorMessage}</div>;
  }
}

export const validateInput = (type, checkingText) => {
  if (type === "email") {
    const regexp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const checkResult = regexp.test(checkingText);
    if (checkResult) {
      return {
        isInputValid: true,
        errorMessage: "",
        isValid: true
      };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Email của bạn không đúng dạng",
        isValid: false
      };
    }
  }
  if (type === "password") {
    if (checkingText.length < 8) {
      return {
        isInputValid: false,
        errorMessage: "Mật khẩu cần ít nhất 8 kí tự",
        isValid: false
      };
    } else {
      return {
        isInputValid: true,
        errorMessage: "",
        isValid: true
      };
    }
  }
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: "",
        isInputValid: true,
        errorMessage: "",
        isValid: false
      },
      password: {
        value: "",
        isInputValid: true,
        errorMessage: "",
        isValid: false
      }
    };
  }

  handleInputValidation = event => {
    const { name } = event.target;
    const { isInputValid, errorMessage, isValid } = validateInput(
      name,
      this.state[name].value
    );
    const newState = { ...this.state[name] }; /* dummy object */
    newState.isInputValid = isInputValid;
    newState.errorMessage = errorMessage;
    newState.isValid = isValid;
    this.setState({ [name]: newState });
  };

  handleChange = event => {
    let { name, value } = event.target;
    const newState = { ...this.state[name] };
    newState.value = value;
    this.setState({
      [name]: newState
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.signInWithEmail(email.value, password.value);
  };
  render() {
    const { googleSignInStart, facebookSignInStart } = this.props;
    const { email, password } = this.state;
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
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        className=" form-control "
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={email.value}
                        onBlur={this.handleInputValidation}
                      />
                      <FormError
                        type="email"
                        isHidden={email.isInputValid}
                        errorMessage={email.errorMessage}
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
                        value={password.value}
                        onBlur={this.handleInputValidation}
                      />
                      <FormError
                        type="password"
                        isHidden={password.isInputValid}
                        errorMessage={password.errorMessage}
                      />
                    </div>

                    <button type="submit" className="btn_full">
                      Đăng nhập
                    </button>
                    <Link to="/sign-up" className="btn_full_outline">
                      Đăng kí
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
  facebookSignInStart: () => dispatch(facebookSignInStart()),
  signInWithEmail: (email, password) =>
    dispatch(signInWithEmail({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
