"use client";
import axios from "axios";
import { useState } from "react";

const Main = () => {
  const [change, setChange] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyB6gqLu98zDMOeom6Mh5d6eameJfOYTMHI&cx=b0ebd37c3a2a44c83&q=${change}`
    );

    console.log(response.data.items[0]);
  };
  return (
    <div className="absolute min-h-screen grid grid-cols-1 place-content-center place-items-center w-full bg-transparent ">
      <h1 className="text-white">Este es el componente home</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder=" Search your new destination..."
            onChange={(e) => setChange(e.target.value)}
          />
          <button className="w-20 h-20 border-2 border-white text-white">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};
export default Main;
