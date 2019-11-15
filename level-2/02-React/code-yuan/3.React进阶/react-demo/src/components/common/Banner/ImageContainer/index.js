import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ImageContainer extends PureComponent {
  static propTypes = {
    imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  };

  tick = 16;

  timer = null;

  imgContainerRef = React.createRef();

  switchTo(index) {
    if (index < 0) {
      index = 0;
    } else if (index > this.props.imgSrc.length - 1) {
      index = this.props.imgSrc.length - 1;
    }
    const container = this.imgContainerRef.current;
    let currentTime = 0;
    const totalTme = Math.ceil(this.props.duration / this.tick);
    let curMarginLeft = parseFloat(getComputedStyle(container).marginLeft);
    const targetLeft = -index * this.props.imgWidth;
    const totalDis = targetLeft - curMarginLeft;
    const everyDis = totalDis / totalTme;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      currentTime++;
      curMarginLeft += everyDis;
      container.style.marginLeft = curMarginLeft + "px";
      if (currentTime === totalTme) {
        container.style.marginLeft = targetLeft + "px";

        clearInterval(this.timer);
      }
    }, this.tick);
  }

  render() {
    const imgs = this.props.imgSrc.map((it, i) => (
      <img
        key={i}
        src={it}
        style={{
          width: this.props.imgWidth,
          height: this.props.imgHeight,
          float: "left"
        }}
      />
    ));

    return (
      <div
        ref={this.imgContainerRef}
        className="img-container"
        style={{
          width: this.props.imgSrc.length * this.props.imgWidth,
          height: this.props.imgHeight
          //   marginLeft: -this.props.current * this.props.imgWidth
        }}
      >
        {imgs}
      </div>
    );
  }
}
