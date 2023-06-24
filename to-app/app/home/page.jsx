"use client";

import axios from "axios";
import { useState } from "react";
import { BiImages } from "react-icons/bi";

const Main = () => {
  const [change, setChange] = useState("");
  const [results, setResults] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:3000/api/search?search=${change}`
    );

    setResults(response.data);
    setChange("");
  };
  console.log(results);
  return (
    <div className="absolute h-[100vh]  grid grid-cols-1 place-content-baseline mt-12 place-items-center w-full bg-transparent ">
      <div className=" grid place-content-center rounded-lg h-56 w-96 sm:h-52 md:h-48">
        <div>
          <form
            className="grid grid-cols-1 place-items-center"
            onSubmit={onSubmit}
          >
            <input
              className="w-52 mb-2 bg-transparent border-2 border-white rounded-md h-14 text-white text-md text-center placeholder:text-white placeholder:opacity-[0.85] sm:w-60 sm:text-lg sm:h-[75px] sm:mb-1 md:w-[275px] md:text-xl md:h-20 md:mb-3"
              type="text"
              placeholder=" Search a destiny . . ."
              onChange={(e) => setChange(e.target.value)}
              value={change}
            />
            <button className="w-72 hover:scale-125 duration-300 h-11 text-md text-white sm:text-lg md:text-xl">
              Gather info!
            </button>
          </form>
          {results.length > 0 && (
            <ul className="text-sm text-white absolute top-[216px] w-full left-2 sm:top-[182px] md:top-[150px]">
              {results.map((result) => (
                <div className="my-2">
                  <li className="text-lg font-bold sm:text-xl md:text-2xl">
                    {result.name}
                  </li>

                  <img
                    className="h-24  my-4 sm:h-28 md:h-32 sm:my-3 "
                    src={result.image}
                    alt=" Couldn´t find Img source, try refreshing or searching other destiny! Might bug."
                  />

                  <a
                    target="_blank"
                    className="text-md duration-300 hover:text-lg text-blue-500 sm:text-lg sm:duration-300 sm:hover:text-xl md:text-xl md:duration-300 md:hover:text-2xl"
                    href={`${result.link}`}
                  >
                    {result.link}
                    <hr className="mt-2" />
                  </a>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;
