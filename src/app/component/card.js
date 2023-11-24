import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { GiAmericanFootballHelmet } from "react-icons/gi";

const Card = () => {
  const data = [
    {
      nouser: 44,
      noteam: 5,
      nomatch: 3,
    },
  ];

  return (
    <div className="flex justify-center items-center mt-10">
      {data.map((value) => (
        <div key={value.nouser} className="flex space-x-10">
          {/* User Card */}
          <div className="flex flex-col justify-center items-center p-4 bg-[#CC862A] shadow-lg h-40 w-72 rounded transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center h-16 w-16 p-3">
              <FaRegUser className="h-16 w-16 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl text-white">{value.nouser}</h1>
              <h6 className="text-xs text-white">Number of Users</h6>
            </div>
          </div>

          {/* Team Card */}
          <div className="flex flex-col justify-center items-center p-4 bg-[#D89837] shadow-lg h-40 w-72 rounded transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center h-16 w-16 p-3">
              <LuUsers2 className="h-10 w-10 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl text-white">{value.noteam}</h1>
              <h5 className="text-xs text-white">Number of Teams</h5>
            </div>
          </div>

          {/* Match Card */}
          <div className="flex flex-col justify-center items-center p-4 h-40 w-72 bg-[#D86410] shadow-lg rounded transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center h-16 w-16 p-3">
              <GiAmericanFootballHelmet className="h-14 w-14 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl text-white">{value.nomatch}</h1>
              <h5 className="text-xs text-white">Number of Matches</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
