import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="hero_2">
          <div className="intro_title">
            <h1>Place your order</h1>
            <div className="bs-wizard row">
              <div className="col-4 bs-wizard-step active">
                <div className="text-center bs-wizard-stepnum">Your cart</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <span className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step disabled">
                <div className="text-center bs-wizard-stepnum">
                  Your details
                </div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <span className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step disabled">
                <div className="text-center bs-wizard-stepnum">Finish!</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <span className="bs-wizard-dot" />
              </div>
            </div>
            {/* End bs-wizard */}
          </div>
          {/* End intro-title */}
        </section>
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Category</a>
                </li>
                <li>Page active</li>
              </ul>
            </div>
          </div>
          {/* End position */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-lg-8">
                <table className="table table-striped cart-list add_bottom_30">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Discount</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="thumb_cart">
                          <img src="img/thumb_cart_1.jpg" alt="cart_img" />
                        </div>
                        <span className="item_cart">Louvre Museum tickets</span>
                      </td>
                      <td>
                        <div className="numbers-row">
                          <input
                            type="text"
                            defaultValue={1}
                            id="quantity_1"
                            className="qty2 form-control"
                            name="quantity_1"
                          />
                        </div>
                      </td>
                      <td>0%</td>
                      <td>
                        <strong>€24,71</strong>
                      </td>
                      <td className="options">
                        <a href="/">
                          <i className=" icon-trash" />
                        </a>
                        <a href="/">
                          <i className="icon-ccw-2" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="thumb_cart">
                          <img src="img/thumb_cart_1.jpg" alt="cart_img" />
                        </div>
                        <span className="item_cart">Eiffell tour</span>
                      </td>
                      <td>
                        <div className="numbers-row">
                          <input
                            type="text"
                            defaultValue={0}
                            id="quantity_2"
                            className="qty2 form-control"
                            name="quantity_2"
                          />
                        </div>
                      </td>
                      <td>0%</td>
                      <td>
                        <strong>€0,0</strong>
                      </td>
                      <td className="options">
                        <a href="/">
                          <i className=" icon-trash" />
                        </a>
                        <a href="/">
                          <i className="icon-ccw-2" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="thumb_cart">
                          <img src="img/thumb_cart_1.jpg" alt="cart_img" />
                        </div>
                        <span className="item_cart">Senna river Tour</span>
                      </td>
                      <td>
                        <div className="numbers-row">
                          <input
                            type="text"
                            defaultValue={1}
                            id="quantity_3"
                            className="qty2 form-control"
                            name="quantity_3"
                          />
                        </div>
                      </td>
                      <td>0%</td>
                      <td>
                        <strong>€24,71</strong>
                      </td>
                      <td className="options">
                        <a href="/">
                          <i className=" icon-trash" />
                        </a>
                        <a href="/">
                          <i className="icon-ccw-2" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="add_bottom_15">
                  <small>* Prices for person.</small>
                </div>
              </div>
              {/* End col */}
              <aside className="col-lg-4">
                <div className="box_style_1">
                  <h3 className="inner">- Summary -</h3>
                  <table className="table table_summary">
                    <tbody>
                      <tr>
                        <td>Adults</td>
                        <td className="text-right">2</td>
                      </tr>
                      <tr>
                        <td>Children</td>
                        <td className="text-right">0</td>
                      </tr>
                      <tr>
                        <td>Dedicated tour guide</td>
                        <td className="text-right">$34</td>
                      </tr>
                      <tr>
                        <td>Insurance</td>
                        <td className="text-right">$34</td>
                      </tr>
                      <tr className="total">
                        <td>Total cost</td>
                        <td className="text-right">$154</td>
                      </tr>
                    </tbody>
                  </table>
                  <a className="btn_full" href="payment.html">
                    Check out
                  </a>
                  <a className="btn_full_outline" href="/">
                    <i className="icon-right" /> Continue shopping
                  </a>
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
              </aside>
              {/* End aside */}
            </div>
            {/*End row */}
          </div>
          {/*End container */}
        </main>
      </React.Fragment>
    );
  }
}

export default Cart;
