import React from "react";
import { Link } from "react-router-dom";

class Summary extends React.Component {
  selectAdults = () => {
    const { cartItems } = this.props;
    if (cartItems) {
      return cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.adult,
        0
      );
    } else {
      return 0;
    }
  };

  selectChildren = () => {
    const { cartItems } = this.props;
    if (cartItems) {
      return cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.children,
        0
      );
    } else {
      return 0;
    }
  };

  selectTotalCost = () => {
    const { cartItems } = this.props;
    if (cartItems) {
      return cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.totalCost,
        0
      );
    } else {
      return 0;
    }
  };
  render() {
    return (
      <div className="box_style_1">
        <h3 className="inner">- Summary -</h3>
        <table className="table table_summary">
          <tbody>
            <tr>
              <td>Adults</td>
              <td className="text-right">{this.selectAdults()}</td>
            </tr>
            <tr>
              <td>Children</td>
              <td className="text-right">{this.selectChildren()}</td>
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
              <td className="text-right">${this.selectTotalCost()}</td>
            </tr>
          </tbody>
        </table>
        <Link className="btn_full" to="/checkout">
          Check out
        </Link>
        <a className="btn_full_outline" href="/">
          <i className="icon-right" /> Continue shopping
        </a>
      </div>
    );
  }
}

export default Summary;
