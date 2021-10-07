import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

const GlobalContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
    fetchPosts();
    fetchComments();
    fetchAlbums();
    fetchPhotos();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(await response.json());
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(await response.json());
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(await response.json());
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(await response.json());
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchAlbums = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setAlbums(await response.json());
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(await response.json());
    } catch (e) {
      console.log(e.message);
    }
  };

  const getTodosByUserId = () =>
    todos.filter((t) => t.userId === activeUser.id);
  const getPostsByUserId = () =>
    posts.filter((t) => t.userId === activeUser.id);
  const getAlbumsByUserId = () =>
    albums.filter((t) => t.userId === activeUser.id);
  const getCommentsByPostId = () =>
    comments.filter((c) => c.postId === activePost.id);

  const getPhotosByAlbumId = () =>
    photos.filter((c) => c.albumId === activeAlbum.id);

  const changeActiveUser = (userId) => {
    const idx = users.findIndex((user) => user.id === userId);
    if (idx === -1) return;
    setActiveUser(users[idx]);
  };

  const changeActivePost = (postId) => {
    const idx = posts.findIndex((post) => post.id === postId);
    if (idx === -1) return;
    setActivePost(posts[idx]);
  };

  const changeActiveAlbum = (albumId) => {
    const idx = albums.findIndex((album) => album.id === albumId);
    if (idx === -1) return;
    setActiveAlbum(albums[idx]);
  };

  const noActive = () => {
    setActivePost(null);
    setActiveAlbum(null);
  };

  return (
    <GlobalContext.Provider
      value={{
        users,
        activeUser,
        activePost,
        activeAlbum,
        changeActiveUser,
        getTodosByUserId,
        getPostsByUserId,
        getAlbumsByUserId,
        changeActiveAlbum,
        changeActivePost,
        getCommentsByPostId,
        getPhotosByAlbumId,
        noActive,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
