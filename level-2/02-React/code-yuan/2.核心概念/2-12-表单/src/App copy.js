import React, { Component } from "react";
import NumberInput from "./components/NumberInput";

export default class App extends Component {
  state = {
    val: "123",
    loves: ["篮球", "足球", "乒乓球", "科比", "库里"],
    chooseLoves: ["篮球", "库里"],
    selVal: 'beijing'
  };

  render() {
    // const checkboxes = this.state.loves.map(item => (
    //   <label key={item}>
    //     <input 
    //       type="checkbox"
    //       checked={this.state.chooseLoves.includes(item)}
    //       onChange={e => {
    //         if(!e.target.checked) {
    //           this.setState({
    //             chooseLoves: this.state.chooseLoves.filter(love => love != item)
    //           });
    //         } else {
    //           this.setState({
    //             chooseLoves: [...this.state.chooseLoves, item]
    //           });
    //         }
    //       }}
    //     />
    //     {item}
    //   </label>
    // ));

    return (
      <div>
        {/* <input type="text" value={this.state.val} onChange={e => {
            const val = e.target.value;
            this.setState({
                val
            });
        }} />

        <button onClick={() => {
            console.log(this.state.val);
        }}>获取输入值</button> */}

        {/* <NumberInput/> */}

        {/* {checkboxes}

        <button onClick={() => {
          console.log(this.state.chooseLoves);
        }}>获取checkbox选中数据</button> */}

        <select value={this.state.selVal} onChange={e => {
          const selVal = e.target.value
          this.setState({
            selVal
          });
        }}>
          <option value="beijing">北京</option>
          <option value="xian">西安</option>
          <option value="changsha">长沙</option>
        </select>
      </div>
    );
  }
}
