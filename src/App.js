import React from "react";
import Header from "./components/header";
import { Picture } from "./components/picture";
import List from "./components/list";
import { Footer } from "./components/footer";

function App() {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Header />
      <Picture />
      <List />
      <Footer />
    </div>
  );
}

export default App;
