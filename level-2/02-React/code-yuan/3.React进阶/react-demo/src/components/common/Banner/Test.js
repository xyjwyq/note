import React, { PureComponent } from "react";
import Banner from "./index";
import img1 from "./img/1.jpg";
import img2 from "./img/2.webp";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.webp";

const imgSrc = [img1, img2, img3, img4, img5];

export default class Test extends PureComponent {
  render() {
    return <Banner imgSrc={imgSrc} />;
  }
}
