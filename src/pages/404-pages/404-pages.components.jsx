import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => (
  <section id="hero">
    <div className="intro_title error">
      <h1 className="animated fadeInDown">404</h1>
      <p className="animated fadeInDown">Oops!! Page not found</p>
      <Link to="/" className="animated fadeInUp button_intro">
        Back to home
      </Link>{" "}
      <a
        href="all_tours_list.html"
        className="animated fadeInUp button_intro outline"
      >
        View all tours
      </a>
    </div>
  </section>
);

export default NotFound;
