import React, { Component } from "react";
import { storeProducts } from "./data";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {}
  };

  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({
      products: tempProducts
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({
      detailProduct: product
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState({
      products: tempProducts,
      cart: [...this.state.cart, product]
    });
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState({
      modalOpen: true,
      modalProduct: product
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalProduct: {}
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
