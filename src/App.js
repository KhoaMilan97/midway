import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";

import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.components";
import Spinner from "./components/spinner/spinner.components";

import "./App.css";

const HomePages = lazy(() => import("./pages/homepages/homepages.components"));
const About = lazy(() => import("./pages/about/about.component"));
const SignIn = lazy(() => import("./pages/sign-in/sign-in.components"));
const SignUp = lazy(() => import("./pages/sign-up/sign-up.components"));
const NotFound = lazy(() => import("./pages/404-pages/404-pages.components"));
const TourPages = lazy(() => import("./pages/tours/tours.components"));
const Cart = lazy(() => import("./pages/cart/cart.components"));
const Confirmation = lazy(() =>
  import("./pages/confirmation/confirmation.components")
);

class App extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/sign-in"
              render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
            />
            <Route
              exact
              path="/sign-up"
              render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
            />
            <Route
              exact
              path="/cart"
              render={() =>
                !currentUser ? <Redirect to="/sign-in" /> : <Cart />
              }
            />
            <Route path="/tours" component={TourPages} />
            <Route exact path="/confirm" component={Confirmation} />
            <Route exact path="/" component={HomePages} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
