import React, { Component } from "react";

export default class Create extends Component {
  state = {
    values: {
      idProduct: "",
      name: "",
      price: "",
      img: "",
      type: "phone",
      desc: "",
    },
    errors: {
      idProduct: "(*)",
      name: "(*)",
      price: "(*)",
      img: "(*)",
      desc: "(*)",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // kiểm tra xem this.state.values có hợp lệ hay không ms render ra
    // duyệt xem this.state.errors
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        alert("data is not valid!!");
        return;
      }
    }
    // call api
    let { arrForm } = this.props;
    arrForm(this.state.values);
  };
  handleChange = (event) => {
    let { value, id } = event.target;
    // xử lý this.state.values trước
    let newValues = { ...this.state.values };
    newValues[id] = value;
    // xử lý tiếp thằng errors
    let newErrors = { ...this.state.errors };
    let mesErrors = "";
    let dataType = event.target.getAttribute("data-type");
    let minLength = event.target.getAttribute("data-minlength");
    let maxLength = event.target.getAttribute("data-maxlength");
    if (value.trim() === "") {
      mesErrors = id + " không được bỏ trống!!!";
    } else {
      if (dataType) {
        switch (dataType) {
          case "number": {
            let regexNumber = /^-?\d*\.?\d+$/;
            if (!regexNumber.test(value)) {
              mesErrors = id + " phải là số!!!";
            }
            break;
          }
          case "string": {
            let regexString = /^[a-z A-Z0-9]+$/;
            if (!regexString.test(value)) {
              mesErrors = id + " phải là ký tự!!!";
            }
            break;
          }
        }
      }
      if (minLength) {
        if (value.length < minLength) {
          mesErrors = id + " không được dưới " + minLength + " ký tự ";
        }
      }
      if (maxLength) {
        if (value.length > maxLength) {
          mesErrors = id + " không được hơn " + maxLength + " ký tự ";
        }
      }
    }
    newErrors[id] = mesErrors;

    // cập nhật lại state cho values và errors sau khi xử lý
    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };
  render() {
    let { idProduct, name, price, type, img, desc } = this.props.formEdit;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">Product Info</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Id</p>
                <input
                  data-type="number"
                  data-maxlength="20"
                  type="number"
                  name="id"
                  id="idProduct"
                  className="form-control"
                  onInput={this.handleChange}
                  value={idProduct}
                />
                <span className="text-danger fw-bold">
                  {this.state.errors.idProduct}
                </span>
              </div>
              <div className="form-group">
                <p>Name</p>
                <input
                  data-type="string"
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  onInput={this.handleChange}
                  value={name}
                />
                <span className="text-danger fw-bold">
                  {this.state.errors.name}
                </span>
              </div>
              <div className="form-group">
                <p>Price</p>
                <input
                  data-type="number"
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                  onInput={this.handleChange}
                  value={price}
                />
                <span className="text-danger fw-bold">
                  {this.state.errors.price}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Img</p>
                <input
                  type="text"
                  name="img"
                  id="img"
                  className="form-control"
                  onInput={this.handleChange}
                  value={img}
                />
                <span className="text-danger fw-bold">
                  {this.state.errors.img}
                </span>
              </div>
              <div className="form-group">
                <p>Type</p>
                <select
                  className="form-control"
                  name="type"
                  id="type"
                  value={type}
                >
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                </select>
              </div>
              <div className="form-group">
                <p>Desc</p>
                <input
                  data-type="string"
                  data-minlength="6"
                  data-maxlength="32"
                  type="text"
                  name="desc"
                  id="desc"
                  className="form-control"
                  onInput={this.handleChange}
                  value={desc}
                />
                <span className="text-danger fw-bold">
                  {this.state.errors.desc}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2" type="submit">
            Create
          </button>
        </div>
      </form>
    );
  }
}
