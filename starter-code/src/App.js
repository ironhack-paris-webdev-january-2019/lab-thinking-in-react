import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import productData from "./data.json";
import "bulma/css/bulma.css";
import SearchBar from "./components/SearchBar.jsx";
import ProductTable from "./components/ProductTable.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      productsList: productData.data,
      inStock: false
    };
  }

  searchBarProcessing(terms) {
    this.setState({ searchText: terms });
    console.log("search text", this.searchText);
  }

  handleInstock = val => {
    this.setState({ inStock: val });
    // console.log("In stock status", this.state.inStock);
  };

  render() {
    const productListToPass = this.state.productsList;
    const allCategories = this.state.productsList.map(e => e.category);
    const uniqueCategories = allCategories.filter((item, pos) => {
      return allCategories.indexOf(item) === pos;
    });
    console.log("uniqueCategories", { uniqueCategories });
    console.log("Product list", { productListToPass });
    const test = productListToPass
      .filter(p => p.category === "Electronics")
      .map(p => p.name);
    console.log("Electronics", test);

    return (
      <div className="App">
        <div className="container">
          <h1 className="title is-1">My application</h1>
          <SearchBar
            handleSearchBarChange={terms => this.searchBarProcessing(terms)}
            onCheckBoxStock={val => this.handleInstock(val)}
          />
          <ProductTable
            productsSearchText={this.state.searchText}
            uniqueCategories={uniqueCategories}
            productsListProductable={productListToPass}
            inStock={this.state.inStock}
          />
        </div>
      </div>
    );
  }
}

export default App;
