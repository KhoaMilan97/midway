import React from "react";
import API from "../../api/baseURL";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {
  email,
  required,
  emailNotFound,
} from "../../util/checkValidate.components";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user: "",
    };
  }

  componentDidMount() {
    API.get("user").then((res) => this.setState({ user: res.data }));
    document.title = this.props.title;
  }

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <section id="hero" className="login">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                <div id="login">
                  <div className="text-center">
                    <img
                      src="img/logo_midway_sticky.png"
                      alt="logo sticky"
                      data-retina="true"
                    />
                  </div>
                  <hr />
                  <Form
                    onSubmit={(e) => this.onSubmit(e)}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    <div className="form-group">
                      <label>Email</label>
                      <Input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Nhập email của bạn"
                        user={user}
                        onChange={this.onChangeHandler}
                        validations={[required, email, emailNotFound]}
                      />
                    </div>
                    <button type="submit" className="btn_full">
                      Reset mật khẩu
                    </button>
                    <CheckButton
                      style={{ display: "none" }}
                      ref={(c) => {
                        this.checkBtn = c;
                      }}
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
