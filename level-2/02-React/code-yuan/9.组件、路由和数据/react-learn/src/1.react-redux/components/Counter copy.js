import React, { PureComponent } from "react";
import store from '../store'
import {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease
} from "../store/action/counter";

function Counter(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncDecrease}> 异步减 </button>
        <button onClick={props.onDecrease}> 减 </button>
        <button onClick={props.onIncrease}> 加 </button>
        <button onClick={props.onAsyncIncrease}> 异步加 </button>
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
      number: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAsyncIncrease() {
      dispatch(asyncIncrease());
    },
    onAsyncDecrease() {
      dispatch(asyncDecrease());
    },
    onIncrease() {
      dispatch(increase());
    },
    onDecrease() {
      dispatch(decrease());
    }
  };
}

export default class CounterContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = mapStateToProps(store.getState());
        store.subscribe(() => {
            this.setState(mapStateToProps(store.getState()));
        });
    }

  render() {
    const eventHandlers = mapDispatchToProps(store.dispatch);
    return <Counter {...this.state} {...eventHandlers} />;
  }
}
