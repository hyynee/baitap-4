import React, { Component } from "react";

export default class Cart extends Component {
  renderCart = () => {
    const { arrCart, delItem, countNumber } = this.props;
    return arrCart.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} alt="" width={50} />
          </td>
          <td>{item.price}</td>
          <td>
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                countNumber(item.id, 1);
              }}
            >
              +
            </button>
            {item.soLuong}
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                countNumber(item.id, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{item.price * item.soLuong}</td>
          <td>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                delItem(item.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total money</th>
          </tr>
        </thead>
        <tbody>{this.renderCart()}</tbody>
      </table>
    );
  }
}
