import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectAllTours } from "../../redux/tour/tour.selector";
import { getTourStart } from "../../redux/tour/tour.action";

import BannerHeader from "../../shared/banner-header.components";
import TourItems from "../../components/tour-items/tour-items.components";
import Pagination from "react-js-pagination";

import "./tours.styles.scss";

class TourPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      toursPerPages: 5
    };
  }

  componentDidMount() {
    const { getTourStart } = this.props;
    getTourStart();
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    const { tours } = this.props;
    const { currentPage, toursPerPages } = this.state;
    // Get Current Tours
    const indexOfLastTours = currentPage * toursPerPages; // 1 * 5 = 5 //
    const indexOfFirstTours = indexOfLastTours - toursPerPages; // 5 - 5 = 0 //
    const currentTours = tours.slice(indexOfFirstTours, indexOfLastTours); // (0,5)

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
                  <Link to="/">Trang chủ</Link>
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
                      <Link to="/" id="active">
                        <i className="icon_set_1_icon-51" />
                        All tours <span>({tours.length})</span>
                      </Link>
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
                {currentTours.map(tour => (
                  <TourItems key={tour.id_tour} {...tour} />
                ))}

                <hr />
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={toursPerPages}
                  totalItemsCount={tours.length}
                  pageRangeDisplayed={toursPerPages}
                  itemClass="page-item"
                  linkClass="page-link"
                  onChange={this.handlePageChange.bind(this)}
                  innerClass="pagination justify-content-center"
                />
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

const mapStateToProps = createStructuredSelector({
  tours: selectAllTours
});

const mapDispatchToProps = dispatch => ({
  getTourStart: () => dispatch(getTourStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(TourPages);
