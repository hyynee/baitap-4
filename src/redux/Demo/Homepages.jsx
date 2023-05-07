import React, { Component } from "react";
import CreateForm from "./CreateForm";
import FormSV from "./FormSV";

export default class Homepages extends Component {
  render() {
    return (
      <div className="container">
        <h3> Bài tập FORM</h3>
        <CreateForm></CreateForm>
        <FormSV></FormSV>
      </div>
    );
  }
}
