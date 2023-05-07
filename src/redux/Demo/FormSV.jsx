import React, { Component } from "react";
import { connect } from "react-redux";
import { delSinhVien } from "../reducers/quanLySinhVienReducer";

class FormSV extends Component {
  render() {
    // console.log(this.props); // ful aray
    console.log(this.props.svEdit) // rỗng
    return (
      <div className="container" style={{ paddingTop: 100 }}>
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
            {this.props.arrSV.map((prod) => {
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
                        const action = delSinhVien(prod.maSV);
                        this.props.dispatch(action);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        this.setState({
                          svEdit: prod,
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

const mapStateToProps = (state) => ({
  arrSV: state.quanLySinhVienReducer.arrSV,
  svEdit: state.quanLySinhVienReducer.svEdit,
});

export default connect(mapStateToProps)(FormSV);
