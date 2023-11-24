'use client'
import React from 'react'

const Playerlist = () => {
  const playerListData = [
    {
      name: 'John Doe',
      matches: 15,
      wins: 10,
      losses: 5,
      score: 1800,
    },
    {
      name: 'Alice Smith',
      matches: 18,
      wins: 12,
      losses: 6,
      score: 1600,
    },
    {
      name: 'Bob Johnson',
      matches: 20,
      wins: 15,
      losses: 5,
      score: 2000,
    },
    {
      name: 'Emma Brown',
      matches: 25,
      wins: 18,
      losses: 7,
      score: 1700,
    },
    {
      name: 'Michael Davis',
      matches: 22,
      wins: 14,
      losses: 8,
      score: 1850,
    },
    {
      name: 'Sophia Miller',
      matches: 17,
      wins: 9,
      losses: 8,
      score: 1550,
    },
    {
      name: 'James Wilson',
      matches: 19,
      wins: 13,
      losses: 6,
      score: 1950,
    },
    {
      name: 'Olivia Anderson',
      matches: 21,
      wins: 16,
      losses: 5,
      score: 2100,
    },
    {
      name: 'William Taylor',
      matches: 24,
      wins: 20,
      losses: 4,
      score: 2200,
    },
    {
      name: 'Ava White',
      matches: 16,
      wins: 11,
      losses: 5,
      score: 1750,
    },
    {
      name: 'Ethan Harris',
      matches: 23,
      wins: 17,
      losses: 6,
      score: 2000,
    },
    {
      name: 'Mia Jackson',
      matches: 27,
      wins: 22,
      losses: 5,
      score: 2300,
    },
    {
      name: 'Liam Thomas',
      matches: 20,
      wins: 15,
      losses: 5,
      score: 1900,
    },
    {
      name: 'Charlotte Brown',
      matches: 18,
      wins: 12,
      losses: 6,
      score: 1650,
    },
    {
      name: 'Noah Martinez',
      matches: 26,
      wins: 21,
      losses: 5,
      score: 2250,
    },
    {
      name: 'Aria Johnson',
      matches: 19,
      wins: 14,
      losses: 5,
      score: 2000,
    },
    {
      name: 'Jackson Garcia',
      matches: 22,
      wins: 17,
      losses: 5,
      score: 2100,
    },
    {
      name: 'Amelia Smith',
      matches: 20,
      wins: 15,
      losses: 5,
      score: 1850,
    },
    {
      name: 'Logan Davis',
      matches: 21,
      wins: 16,
      losses: 5,
      score: 1950,
    },
    {
      name: 'Harper Wilson',
      matches: 25,
      wins: 20,
      losses: 5,
      score: 2200,
    },
    // Add more players as needed
  ];
  ;


  return (
    <div>
      <div className="relative w-full h-64 overflow-scroll overflow-x-auto">
        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
          <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Wins
              </th>
              <th scope="col" className="px-6 py-3">
                Losses
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {playerListData.map((data, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <img
                    src="https://i0.wp.com/www.islam.com.kw/wp-content/uploads/2013/05/mujahid-pic-on-horse.jpg?fit=446%2C592&ssl=1"
                    className="h-10 w-10 rounded-full"
                    alt={`Image of ${data.name}`}
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.name}
                </td>
                <td className="px-6 py-4">
                  {data.wins}
                </td>
                <td className="px-6 py-4">
                  {data.losses}
                </td>
                <td className="px-6 py-4">
                  {data.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};


export default Playerlist
