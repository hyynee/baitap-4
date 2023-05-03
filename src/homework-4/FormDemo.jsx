import React, { Component } from "react";
import CreateForm from "./CreateForm";

export default class FormDemo extends Component {
  state = {
    arrForm: [
      {
        maSV: "10",
        tenSV: "Nguyen Anh Huy",
        sDT: "0346674072",
        email: "nguyenanhhuy2004@gmail.com",
      },
      {
        maSV: "20",
        tenSV: "Tran Khanh Huyen",
        sDT: "0345870266",
        email: "trankhanhhuyen2003@gmail.com",
      },
      {
        maSV: "30",
        tenSV: "Bui Mai Huong",
        sDT: "0347825098",
        email: "buimaihuong@gmail.com",
      },
      {
        maSV: "40",
        tenSV: "Nguyen Thuy Trang",
        sDT: "0349078094",
        email: "nguyenthuytrang@gmail.com",
      },
    ],
    formEdit: {
      maSV: "",
      tenSV: "",
      sDT: "",
      email: "",
    },
  };
  addSV = (prodInfo) => {
    // console.log(prodInfo)
    this.state.arrForm.push(prodInfo);

    this.setState({
      addSV: this.state.arrForm,
    });
  };
  xoaSV = (maSVDel) => {
    let indexDel = this.state.arrForm.findIndex((id) => id.maSV === maSVDel);
    if (indexDel !== -1) {
      this.state.arrForm.splice(indexDel, 1);
    }
    this.setState({
      addSV: this.state.arrForm,
    });
  };
  updateSV = () => {
    // setState sau khi cập nhật
    this.setState({
      arrForm: this.state.arrForm,
    });
  };

  render() {
    return (
      <div className="container">
        <CreateForm
          arrForm={this.state.arrForm}
          addSV={this.addSV}
          updateSV={this.updateSV}
          formEdit={this.state.formEdit}
        ></CreateForm>
        <table className="table">
          <thead className="bg-dark text-white fw-bold">
            <tr>
              <th>Mã SV</th>
              <th>Họ và tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrForm.map((prod) => {
              return (
                <tr key={prod.maSV}>
                  <td>{prod.maSV}</td>
                  <td>{prod.tenSV}</td>
                  <td>{prod.sDT}</td>
                  <td>{prod.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.xoaSV(prod.maSV);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        this.setState({
                          formEdit: prod,
                        });
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
