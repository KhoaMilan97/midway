import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";

import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.components";
import HomePages from "./pages/homepages/homepages.components";
import About from "./pages/about/about.component";
import SignIn from "./pages/sign-in/sign-in.components";
import SignUp from "./pages/sign-up/sign-up.components";
import NotFound from "./pages/404-pages/404-pages.components";
import TourPages from "./pages/tours/tours.components";

import "./App.css";

class App extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/sign-in"
            render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
          />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/tours" component={TourPages} />
          <Route exact path="/" component={HomePages} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
