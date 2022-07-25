import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";

const SomethingWrong = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // this changes the scrolling behavior to "smooth"

  return (
    <div>
      <div className="underConstruction">
        <div className="ConstructionContent">
          <div className="container">
            <Link to="#">
              <img
                className="underCont"
                src="assets/img/500.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNewsletterAddress(SomethingWrong);
