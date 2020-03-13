import React from "react";

const SignUp = () => (
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
                <form>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className=" form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className=" form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className=" form-control"
                      id="password1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm password</label>
                    <input
                      type="password"
                      className=" form-control"
                      id="password2"
                      placeholder="Confirm password"
                    />
                  </div>
                  <div id="pass-info" className="clearfix" />
                  <button className="btn_full">Create an account</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* End main */}
  </React.Fragment>
);

export default SignUp;
