import React, { Component } from "react";
import { arrProduct } from "../data/data";
import Cart from "./Cart";
import ProductItem from "./ProductItem";
import ShowInfo from "./ShowInfo";
export default class ShoesStore extends Component {
  state = {
    shoesOb: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    shoesCart: [
      {
        id: 1,
        name: "Adidas Prophere",
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        price: 350,
        soLuong: 1,
      },
    ],
  };
  renderTable = () => {
    return arrProduct.map((item) => {
      return (
        <ProductItem
          shoes={item}
          xemCT={this.viewDetail}
          addToCart={this.addToCart}
        ></ProductItem>
      );
    });
  };
  viewDetail = (spClick) => {
    this.setState({
      shoesOb: spClick,
    });
    return;
  };
  addToCart = (spClick) => {
    spClick = { ...spClick, soLuong: 1 };
    let gioHang = this.state.shoesCart;
    let spGH = gioHang.find((item) => item.id === spClick.id);
    if (spGH) {
      spGH.soLuong += 1;
    } else {
      gioHang.push(spClick);
    }

    this.setState({
      shoesCart: gioHang,
    });
  };
  delItem = (id) => {
    console.log(id);
    let index = this.state.shoesCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.state.shoesCart.splice(index, 1);
    }
    this.setState({
      shoesCart: this.state.shoesCart,
    });
  };
  countNumber = (id, soLuong) => {
    let spGH = this.state.shoesCart.find((item) => item.id === id);
    if (spGH) {
      spGH.soLuong += soLuong;
      if (spGH.soLuong < 1) {
        if (window.confirm("Bạn có muốn xóa sản phẩm này không!!!")) {
          this.delItem(spGH.id);
          return;
        } else {
          spGH.soLuong -= soLuong;
        }
      }
    }
    this.setState({
      shoesCart: this.state.shoesCart,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">CART</h1>
        <Cart
          arrCart={this.state.shoesCart}
          delItem={this.delItem}
          countNumber={this.countNumber}
        ></Cart>
        <h1 className="text-center">List Shoes</h1>
        <div className="row">{this.renderTable()}</div>
        <ShowInfo spCT={this.state.shoesOb}></ShowInfo>
      </div>
    );
  }
}
