const initialState = {
  offers: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_OFFERS":
      return { ...state, offers: action.payload };
    case "ADD_OFFER":
      return { ...state, offers: [...state.offers, action.payload] };
    default:
      return state;
  }
};
