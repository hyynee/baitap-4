import React, { Component } from "react";
import Child from "./Child";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 500,
      obLike: {
        like: 1,
      },
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        Component life cycle
        <h3>number: {this.state.number}</h3>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <Child obLike={this.state.obLike}></Child>
        <i
          className="fa fa-heart text-danger display-4"
          style={{ cursor: "pointer" }}
          onClick={() => {
            let newObLike = this.state.obLike;
            newObLike.like += 1;
            this.setState({
              obLike: { ...newObLike },
            });
          }}
        ></i>
      </div>
    );
  }
  timeout = {};
  componentDidMount() {
    this.timeout = setInterval(() => {
      console.log("sever response");
    }, 1000);
    // cal api
    console.log(" componentDidMount parent chỉ chạy 1 lần sau render");
  }
  componentDidUpdate(prevProps, prevState) {
    // tuyệt đối không setState khi không có điều kiện
    console.log(
      "componentDidUpdate chạy sau render mỗi lần state hoặc props thay đổi "
    );
  }
  componentDidCatch(error, errorInfo) {
    // bắt bug
    console.log(error, errorInfo);
  }
  componentWillUnmount() {
    // clear đi các hàm chạy ngầm của component trước khi component mất khỏi giao diện
    clearInterval(this.timeout);
  }
}
