import React from "react";
import { images } from "../../constants";
import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app_wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button
          type="button"
          className="custom__button"
          style={{ margin: "1rem" }}>
          Explore Menu
        </button>
      </div>

      <div className="app__header-img">
        <img src={images.welcome} alt="header-img" />
      </div>
    </div>
  );
};

export default Header;
