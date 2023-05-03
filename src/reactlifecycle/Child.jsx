import React, { Component, PureComponent } from "react";

/* 
PureComponent là 1 class tương tự Component tuy nhiên sẽ không có lifecycle shouldComponentUpdate.
Tuy nhiên thay vào đó thì PureComponent sẽ tự nhận biết khi  props có  thay đổi thì sẽ render còn không thay đổi thì không render
P/S: sự so sánh props có thay đổi hay không thì chỉ là shallow compare ( so sánh được những giá trị nguyên thủy như primitive values: string,number,boolean,number,undefined,null)
*/

export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log("constructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }
  //   shouldComponentUpdate(newProps, newState) {
  //     console.log("this.props.like", this.props.like);
  //     console.log("newProps.like", newProps.like);
  //     if(newProps.like !== this.props.like) {
  //         return true;
  //     }
  //     return false;
  //   }

  render() {
    let { obLike } = this.props;
    console.log("child + 20 component con");
    return (
      <div className="bg-dark text-white mx-2 p-3 display-4">
        Child: render
        <br />
        <h3>20 component con</h3>
        <br />
        {obLike.like}{" "}
        <i
          className="fa fa-heart text-white display-4"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount child");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate child");
  }
}
