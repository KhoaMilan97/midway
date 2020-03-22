import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AllTours from "../all-tours/all-tours.components";
import TourDetails from "../tour-details/tour-details.components";
import WithSpinner from "../../components/with-spinner/with-spinner.components";

import { getTourStart } from "../../redux/tour/tour.action";
import { selectTourLoading } from "../../redux/tour/tour.selector";

import "./tours.styles.scss";

const TourDetailsContainer = WithSpinner(TourDetails);
const AllToursContainer = WithSpinner(AllTours);

class Tour extends React.Component {
  componentDidMount() {
    const { getTourStart } = this.props;
    getTourStart();
  }
  render() {
    const { loading, match } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => <AllToursContainer isLoading={loading} />}
        />
        <Route
          exact
          path={`${match.path}/:id`}
          render={() => <TourDetailsContainer isLoading={loading} />}
        />
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectTourLoading
});

const mapDispatchToProps = dispatch => ({
  getTourStart: () => dispatch(getTourStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Tour);
