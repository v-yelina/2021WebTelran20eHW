import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContextProvider";

const Photos = () => {
  const { getPhotosByAlbumId } = useContext(GlobalContext);

  return !getPhotosByAlbumId().length ? (
    <li className="list-group-item">No Photos</li>
  ) : (
    getPhotosByAlbumId().map((photo) => (
      <li className="list-group-item p-1 m-2 w-25" key={photo.id}>
        <div>
          <img src={photo.url} className="img-thumbnail" />
        </div>
        <h6 className="text-center mt-2">{photo.title}</h6>
      </li>
    ))
  );
};

export default Photos;
