const initialState = {
  offers: [],
  chosenOffer: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_OFFERS":
      return { ...state.offers, offers: action.payload };
    case "ADD_OFFER":
      return { ...state.offers, offers: [...state.offers, action.payload] };
    case "GET_CHOSEN_OFFER":
      return { ...state.chosenOffer, chosenOffer: action.payload };
    default:
      return state;
  }
};
