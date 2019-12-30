import React from "react";
import {connect} from 'dva'

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <p>
          <button onClick={onIncrease}>加</button>
          <button onClick={onDecrease}>减</button>
      </p>
    </div>
  );
}


function mapStateToProps(state) {
    return {
        number: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrease() {
            console.log('increase');
            dispatch({type: 'counter/increase'});
        },
        onDecrease() {
            console.log('decrease');
            dispatch({type:'counter/decrease'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
