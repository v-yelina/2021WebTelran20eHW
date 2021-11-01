import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderDetails from "./OrderDetails";

const Admin = () => {
  const carts = useSelector((state) => state.carts);
  const [activeCartID, setActiveCartID] = useState(null);

  const renderCarts = () => {
    if (!carts.length) return;
    return carts.map((cart) => {
      const orderDate = new Date(cart.date);
      return (
        <>
          <li onClick={() => setActiveCartID(cart.id)} key={cart.id}>
            Order #{cart.id} from {orderDate.getDate()}/
            {orderDate.getMonth() + 1}/{orderDate.getFullYear()} at 0
            {orderDate.getHours()}:0{orderDate.getMinutes()}
          </li>
          {renderOrder(cart)}
        </>
      );
    });
  };

  const renderOrder = (cart) => {
    if (cart.id !== activeCartID) return;
    return <OrderDetails cart={cart} />;
  };

  return (
    <main className="adminPage">
      <h1>Information about orders</h1>
      <ul>{renderCarts()}</ul>
    </main>
  );
};

export default Admin;
