import React, { Component } from "react";
import { connect } from "react-redux";
import { themSinhVien } from "../reducers/quanLySinhVienReducer";

class CreateForm extends Component {
  state = {
    values: {
      maSV: "",
      tenSV: "",
      sDT: "",
      email: "",
    },
    errors: {
      maSV: "(*)",
      tenSV: "(*)",
      sDT: "(*)",
      email: "(*)",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        alert("data is not valid!!");
        return;
      }
    }
    // const action = themSinhVien(this.state.values);
    // this.props.dispatch(action);
  };

  handleValidation = (e) => {
    const dataType = e.target.getAttribute("data-type");
    const minLength = e.target.getAttribute("data-minlength");
    const maxLength = e.target.getAttribute("data-maxlength");
    const { value, id } = e.target;

    let newErrors = { ...this.state.errors };
    let errorMessage = "";

    if (value.trim() === "") {
      errorMessage = id + " không được bỏ trống !!!";
    } else {
      if (dataType) {
        switch (dataType) {
          case "number": {
            let regexNumber = /^-?\d*\.?\d+$/;
            if (!regexNumber.test(value)) {
              errorMessage = id + " phải là số !!!";
            }
            break;
          }
          case "string": {
            let regexString = /^[a-z A-Z0-9]+$/;
            if (!regexString.test(value)) {
              errorMessage = id + " không được chứa dấu và ký tự đặc biệt!!!";
            }
            break;
          }
          case "email": {
            let regexEmail =
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regexEmail.test(value)) {
              errorMessage = id + " không hợp lệ !!!";
            }
            break;
          }
        }
      }
      if (minLength) {
        if (value.length < minLength) {
          errorMessage = id + " không được dưới " + minLength + " ký tự!!!";
        }
      }
      if (maxLength) {
        if (value.length > maxLength) {
          errorMessage = id + " không được hơn " + maxLength + " ký tự!!!";
        }
      }
      if (id === "maSV") {
        let { arrSV } = this.props;
        const maSVList = arrSV.map((sv) => sv.maSV);
        if (maSVList.includes(value)) {
          errorMessage = "Mã SV đã tồn tại!!!";
        }
      }
      if (id === "email") {
        let { arrSV } = this.props;
        const maSVList = arrSV.map((sv) => sv.email);
        if (maSVList.includes(value)) {
          errorMessage = "email đã tồn tại!!!";
        }
      }
    }

    newErrors[id] = errorMessage;

    this.setState({
      errors: newErrors,
    });
  };

  changeInput = (e) => {
    this.state.values[e.target.id] = e.target.value;
    // console.log(e.target.id,e.target.value)
    this.setState({
      values: this.state.values,
    });
    this.handleValidation(e);
  };
  render() {
    return (
      <div className="container">
        <div className="card" onSubmit={this.handleSubmit}>
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="form-group col-6">
                  <p>Mã sinh viên</p>
                  <input
                    data-type="number"
                    data-maxlength="32"
                    type="number"
                    name="maSV"
                    id="maSV"
                    className="form-control"
                    onInput={this.changeInput}
                  />
                  <span className="text-danger fw-bold">
                    {this.state.errors.maSV}
                  </span>
                </div>
                <div className="form-group col-6">
                  <p>Tên sinh viên</p>
                  <input
                    data-type="string"
                    type="text"
                    name="tenSV"
                    id="tenSV"
                    className="form-control"
                    onInput={this.changeInput}
                  />
                  <span className="text-danger fw-bold">
                    {this.state.errors.tenSV}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <p>Số điện thoại</p>
                  <input
                    data-type="number"
                    data-minlength="10"
                    data-maxlength="10"
                    type="number"
                    name="sDT"
                    id="sDT"
                    className="form-control"
                    onInput={this.changeInput}
                  />
                  <span className="text-danger fw-bold">
                    {" "}
                    {this.state.errors.sDT}
                  </span>
                </div>
                <div className="form-group col-6">
                  <p>Email</p>
                  <input
                    data-type="email"
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    onInput={this.changeInput}
                  />
                  <span className="text-danger fw-bold">
                    {" "}
                    {this.state.errors.email}
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => {
                const action = themSinhVien(this.state.values);
                this.props.dispatch(action);
              }}
            >
              Thêm Sinh Viên
            </button>
            <button className="btn btn-primary mx-2">Update</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSV: state.quanLySinhVienReducer.arrSV,
});

export default connect(mapStateToProps)(CreateForm);
