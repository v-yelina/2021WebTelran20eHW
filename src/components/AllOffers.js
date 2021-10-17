import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContextProvider";

const AllOffers = () => {
  const { renderOffers } = useContext(GlobalContext);
  return (
    <div className="allOffersPage">
      <div className="image">
        <img
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/9659b0a9d4e75d5f90323f2f/dfgrey-min.jpg"
          alt="Page Background"
        />
      </div>
      <div className="offersList">{renderOffers()}</div>
    </div>
  );
};

export default AllOffers;
