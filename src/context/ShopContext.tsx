//@ts-nocheck
import * as React from 'react';
import Client from 'shopify-buy';
export const ShopContext = React.createContext({});

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

export class ShopProvider extends React.Component {
  state = {
    product: {},
    products: [],
    totalProducts: 0,
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
    isLoading: false,
    hasMoreProducts: true
  };

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = () => {
    client.checkout.create().then((checkout) => {
      localStorage.setItem('checkout_id', checkout.id);
      this.setState({ checkout });
    });
  };

  fetchCheckout = (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => this.setState({ checkout }));
  };

  addItemToCheckout = async (variantId, quantity) => {
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      {
        variantId,
        quantity: +quantity
      }
    );
    this.setState({ checkout });
    this.openCart();
  };

  removeLineItem = async (lineItemIds) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIds
    );
    this.setState({ checkout });
  };

  fetchAllProducts = () => {
    this.setState({ isLoading: true });
    client.product.fetchAll(9).then((products) => {
      this.setState({ products });
      this.setState({ isLoading: false });
    });
    client.product.fetchAll(250).then((products) => {
      this.setState({ totalProducts: products.length });
    });
  };

  fetchNextPage = () => {
    if (this.state.totalProducts === this.state.products.length) {
      this.setState({ hasMoreProducts: false });
    }
    this.setState({ isLoading: true });
    client.fetchNextPage(this.state.products).then((nextProducts) => {
      this.setState({
        products: [...this.state.products, ...nextProducts.model]
      });
      this.setState({ isLoading: false });
    });
  };

  fetchProductByHandle = (handle) => {
    client.product.fetchByHandle(handle).then((product) => {
      this.setState({ product });
    });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchPrevPage: this.fetchPrevPage,
          fetchNextPage: this.fetchNextPage,
          fetchProductByHandle: this.fetchProductByHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          openCart: this.openCart,
          closeCart: this.closeCart,
          openMenu: this.openMenu,
          closeMenu: this.closeMenu
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export const ShopConsumer = ShopContext.Consumer;

export default ShopProvider;
