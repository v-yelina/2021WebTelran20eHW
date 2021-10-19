import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const GlobalContext = createContext();
const initialValue = {
  title: "",
  price: "",
  description: "",
  imgUrl: "",
  fulldescription: "",
};

const GlobalContextProvider = (props) => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers);
  const [inputs, setInputs] = useState(initialValue);

  const offersList = [
    {
      id: 1,
      title: "Luxury Yachts",
      price: 100,
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
      imgUrl:
        "https://images03.nicepage.com/c461c07a441a5d220e8feb1a/d02c30f780175e849eefdae0/deck-professional-sailboat-racing-yacht-during-competition-sunny-windy-summer-day-moving-fast-through-waves-water-with-spinnaker-up_346278-333.jpg",
      fulldescription:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum,Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendumGlavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendumGlavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
    },
    {
      id: 2,
      title: "Sailing Boats",
      price: 150,
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
      imgUrl:
        "https://images03.nicepage.com/c461c07a441a5d220e8feb1a/2759d98353df5f029965d605/happy-beautiful-adult-couple-sitting-side-yacht-watching-seaside-hugging-while-vacation-tan-might-fade-such-memories-you-share-with-one-you-love-l.jpg",
      fulldescription:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum,Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendumGlavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendumGlavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
    },
    {
      id: 3,
      title: "Boat Rentner",
      price: 200,
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
      imgUrl:
        "https://images03.nicepage.com/c461c07a441a5d220e8feb1a/88930d33cd7e5e66b911c0f6/woman-standing-nose-yacht-sunny-summer-day-breeze-developing-hair_231208-8349.jpg",
      fulldescription:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum,Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendumGlavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendumGlavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
    },
  ];

  useEffect(() => {
    dispatch({ type: "FETCH_OFFERS", payload: [...offersList] });
  }, []);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onAddOffer = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_OFFER",
      payload: {
        id: inputs.title,
        title: inputs.title,
        price: inputs.price,
        description: inputs.description,
        imgUrl: inputs.imgUrl,
        fulldescription: inputs.fulldescription,
      },
    });
    setInputs(initialValue);
  };

  const renderOffers = () => {
    return offers.map((offer) => (
      <div className="offerCard" key={offer.id}>
        <div className="cardImg">
          <img src={offer.imgUrl} alt="Offer" />
        </div>
        <div className="cardTitle">
          <h3>{offer.title}</h3>
        </div>
        <div className="cardDescr">
          <p>{offer.description}</p>
        </div>
        <NavLink to={"/offer/" + offer.id} className="button">
          Learn More
        </NavLink>
      </div>
    ));
  };

  return (
    <GlobalContext.Provider
      value={{
        offersList,
        inputs,
        onAddOffer,
        onHandleChange,
        renderOffers,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
