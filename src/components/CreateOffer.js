import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContextProvider";

const CreateOffer = () => {
  const { inputs, onHandleChange, onCheckboxChangeHandler, onAddOffer } =
    useContext(GlobalContext);

  return (
    <div className="createPage">
      <form onSubmit={onAddOffer}>
        <h2>Create a new offer</h2>
        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={onHandleChange}
          placeholder="Enter a title of the offer"
        />
        <input
          type="text"
          name="price"
          value={inputs.price}
          onChange={onHandleChange}
          placeholder="Enter a price of the offer"
        />
        <input
          type="text"
          name="description"
          value={inputs.description}
          onChange={onHandleChange}
          placeholder="Enter a short description of the offer"
        />
        <textarea
          name="fulldescription"
          value={inputs.fulldescription}
          onChange={onHandleChange}
          placeholder="Enter a full description of the offer"
        />
        <input
          type="text"
          name="imgUrl"
          value={inputs.imgUrl}
          onChange={onHandleChange}
          placeholder="URL of offer image"
        />
        <div className="checkbox">
          <label htmlFor="mealService">Meal Service</label>
          <input
            type="checkbox"
            name="mealService"
            id="mealService"
            value={inputs.mealService}
            onChange={onCheckboxChangeHandler}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="assistance">Assistance</label>
          <input
            type="checkbox"
            name="assistance"
            id="assistance"
            value={inputs.assistance}
            onChange={onCheckboxChangeHandler}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="routeInfo">Route Info</label>
          <input
            type="checkbox"
            name="routeInfo"
            id="routeInfo"
            value={inputs.routeInfo}
            onChange={onCheckboxChangeHandler}
          />
        </div>
        <input type="submit" className="button" value="Create" />
      </form>
    </div>
  );
};

export default CreateOffer;
