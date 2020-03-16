import React from "react";
import './Loader.scss';

const Loader = () => {
  return (
    <div className="col-md-12 d-flex justify-content-center mt-5">
      <div className="cssload-loader">
        <div className="cssload-inner cssload-one"/>
        <div className="cssload-inner cssload-two"/>
        <div className="cssload-inner cssload-three"/>
      </div>
    </div>
  )
};

export default Loader;
