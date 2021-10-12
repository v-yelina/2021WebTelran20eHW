import React, { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const students = [
    {
      id: 1,
      name: "Sam Smith",
      age: "16",
      city: "London",
      photoUrl:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png",
    },
    {
      id: 2,
      name: "John Cave",
      age: "17",
      city: "Paris",
      photoUrl:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png",
    },
    {
      id: 3,
      name: "Ida Bart",
      age: "15",
      city: "Berlin",
      photoUrl:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png",
    },
    {
      id: 4,
      name: "Kris Vivil",
      age: "16",
      city: "Prag",
      photoUrl:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png",
    },
  ];

  const options = students.map((student) => ({
    id: student.id,
    value: student.name,
    label: student.name,
  }));

  return (
    <GlobalContext.Provider
      value={{
        students,
        options,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
