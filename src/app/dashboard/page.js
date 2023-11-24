"use client";
import React from "react";
import Card from "../component/card";
import { Sidebar } from "../component/sideBar";
import Playerlist from "../component/playerlist";
import TeamList from "../component/teamlist";
import { Chartg } from "../component/chart22";
import Piechart from "../component/piechart";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="md:w-1/12">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex flex-col md:w-11/12 ml-0 md:ml-10 p-4">
        {/* Card Section */}
        <div className="w-full mb-8">
          <Card />
        </div>
        {/* Chart Section */}
        <div className="w-full md:w-11/12 mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <Chartg className="w-full md:w-2/3 mb-4 md:mb-0" />
            <Piechart className="w-full md:w-1/3" />
          </div>
        </div>
        {/* Lists Section */}
        <div className="w-full mb-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="m-4 w-full md:w-1/2">
              <h1 className="text-2xl font-bold text-orange-600 mb-4">Team List</h1>
              <TeamList />
            </div>
            <div className="m-4 w-full md:w-1/2">
              <h1 className="text-2xl font-bold text-orange-600 mb-4">Player List</h1>
              <Playerlist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
