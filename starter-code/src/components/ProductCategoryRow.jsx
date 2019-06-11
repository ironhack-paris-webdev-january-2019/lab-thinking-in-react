import React, { Component } from "react";

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.category}</td>
          <td />
        </tr>
      </React.Fragment>
    );
  }
}

export default ProductCategoryRow;
