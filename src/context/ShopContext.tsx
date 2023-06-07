//@ts-nocheck
import * as React from 'react';
import Client from 'shopify-buy';
import BlogPosts from '../db/BlogPosts';
import { Product } from '../models/API';
import { encodeQuery, sortByPrice, sortBySelection } from '../utils/helpers';
export const ShopContext = React.createContext({});

export const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

console.log(
  process.env.REACT_APP_SHOPIFY_DOMAIN,
  process.env.REACT_APP_SHOPIFY_API
);

export class ShopProvider extends React.Component {
  state = {
    product: {},
    products: [],
    totalProducts: 0,
    hasMoreProducts: true,
    blogPosts: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
    isLoading: false
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

  sortProducts = (sortType: string, isBeautyTool = false) => {
    sortType = encodeQuery(sortType);

    if (sortType.includes('price')) {
      if (sortType.includes('low')) {
        this.setState({ producted: sortByPrice(this.state.products) });
      } else {
        this.setState({ producted: sortByPrice(this.state.products, false) });
      }
    } else {
      client.collection.fetchByHandle(sortType).then((collection) => {
        if (collection.handle === 'newest') {
          collection.products.forEach((product: Product) => {
            product.isNew = true;
          });
        }
        const sortedProducts = sortBySelection(
          collection.products,
          this.state.products
        );
        this.setState({
          products: sortedProducts
        });
      });
    }
  };

  addItemToCheckout = async (variantId, quantity) => {
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      {
        variantId,
        quantity: +quantity
      }
    );
    this.setState({ itemsInCart: this.state.itemsInCart + +quantity });
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
    client.product.fetchAll(6).then((products) => {
      this.setState({ products });
      this.setState({ isLoading: false });
    });
    client.product.fetchAll(250).then((products) => {
      this.setState({ totalProducts: products.length });
    });
  };

  fetchNextPage = () => {
    if (this.state.hasMoreProducts) {
      this.setState({ isLoading: true });
      client.fetchNextPage(this.state.products).then((nextProducts) => {
        this.setState({
          products: [...this.state.products, ...nextProducts.model]
        });
        this.setState({ isLoading: false });
      });
    }
  };

  fetchProductsBySearch = (searchInput: string) => {
    this.setState({ isLoading: true });
    client.product.fetchQuery(searchInput).then((products) => {
      this.setState({ products });
      this.setState({ isLoading: false });
    });
  };

  fetchCollectionByHandle = (handle: string) => {
    this.setState({ isLoading: true });
    console.log(handle);
    client.collection.fetchByHandle(handle).then((collection) => {
      console.log(client);
      console.log(collection);
      this.setState({
        products: collection.products
      });
      this.setState({ isLoading: false });
    });
  };

  fetchProductByHandle = (handle) => {
    client.product.fetchByHandle(handle).then((product) => {
      this.setState({ product });
    });
  };

  resetProduct = () => {
    this.setState({ product: {} });
  };

  getBlogPostsByCategory = (category: string) => {
    if (category === 'all') {
      return this.setState({ blogPosts: BlogPosts });
    }
    const bp = BlogPosts.filter((post) => post.category == category);
    this.setState({ blogPosts: bp });
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
          fetchCollectionByHandle: this.fetchCollectionByHandle,
          fetchNextPage: this.fetchNextPage,
          fetchProductByHandle: this.fetchProductByHandle,
          resetProduct: this.resetProduct,
          fetchProductsBySearch: this.fetchProductsBySearch,
          getBlogPostsByCategory: this.getBlogPostsByCategory,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          openCart: this.openCart,
          closeCart: this.closeCart,
          openMenu: this.openMenu,
          closeMenu: this.closeMenu,
          sortProducts: this.sortProducts
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export const ShopConsumer = ShopContext.Consumer;

export default ShopProvider;
