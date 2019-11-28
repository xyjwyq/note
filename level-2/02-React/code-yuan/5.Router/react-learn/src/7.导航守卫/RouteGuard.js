import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

let prevLocation, location, action, unBlock;

class _GuardHelper extends Component {
  componentDidMount() {
    unBlock = this.props.history.block((newLocation, ac) => {
      prevLocation = this.props.location;
      location = newLocation;
      action = ac;
      return "";
    });

    this.unListen = this.props.history.listen((location, action) => {
      if (this.props.onChange) {
        const prevLocation = this.props.location;
        this.props.onChange(prevLocation, location, action, this.unListen);
      }
    });
  }

  componentWillUnmount() {
    unBlock();
    this.unListen();
  }

  render() {
    return null;
  }
}

const GuardHelper = withRouter(_GuardHelper);

export default class RouteGuard extends Component {
  static propTypes = {
    onBeforeChange: PropTypes.func,
    onChange: PropTypes.func
  };

  componentDidMount() {
    // this.unListen = this.props.history.listen((location, action) => {
    //   console.log(location);
    //   console.log(action);
    // });
    // this.unBlock = this.props.history.block("确定跳转");
  }

  componentWillUnmount() {
    // this.unListen();
    // this.unBlock();
  }

  handleConfirm = (msg, callback) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLocation,
        location,
        action,
        callback,
        unBlock
      );
    }else {
      callback(true);
    }
  };

  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GuardHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    );
  }
  // render() {
  //   return <div>{this.props.children}</div>;
  // }
}
