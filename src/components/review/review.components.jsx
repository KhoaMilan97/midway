import React from "react";

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "",
      guide: "",
      price: "",
      quality: "",
      comment: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { position, guide, price, quality, comment } = this.state;
    return (
      <div
        className="modal fade"
        id="myReview"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myReviewLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myReviewLabel">
                Viết bình luận của bạn
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="message-review"></div>
              <form
                method="post"
                action="assets/review_tour.php"
                name="review_tour"
                id="review_tour"
              >
                <input
                  name="tour_name"
                  id="tour_name"
                  type="hidden"
                  defaultValue="Paris Arch de Triomphe Tour"
                />

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Vị trí</label>
                      <select
                        className="form-control"
                        id="position_review"
                        name="position"
                        value={position}
                        onChange={this.handleChange}
                      >
                        <option value>Đánh giá của bạn</option>
                        <option value="1">Kém</option>
                        <option value="2">Trung bình</option>
                        <option value="3">Khá</option>
                        <option value="4">Tốt</option>
                        <option value="5">Rất tốt</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Hương dẫn tour</label>
                      <select
                        className="form-control"
                        name="guide"
                        id="guide_review"
                        value={guide}
                        onChange={this.handleChange}
                      >
                        <option value>Đánh giá của bạn</option>
                        <option value="1">Kém</option>
                        <option value="2">Trung bình</option>
                        <option value="3">Khá</option>
                        <option value="4">Tốt</option>
                        <option value="5">Rất tốt</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* End row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Giá cả</label>
                      <select
                        className="form-control"
                        name="price"
                        id="price_review"
                        value={price}
                        onChange={this.handleChange}
                      >
                        <option value>Đánh giá của bạn</option>
                        <option value="1">Kém</option>
                        <option value="2">Trung bình</option>
                        <option value="3">Khá</option>
                        <option value="4">Tốt</option>
                        <option value="5">Rất tốt</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Chất lượng</label>
                      <select
                        className="form-control"
                        name="quality"
                        id="quality_review"
                        value={quality}
                        onChange={this.handleChange}
                      >
                        <option value>Đánh giá của bạn</option>
                        <option value="1">Kém</option>
                        <option value="2">Trung bình</option>
                        <option value="3">Khá</option>
                        <option value="4">Tốt</option>
                        <option value="5">Rất tốt</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* End row */}
                <div className="form-group">
                  <textarea
                    name="comment"
                    id="review_text"
                    className="form-control"
                    style={{ height: "100px" }}
                    placeholder="Viết đánh giá của bạn"
                    value={comment}
                    onChange={this.handleChange}
                  />
                </div>

                <input
                  type="submit"
                  defaultValue="Submit"
                  className="btn_1"
                  id="submit-review"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
