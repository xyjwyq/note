import React, { Component } from "react";
import Modal from "./Modal";

export default class ModalTest extends Component {
  state = {
    showModal: true
  };

  showModal = () => {
      this.setState({
          showModal: true
      });
  }

  hideModal = () => {
      this.setState({
          showModal: false
      });
  }

  render() {
    const modal = (
      <Modal onClose={this.hideModal}>
        <div
          style={{
            background: "#fff"
          }}
        >
          <h1>asdfasfasfasfasdfasdf</h1>
          <button onClick={this.hideModal}>关闭朦层</button>
        </div>
      </Modal>
    );

    return (
      <div>
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3159856553,1527464792&fm=27&gp=0.jpg"
          alt=""
        />
        {this.state.showModal ? modal : null}
        <button onClick={this.showModal}>显示朦层</button>
      </div>
    );
  }
}
