import React from "react";
import Photos from "./Photos";

const ActiveAlbum = () => {
  return (
    <div className="card">
      <div className="card-body">
        <ul className="list-group d-flex flex-row flex-wrap justify-content-between">
          <Photos />
        </ul>
      </div>
    </div>
  );
};

export default ActiveAlbum;
