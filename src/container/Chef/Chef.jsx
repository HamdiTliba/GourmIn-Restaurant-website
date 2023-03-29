import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans" style={{ marginLeft: ".5rem" }}>
              Vivamus dapibus vel ipsum non facilisis. Duis id dolor est. Etiam
              leo sapien, sagittis id eleifend non, pellentesque ut nisi.
            </p>
          </div>
          <p className="p__opensans">
            Aliquam at laoreet eros, in volutpat nulla. Vestibulum faucibus
            placerat lacus, a dapibus nisi suscipit ut. Vivamus a ligula
            tincidunt, sollicitudin ex in, placerat erat. Morbi ultrices
            tristique nulla. Nullam hendrerit, tortor eget mattis venenatis, leo
            tellus suscipit purus, sed congue leo diam non enim.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" style={{ marginTop: "3rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Chef;
