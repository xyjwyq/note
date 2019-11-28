import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Prompt extends PureComponent {
  static propTypes = {
    when: PropTypes.bool,
    message: PropTypes.string
  };

  static defaultProps = {
    when: false,
    message: ""
  };

  componentDidMount() {
    this.handleBlock();
  }

  componentDidUpdate() {
    this.handleBlock();
  }

  componentWillUnmount() {
    this.unBlock && this.unBlock();
  }

  handleBlock = () => {

    if (this.props.when) {
      this.unBlock = this.props.history.block(this.props.message);
    } else {
      this.unBlock && this.unBlock();
    }
  };

  render() {
    return null;
  }
}

export default withRouter(Prompt);
