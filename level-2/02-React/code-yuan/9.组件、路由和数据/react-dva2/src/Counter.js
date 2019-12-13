import React, { useRef } from "react";
import { connect } from "dva";
import { Route } from "dva/router";

// function Test(props) {
//   console.log(props);
//   return <h1>Test</h1>;
// }

// function TestHome() {
//   return <h1>testHome</h1>
// }

function Counter(props) {
  const numRef = useRef();
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncIncrease}>异步加</button>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onAsyncDecrease}>异步减</button>
      </p>
      <p>
        <input type="number" ref={numRef} />
        <button
          onClick={() => {
            const n = parseInt(numRef.current.value);
            props.onAdd(n);
          }}
        >
          加上
        </button>
      </p>
      {/* <div>
        <Route exact={true} path="/counter" component={TestHome}></Route>
        <Route exact={true} path="/counter/test" component={Test}></Route>
      </div> */}
    </div>
  );
}

let mapStateToProps = state => ({
  number: state.counter
});

let mapDispatchToProps = dispatch => ({
  onAsyncIncrease: () => {
    dispatch({
      type: "counter/asyncIncrease"
    });
  },
  onIncrease: () => {
    dispatch({
      type: "counter/increase"
    });
  },
  onDecrease: () => {
    dispatch({
      type: "counter/decrease"
    });
  },
  onAsyncDecrease: () => {
    dispatch({
      type: "counter/asyncDecrease"
    });
  },
  onAdd: num => {
    dispatch({
      type: "counter/add",
      payload: num
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
