import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContextProvider";

const CreateOffer = () => {
  const { inputs, onHandleChange, onAddOffer } = useContext(GlobalContext);

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
        <input type="submit" className="button" value="Create" />
      </form>
    </div>
  );
};

export default CreateOffer;
