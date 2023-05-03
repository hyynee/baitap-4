import React, { Component } from "react";

export default class CreateForm extends Component {
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
    let { addSV } = this.props;
    addSV(this.state.values);
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
        let { arrForm } = this.props;
        const maSVList = arrForm.map((sv) => sv.maSV);
        if (maSVList.includes(value)) {
          errorMessage = "Mã SV đã tồn tại!!!";
        }
      }
      if (id === "email") {
        let { arrForm } = this.props;
        const maSVList = arrForm.map((sv) => sv.email);
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

  // can thiệp trước khi props mới truyền vào và render ra giao diện thì đem props gắn vào state
  handleInput = (e) => {
    this.state.values[e.target.id] = e.target.value;
    this.setState({
      values: this.state.values,
    });
    this.handleValidation(e);
  };
  static getDerivedStateFromProps(newProps, currentState) {
    if (newProps.formEdit.maSV !== currentState.values.maSV) {
      currentState.values = newProps.formEdit; // lấy được địa chỉ
      return currentState;
    }
    return null;
  }

  /* chỉ chạy khi props thay đổi và trước khi render(thường dùng cho việc gán props vào state) */

  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     values: newProps.formEdit,
  //   });
  // }

  render() {
    // console.log("%c render", "color: aqua");
    let { maSV, tenSV, sDT, email } = this.state.values;
    let { updateSV } = this.props;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <nav className="navbar bg-body-tertiary card-header">
          <div className="container-fluid">
            <a className="navbar-brand">INFO</a>
            <div className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success">Search</button>
            </div>
          </div>
        </nav>

        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Mã SV</p>
                <input
                  data-type="number"
                  data-maxlength="32"
                  type="text"
                  name="maSV"
                  id="maSV"
                  className="form-control"
                  onInput={this.handleInput}
                  value={maSV}
                />
                <span className="text-danger fw-bold">
                  {this.state.errors.maSV}
                </span>
              </div>
              <div className="form-group">
                <p>Họ và tên</p>
                <input
                  data-type="string"
                  type="text"
                  name="tenSV"
                  id="tenSV"
                  className="form-control"
                  onInput={this.handleInput}
                  value={tenSV}
                />
                <span className="text-danger fw-bold">
                  {this.state.errors.tenSV}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  data-type="number"
                  data-minlength="10"
                  data-maxlength="10"
                  type="number"
                  name="sDT"
                  id="sDT"
                  className="form-control"
                  onInput={this.handleInput}
                  value={sDT}
                />
                <span className="text-danger fw-bold">
                  {" "}
                  {this.state.errors.sDT}
                </span>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  data-type="email"
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  onInput={this.handleInput}
                  value={email}
                />
                <span className="text-danger fw-bold">
                  {" "}
                  {this.state.errors.email}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mt-2" type="submit">
            Create
          </button>
          <button
            className="btn btn-warning mx-2 mt-2"
            type="button"
            onClick={() => {
              updateSV(this.state.values);
            }}
          >
            Update
          </button>
        </div>
      </form>
    );
  }

  // edit sau render
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("%c componentDidUpdate", "color:aqua");
  //   if (prevProps.formEdit.maSV !== this.props.formEdit.maSV) {
  //     this.setState({
  //       values: this.props.formEdit,
  //     });
  //   }
  // }
}
