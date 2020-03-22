import React from "react";

import "./with-spinner.styles.scss";

const WithSpinner = WrappedCompoents => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ) : (
      <WrappedCompoents {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
