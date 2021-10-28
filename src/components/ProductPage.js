import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productID } = useParams();
  const product = useSelector((state) =>
    state.products.find((p) => p.id === +productID)
  );

  return !product ? (
    <h1>Product not found!</h1>
  ) : (
    <main className="productPage">
      <figure className="productPageImg">
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="productInfo">
        <div className="line"></div>
        <h1 className="productPageTitle">{product.title}</h1>
        <h4 className="productPageCategory">#{product.category}</h4>
        <span className="productPagePrice">{product.price}$</span>
        <p className="productPageDescription">{product.description}</p>
      </div>
    </main>
  );
};

export default Product;
