import React from "react";
import "./services.css";
import experience from "../../images/Group 65@2x.png";
import Interface from "../../images/Group 66@2x.png";
import Prototyping from "../../images/Group 69@2x.png";
import illustration from "../../images/Group 72@2x.png";
import bg from "../../images/bgString (1).png";

const What = () => {
  return (
    <div style={{ backgroundColor: "#FAFFFD" }} className="pt-5 container pb-5 mb-5">
      <div className="bg-string">
        <div className="pt-5 pb-4" style={{ textAlign: "center" }}>
          <h1 className="what" style={{ fontFamily: "Yeseva One" }}>
            What we do
          </h1>
          <p className="what-focus">
            <small>Our main focus is to make the User Experience very <br/> simple and easy.Simplicity is our Strength.</small>
          </p>
        </div>
        <div className="pt-2">
          <div className=" row pt-5">
            <div className="col-md-3 text-center hover   box">
              <div className="serviceItem px-4 py-5">
                <img className="services-img" src={experience} alt="" />
                <div className="pt-3">
                  <h5>Experience Design</h5>
                  <small className="desing">
                    The point of using Lorem{" "}
                    <span>ispum is that it has a more-or-</span>{" "}
                    <span>less normal</span>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center hover   box">
              <div className="serviceItem px-4 py-5">
                <img className="services-img" src={Interface} alt="" />
                <div className="pt-3">
                  <h5>Interface Desing</h5>
                  <small className="desing">
                    The point of using Lorem{" "}
                    <span>ispum is that it has a more-or-</span>{" "}
                    <span>less normal</span>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center hover  box">
              <div className="serviceItem px-4 py-5">
                <img className="services-img" src={Prototyping} alt="" />
                <div className="pt-3">
                  <h5>Prototyping</h5>
                  <small className="desing">
                    The point of using Lorem{" "}
                    <span>ispum is that it has a more-or-</span>{" "}
                    <span>less normal</span>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center hover   box">
              <div className="serviceItem px-4 py-5">
                <img className="services-img" src={illustration} alt="" />
                <div className="pt-3">
                  <h5>Illustration</h5>
                  <small className="desing">
                    The point of using Lorem{" "}
                    <span>ispum is that it has a more-or-</span>{" "}
                    <span>less normal</span>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
