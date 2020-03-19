import React from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {
  isPhone,
  email,
  required,
  rePassowrd,
  minLengthPassword,
  minLengthUsername,
  onlyString
} from "../../util/checkValidate.components";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      confirmPassword: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();

    // check if no errors
    if (this.checkBtn.context._errors.length === 0) {
      alert("success");
    }
  }

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <main>
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
                    <Form
                      onSubmit={e => this.onSubmit(e)}
                      ref={c => {
                        this.form = c;
                      }}
                    >
                      <div className="form-group">
                        <label>Tên người dùng</label>
                        <Input
                          type="text"
                          className=" form-control"
                          placeholder="Username"
                          name="username"
                          onChange={this.onChangeHandler}
                          validations={[
                            required,
                            minLengthUsername,
                            onlyString
                          ]}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <Input
                          type="email"
                          className=" form-control"
                          placeholder="Email"
                          name="email"
                          onChange={this.onChangeHandler}
                          validations={[required, email]}
                        />
                      </div>

                      <div className="form-group">
                        <label>Số điện thoại</label>
                        <Input
                          type="text"
                          className=" form-control"
                          id="phone"
                          placeholder="Phone number"
                          name="phoneNumber"
                          onChange={this.onChangeHandler}
                          validations={[required, isPhone]}
                        />
                      </div>
                      <div className="form-group">
                        <label>Mật khẩu</label>
                        <Input
                          type="password"
                          className=" form-control"
                          id="password1"
                          placeholder="Password"
                          name="password"
                          onChange={this.onChangeHandler}
                          validations={[required, minLengthPassword]}
                        />
                      </div>
                      <div className="form-group">
                        <label>Nhập lại mật khẩu</label>
                        <Input
                          type="password"
                          className=" form-control"
                          id="password2"
                          name="confirmPassword"
                          placeholder="Confirm password"
                          validations={[required, rePassowrd]}
                          repass={this.state.password}
                        />
                      </div>
                      <div id="pass-info" className="clearfix" />
                      <button className="btn_full">Tại tài khoản</button>
                      <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                          this.checkBtn = c;
                        }}
                      />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* End main */}
      </React.Fragment>
    );
  }
}

export default SignUp;
