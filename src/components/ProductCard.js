import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <article className="productCard">
      <figure className="productImg">
        <img src={product.image} alt={product.title} />
      </figure>
      <Link to={`/product/${product.id}`} className="moreBtn">
        View More
      </Link>
      <span className="productPrice">{product.price}$</span>
      <h3 className="productTitle">{product.title}</h3>
    </article>
  );
};

export default ProductCard;
