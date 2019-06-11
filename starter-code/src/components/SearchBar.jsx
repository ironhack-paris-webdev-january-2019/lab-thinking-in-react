import React, { Component } from "react";

class SearchBar extends Component {
  onSearchBarChange = terms => {
    this.props.handleSearchBarChange(terms.target.value);
  };

  handleChange = event => {
    this.props.onCheckBoxStock(event.target.checked);
    console.log("event checkbox", event.target.checked);
    // e.target.value = true;
    // const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // this.props.inStock(value);
  };

  // onCheckBoxStock = event => {
  //   this.props.onCheckBoxStock(event.target.checked);
  //   console.log("event checkbox", event.target.checked);
  // };

  render() {
    const searchText = this.props.searchText;
    return (
      <React.Fragment>
        <input
          className="input"
          type="text"
          value={searchText}
          onChange={terms => this.onSearchBarChange(terms)}
          placeholder="Text input"
        />

        <label className="checkbox">
          <input
            type="checkbox"
            name="inStock"
            checked={this.props.inStock}
            onChange={e => this.handleChange(e)}
          />
          Only show products in stock
        </label>
      </React.Fragment>
    );
  }
}

export default SearchBar;
