import React from "react";
import { useSelector } from "react-redux";

const OfferPage = () => {
  const chosenOffer = useSelector((state) => state.chosenOffer[0]);
  return (
    <div className="offerPage">
      <div className="image">
        <img src={chosenOffer.imgUrl} alt="Page Background" />
      </div>
      <div className="offerData">
        <h2 className="offerTitle">{chosenOffer.title}</h2>
        <p className="offerDescription">{chosenOffer.description}</p>
        <p className="offerPrice">
          <span>Price: &nbsp;</span>
          {chosenOffer.price}
        </p>
        <p className="offerFullDescription">{chosenOffer.fulldescription}</p>
      </div>
    </div>
  );
};

export default OfferPage;
