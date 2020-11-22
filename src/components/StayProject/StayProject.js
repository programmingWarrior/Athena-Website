import React from "react";
import img20 from "../../images/20 [Converted]@2x.png";
const StayProject = () => {
  return (
    <div className=" Project pt-2 container mx-auto pb-5">
      <div className="row  d-flex align-items-center">
        <div className="col-md-6 img16 pl-5">
          <img
            className="img20 pl-3"
            style={{ width: "85%" }}
            src={img20}
            alt=""
          />
        </div>
        <div className="col-md-6 pl-5 ">
          <h1 className="stay" style={{ fontFamily: "Yeseva One" }}>
            Stay Running &<span> project</span>
          </h1>
          <p className="lorem20 pt-3">
            It is a long established fact that a reader will be distracted by
            the
            <span>
              {" "}
              readable content of a page when looking at its layout. The point
              of{" "}
            </span>
            <span>
              {" "}
              using Lorem ipsum is that it has more-or-less mormal distribution
            </span>
            <span> of letter.</span>
          </p>
          <div className="pt-3">
            <button className="radius-btn gradient-btn" href="">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayProject;
