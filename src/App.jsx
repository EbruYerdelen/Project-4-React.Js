import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import MainSection from "./MainSection.jsx";
import Data from "./Data.jsx";

function App() {
  const destComponents = Data.map((data) => {
    return <MainSection key={data.id} data={data} />;
  });
  return (
    <div className="all-container">
      <Header />
      <div className="dest-container">{destComponents}</div>
    </div>
  );
}
export default App;
