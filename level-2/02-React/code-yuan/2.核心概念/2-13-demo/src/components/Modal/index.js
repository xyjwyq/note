import React from "react";
import "./index.css";

export default function Modal(props) {
  const defaultProps = {
    bg: "rgba(0,0,0,.5)"
  };
  const data = Object.assign({}, defaultProps, props);

  return (
    <div
      className="modal"
      style={{
        backgroundColor: data.bg
      }}
      onClick={e => {
        if (e.target.className === 'modal') {
            props.onClose && props.onClose();
        }
      }}
    >
      <div className="modal-center">{props.children || "加载中……"}</div>
    </div>
  );
}
