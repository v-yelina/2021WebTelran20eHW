import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContextProvider";
import ActivePost from "./ActivePost";

const Posts = () => {
  const { activeUser, getPostsByUserId, activePost, changeActivePost } =
    useContext(GlobalContext);
  return !activeUser || !getPostsByUserId().length ? (
    <li className="list-group-item">No records</li>
  ) : (
    getPostsByUserId().map((post) => (
      <li className="list-group-item list-group-item-light" key={post.id}>
        <h5
          style={{ cursor: "pointer" }}
          className={
            activePost && activePost.id === post.id
              ? "list-group-item list-group-item-success"
              : ""
          }
          onClick={() => {
            changeActivePost(post.id);
          }}
        >
          {post.title}
        </h5>
        {activePost && activePost.id === post.id ? <ActivePost /> : null}
      </li>
    ))
  );
};

export default Posts;
