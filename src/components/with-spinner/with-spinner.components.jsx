import React from "react";

import "./with-spinner.styles.scss";

const WithSpinner = WrappedCompoents => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="cs-loader">
        <div className="cs-loader-inner">
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
        </div>
      </div>
    ) : (
      <WrappedCompoents {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
