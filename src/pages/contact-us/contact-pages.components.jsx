import React from "react";
import { Link } from "react-router-dom";

import BannerHeader from "../../shared/banner-header.components";

import "./contact-pages.styles.scss";

class ContactPages extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <React.Fragment>
        <BannerHeader
          title="Liên hệ"
          content="Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula."
        />
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          {/* End Position */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-md-8">
                <div className="form_title">
                  <h3>
                    <strong>
                      <i className="icon-pencil" />
                    </strong>
                    Fill the form below
                  </h3>
                  <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                </div>
                <div className="step">
                  <div id="message-contact" />
                  <form
                    method="post"
                    action="assets/contact.php"
                    id="contactform"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name_contact"
                            name="name_contact"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname_contact"
                            name="lastname_contact"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            id="email_contact"
                            name="email_contact"
                            className="form-control"
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            id="phone_contact"
                            name="phone_contact"
                            className="form-control"
                            placeholder="Enter Phone number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            rows={5}
                            id="message_contact"
                            name="message_contact"
                            className="form-control"
                            placeholder="Write your message"
                            style={{ height: "200px" }}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="submit"
                          defaultValue="Submit"
                          className="btn_1"
                          id="submit-contact"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End col-md-8 */}
              <div className="col-md-4">
                <div className="box_style_1">
                  <span className="tape" />
                  <h4>
                    Address{" "}
                    <span>
                      <i className="icon-pin pull-right" />
                    </span>
                  </h4>
                  <p>Place Charles de Gaulle, 75008 Paris</p>
                  <hr />
                  <h4>
                    Help center{" "}
                    <span>
                      <i className="icon-help pull-right" />
                    </span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, vim id accusata sensibus, id
                    ridens quaeque qui. Ne qui vocent ornatus molestie.
                  </p>
                  <ul id="contact-info">
                    <li>+ 61 (2) 8093 3400 / + 61 (2) 8093 3402</li>
                    <li>
                      <a href="!#">info@domain.com</a>
                    </li>
                  </ul>
                </div>
                <div className="box_style_4">
                  <i className="icon_set_1_icon-57" />
                  <h4>
                    Need <span>Help?</span>
                  </h4>
                  <a href="tel://004542344599" className="phone">
                    +45 423 445 99
                  </a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>
              </div>
              {/* End col-md-4 */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
          <div id="map_contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.7732142759!2d106.61960542201993!3d10.853848385152041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2222564f53ae228d!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1585994803308!5m2!1svi!2s"
              height={450}
              width={600}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Google maps"
            />
          </div>
          {/* end map*/}

          {/* end directions*/}
        </main>
      </React.Fragment>
    );
  }
}

export default ContactPages;
