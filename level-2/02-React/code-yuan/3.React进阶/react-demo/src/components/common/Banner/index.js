import React, { PureComponent } from "react";
import "./index.css";
import PropTypes from "prop-types";
import ImageContainer from "./ImageContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDot from "./SwitchDot";

export default class Banner extends PureComponent {
  static defaultProps = {
    width: 520,
    height: 280,
    imgSrc: [],
    duration: 500
  };

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    imgSrc: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number
  };

  state = {
    current: 0
  };

  imgRef = React.createRef();

  handleChange = direction => {
    let cur = this.state.current;
    if (direction === "left") {
      cur--;
      if (cur < 0) {
        cur = this.props.imgSrc.length - 1;
      }
    } else if (direction === "right") {
      cur++;
      if (cur > this.props.imgSrc.length - 1) {
        cur = 0;
      }
    }
    this.handleSwitch(cur);
  };

  handleSwitch = index => {
    this.imgRef.current.switchTo(index);
    this.setState({
      current: index
    });
  };

  render() {
    return (
      <div
        className="banner-container"
        style={{
          width: this.props.width,
          height: this.props.height
        }}
      >
        <ImageContainer
          ref={this.imgRef}
          imgSrc={this.props.imgSrc}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          duration={this.props.duration}
          //   current={this.state.current}
        />
        <SwitchArrow onChange={this.handleChange} />
        <SwitchDot
          total={this.props.imgSrc.length}
          current={this.state.current}
          onChange={this.handleSwitch}
        />
      </div>
    );
  }
}
