import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { shoes, xemCT, addToCart } = this.props;
    return (
      <div className="col-3 mt-4">
        <div className="card" key={shoes.id} style={{ minHeight: 490 }}>
          <div className="card-body">
            <img
              src={shoes.image}
              alt="..."
              style={{
                width: "100%",
              }}
            />
            <h3>{shoes.name}</h3>
            <h3>${shoes.price}</h3>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-dark text-white"
              onClick={() => {
                addToCart(shoes);
              }}
            >
              Add to cart
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                xemCT(shoes);
              }}
              data-bs-toggle="modal"
              data-bs-target="#modalId"
            >
              View detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
