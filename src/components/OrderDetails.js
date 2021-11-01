import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderDetails = ({ cart }) => {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === cart.userId);

  const getProductByID = (productID) => {
    return products.find((p) => p.id === productID);
  };

  const productMagic = () => {
    return cart.products.map((p) => ({
      ...getProductByID(p.productId),
      quantity: p.quantity,
    }));
  };

  const [cartProducts, setCartProducts] = useState(() => productMagic());

  const renderProducts = () => {
    console.log(cartProducts);
    if (!cartProducts.length) return;
    return cartProducts.map((product) => (
      <tr key="product.id">
        <td>{product["title"]}</td>
        <td>{product["quantity"]}</td>
        <td>{product["quantity"] * product["price"]}</td>
      </tr>
    ));
  };

  const totalSum = () => {
    return cartProducts.reduce((amount, product) => {
      return amount + product.price * product.quantity;
    }, 0);
  };

  return (
    <article className="orderInfo">
      <div className="userInfo">
        <p className="userName">
          <span>User Name: </span>
          {user.name["firstname"] + " " + user.name["lastname"]}
        </p>
        <p className="userAdress">
          <span>Adress: </span>
          {user.address["zipcode"] +
            " " +
            user.address["city"] +
            ", " +
            user.address["street"] +
            " " +
            user.address["number"]}
        </p>
        <p className="userEmail">
          <span>Email: </span> {user.email}
        </p>
        <p className="userPhone">
          <span>Phone: </span> {user.phone}
        </p>
      </div>
      <table className="orderProducts">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderProducts()}</tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Total amount:</td>
            <td>{totalSum()}$</td>
          </tr>
        </tfoot>
      </table>
    </article>
  );
};

export default OrderDetails;
