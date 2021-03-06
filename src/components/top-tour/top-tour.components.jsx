import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TourSlider from "../tour-slider/tour-slider.componnets";

import { selectHotTours } from "../../redux/tour/tour.selector";

class TopTour extends React.Component {
  render() {
    const { tours } = this.props;
    return (
      <React.Fragment>
        {tours.length && <TourSlider tours={tours} status="Hot" />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tours: selectHotTours,
});

export default connect(mapStateToProps)(TopTour);
