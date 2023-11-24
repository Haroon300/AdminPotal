'use client'
import React from 'react'

const TeamList = () => {
  const cricketTeamList = [
    {
      teamName: 'Mumbai Indians',
      town: 'Mumbai',
    },
    {
      teamName: 'Chennai Super Kings',
      town: 'Chennai',
    },
    {
      teamName: 'Royal Challengers Bangalore',
      town: 'Bangalore',
    },
    {
      teamName: 'Kolkata Knight Riders',
      town: 'Kolkata',
    },
    {
      teamName: 'Delhi Capitals',
      town: 'Delhi',
    },
    {
      teamName: 'Sunrisers Hyderabad',
      town: 'Hyderabad',
    },
    {
      teamName: 'Rajasthan Royals',
      town: 'Jaipur',
    },
    {
      teamName: 'Kings XI Punjab',
      town: 'Mohali',
    },
    {
      teamName: 'Rising Pune Supergiant',
      town: 'Pune',
    },
    {
      teamName: 'Gujarat Lions',
      town: 'Rajkot',
    },
    {
      teamName: 'Deccan Gladiators',
      town: 'Visakhapatnam',
    },
    {
      teamName: 'Kochi Tuskers Kerala',
      town: 'Kochi',
    },
    {
      teamName: 'Peshawar Zalmi',
      town: 'Peshawar',
    },
    {
      teamName: 'Quetta Gladiators',
      town: 'Quetta',
    },
    {
      teamName: 'Karachi Kings',
      town: 'Karachi',
    },
    {
      teamName: 'Lahore Qalandars',
      town: 'Lahore',
    },
    {
      teamName: 'Islamabad United',
      town: 'Islamabad',
    },
    {
      teamName: 'Multan Sultans',
      town: 'Multan',
    },
    {
      teamName: 'Dhaka Dynamites',
      town: 'Dhaka',
    },
    {
      teamName: 'Colombo Kings',
      town: 'Colombo',
    },
  ];


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
                Town
              </th>
            </tr>
          </thead>
          <tbody>
            {cricketTeamList.map((data, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/218/338/non_2x/initial-letters-dp-monogram-logo-template-illustration-free-vector.jpg"
                    className="h-10 w-10 rounded-full"
                    alt={`Logo of ${data.teamName}`}
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.teamName}
                </td>
                <td className="px-6 py-4">
                  {data.town}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};


export default TeamList
