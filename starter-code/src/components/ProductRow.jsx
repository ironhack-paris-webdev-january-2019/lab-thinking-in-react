import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLabel() {
    if (!this.props.product.stocked) {
      return "red-label";
    }
  }
  render() {
    return (
      <React.Fragment>
        <tr>
          <td className={this.handleLabel()}>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default ProductRow;
