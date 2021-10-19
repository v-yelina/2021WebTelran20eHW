import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const OfferPage = () => {
  const { offerId } = useParams();
  const chosenOffer = useSelector((state) =>
    state.offers.find((offer) => offer.id === +offerId)
  );
  return chosenOffer !== undefined ? (
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
        <ul className="services">
          <li className={chosenOffer.mealService ? "checked" : "unchecked"}>
            Meal Service
          </li>
          <li className={chosenOffer.assistance ? "checked" : "unchecked"}>
            Assistance
          </li>
          <li className={chosenOffer.routeInfo ? "checked" : "unchecked"}>
            Route Info
          </li>
        </ul>
        <p className="offerFullDescription">{chosenOffer.fulldescription}</p>
      </div>
    </div>
  ) : (
    <h4>Offer not found</h4>
  );
};

export default OfferPage;
