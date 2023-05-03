import React, { Component } from "react";
import Create from "./Create";

export default class Form extends Component {
  state = {
    arrForm: [
      {
        idProduct: "01",
        name: "Iphone X",
        price: "20100000",
        type: "phone",
        img: "https://i.pravatar.cc?u=1",
        desc: "very good",
      },
      {
        idProduct: "02",
        name: "Iphone 13",
        price: "212300000",
        type: "phone",
        img: "https://i.pravatar.cc?u=3",
        desc: "very good",
      },
    ],
    formEdit: {
      idProduct: "",
      name: "",
      price: "",
      type: "",
      img: "",
      desc: "",
    },
  };
  arrForm = (formInfo) => {
    console.log(formInfo);
    this.state.arrForm.push(formInfo);
    // this.setState({})
    this.setState({
      arrForm: this.state.arrForm,
    });
  };
  delInfo = (idProductDel) => {
    console.log(idProductDel);
    let indexDel = this.state.arrForm.findIndex(
      (id) => id.idProduct === idProductDel
    );
    if (indexDel !== -1) {
      this.state.arrForm.splice(indexDel, 1);
    }
    this.setState({
      arrForm: this.state.arrForm,
    });
  };
  render() {
    return (
      <div className="container">
        <Create arrForm={this.arrForm} formEdit={this.state.formEdit}></Create>
        <table className="table mt-2">
          <thead className="bg-dark text-white fw-bold">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Img</th>
              <th>Price</th>
              <th>Type</th>
              <th>Desc</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrForm.map((info) => {
              return (
                <tr key={info.idProduct}>
                  <td>{info.idProduct}</td>
                  <td>{info.name}</td>
                  <td>{info.price}</td>
                  <td>
                    <img src={info.img} height={50} />
                  </td>
                  <td>{info.type}</td>
                  <td>{info.desc}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.delInfo(info.idProduct);
                      }}
                    >
                      Del
                    </button>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        this.setState({
                          formEdit: info,
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
