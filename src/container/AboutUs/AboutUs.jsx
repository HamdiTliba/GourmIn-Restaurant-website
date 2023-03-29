import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about">
      <div className="app__aboutus-overlay flex__center ">
        <img src={images.G} alt="G letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
            eros ipsum. In iaculis ante ut laoreet ultricies. In et purus
            maximus, porttitor turpis eu, blandit nulla. Etiam eu odio
            vulputate, rhoncus justo et, sagittis augue. Aliquam sed libero
            faucibus, accumsan sapien nec, euismod turpis. Ut ac fringilla
            ligula. Nullam hendrerit vel felis eu lobortis.
          </p>
          <button
            type="button"
            className="custom__button"
            style={{ margin: "1rem 0" }}>
            know More
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            sed vestibulum massa ultricies. Suspendisse lacinia nisi mauris,
            tempus tristique velit ultricies eget. Nullam dictum tincidunt mi ac
            condimentum. Nunc dignissim tellus nec ante pulvinar placerat. Sed
            vel auctor felis, in dictum ante. Fusce finibus erat turpis, non
            consequat elit commodo vel.
          </p>
          <button
            type="button"
            className="custom__button"
            style={{ margin: "1rem 0" }}>
            know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
