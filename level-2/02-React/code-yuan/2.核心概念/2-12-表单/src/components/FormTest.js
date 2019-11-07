import React, { Component } from "react";

export default class FormTest extends Component {
  state = {
    loginId: "",
    loginPwd: "",
    sex: "male",
    chooseLoves: [],
    loves: [
      { value: "football", text: "足球" },
      { value: "basketball", text: "篮球" },
      { value: "movie", text: "电影" },
      { value: "music", text: "音乐" },
      { value: "other", text: "其他" }
    ],
    city: "beijing"
  };

  handleChange = e => {
    let val = e.target.value;
    const name = e.target.name;
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        val = [...this.state.chooseLoves, val];
      } else {
        val = this.state.chooseLoves.filter(love => love !== val);
      }
    }
    this.setState({
      [name]: val
    });

    // const temp = {};
    // temp[name] = value;
    // this.setState(temp);
  };

  getCHeckBoxes() {
    return this.state.loves.map(love => (
      <label key={love.value}>
        <input
          type="checkbox"
          name="chooseLoves"
          value={love.value}
          checked={this.state.chooseLoves.includes(love.value)}
          onChange={this.handleChange}
        />
        {love.text}
      </label>
    ));
  }

  render() {
    const checkboxes = this.getCHeckBoxes();
    return (
      <div>
        <p>
          用户名：
          <input
            type="text"
            name="loginId"
            value={this.state.loginId}
            onChange={this.handleChange}
          />
        </p>
        <p>
          密码:
          <input
            type="text"
            name="loginPwd"
            value={this.state.loginPwd}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="radio"
            name="sex"
            value="male"
            checked={this.state.sex === "male"}
            onChange={this.handleChange}
          />
          男
          <input
            type="radio"
            name="sex"
            value="female"
            checked={this.state.sex === "female"}
            onChange={this.handleChange}
          />
          女
        </p>
        <p>{checkboxes}</p>
        <p>
          <select
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          >
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="chengdu">成都</option>
          </select>
        </p>

        <p>
          <button
            onClick={() => {
              console.log(this.state);
            }}
          >
            获取用户数据
          </button>
        </p>
      </div>
    );
  }
}
