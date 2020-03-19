import React from "react";

import BannerHeader from "../../shared/banner-header.components";
import TourItems from "../../components/tour-items/tour-items.components";

class TourPages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BannerHeader
          title="All tours"
          content="Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula."
        />
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Tours</li>
              </ul>
            </div>
          </div>

          <div className="container margin_60">
            <div className="row">
              <aside className="col-lg-3">
                <div className="box_style_cat">
                  <ul id="cat_nav">
                    <li>
                      <a href="/" id="active">
                        <i className="icon_set_1_icon-51" />
                        All tours <span>(141)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="icon_set_1_icon-3" />
                        City sightseeing <span>(20)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="icon_set_1_icon-4" />
                        Museum tours <span>(16)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="icon_set_1_icon-44" />
                        Historic Buildings <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="icon_set_1_icon-37" />
                        Walking tours <span>(11)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="icon_set_1_icon-14" />
                        Eat &amp; Drink <span>(20)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="icon_set_1_icon-43" />
                        Churces <span>(08)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="icon_set_1_icon-28" />
                        Skyline tours <span>(11)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="box_style_2">
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
              {/*End aside */}
              <div className="col-lg-9">
                <TourItems />
                <TourItems />
                <TourItems />
                <TourItems />
                <TourItems />
                <hr />
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="/" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">
                        1<span className="sr-only">(current)</span>
                      </span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* end pagination*/}
              </div>
              {/* End col lg-9 */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </main>
      </React.Fragment>
    );
  }
}

export default TourPages;
