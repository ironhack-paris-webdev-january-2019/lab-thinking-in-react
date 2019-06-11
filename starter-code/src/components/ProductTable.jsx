import React, { Component } from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: this.props.inStock
    };
  }

  searchFilterProduct(product) {
    return product.name
      .toLowerCase()
      .includes(this.props.productsSearchText.toLowerCase());
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     inStock: nextProps.inStock
  //   });
  // }

  inStockArticles = product => {
    // return this.props.inStock === true ? product.stocked === true : null;
    // console.log("STARTING");
    if (this.state.inStock === true) {
      console.log("LOOOOOPPPP");
      return product => product.stocked === true;
    } else {
      return product;
    }
  };

  render() {
    // Building an array of objects which key is the category of product and the values is an array of the related category objects
    // let organizedObjects = [];
    // this.props.uniqueCategories.forEach(element => {
    //   let temp = this.props.productsListProductable.filter(
    //     p => p.category === element
    //   );
    //   organizedObjects.push({ [element]: temp });
    // });
    // console.log("Organized Objects 0", organizedObjects[0]);

    return (
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {this.props.uniqueCategories.map(cat => {
            return (
              <tr key={cat}>
                <ProductCategoryRow category={cat} />
                {this.props.productsListProductable
                  .filter(p => p.category === cat)
                  .filter(this.searchFilterProduct.bind(this))
                  // .filter(p => this.inStockArticles.bind(this))
                  // .filter(p => this.inStockArticles(p))
                  .map(p => {
                    if (this.props.inStock === true) {
                      if (p.stocked === true) {
                        return <ProductRow key={p.name} product={p} />;
                      }
                    } else {
                      return <ProductRow key={p.name} product={p} />;
                    }
                  })}
                {/* Autre méthode */}
                {/* {this.props.inStock ? (
                  <div>
                    <ProductCategoryRow category={cat} />
                    {this.props.productsListProductable
                      .filter(product => product.stocked === true)
                      .filter(this.searchFilterProduct.bind(this))
                      .filter(p => p.category === cat)
                      .map(p => {
                        return <ProductRow key={p.name} product={p} />;
                      })}
                  </div>
                ) : (
                  <div>
                    <ProductCategoryRow category={cat} />
                    {this.props.productsListProductable
                      .filter(this.searchFilterProduct.bind(this))
                      .filter(p => p.category === cat)
                      .map(p => {
                        return <ProductRow key={p.name} product={p} />;
                      })}
                  </div>
                )} */}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
