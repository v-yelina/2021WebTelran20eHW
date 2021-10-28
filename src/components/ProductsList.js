import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const renderCategories = () => {
    if (!categories.length) return;
    return categories.map((c) => (
      <li key={c} className="category">
        {c}
      </li>
    ));
  };

  const renderProducts = () => {
    if (!products.length) return;
    return products.map((p) => <ProductCard product={p} key={p.id} />);
  };

  return (
    <main>
      <ul className="categoriesList">{renderCategories()}</ul>
      <section className="productsList">{renderProducts()}</section>
    </main>
  );
};

export default ProductList;
