import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContextProvider";
import ActiveAlbum from "./ActiveAlbum";

const Albums = () => {
  const { activeUser, getAlbumsByUserId, activeAlbum, changeActiveAlbum } =
    useContext(GlobalContext);
  return !activeUser || !getAlbumsByUserId().length ? (
    <li className="list-group-item">No records</li>
  ) : (
    getAlbumsByUserId().map((album) => (
      <li className="list-group-item list-group-item-light" key={album.id}>
        <h5
          style={{ cursor: "pointer" }}
          className={
            activeAlbum && activeAlbum.id === album.id
              ? "list-group-item list-group-item-success"
              : ""
          }
          onClick={() => {
            changeActiveAlbum(album.id);
          }}
        >
          {album.title}
        </h5>
        {activeAlbum && activeAlbum.id === album.id ? <ActiveAlbum /> : null}
      </li>
    ))
  );
};

export default Albums;
