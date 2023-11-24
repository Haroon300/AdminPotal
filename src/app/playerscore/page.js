'use client'
import React, { useState } from 'react'
import { Sidebar } from '../component/sideBar'

const PlayerScore = () => {

    const playerlist = {
        batsmen: [
            {
                id: 1,
                name: "John",
                score: 100,
                team: "team-01",
                image: "/images/john.jpg",
                role: "Batsman",
                status: "Active",
                matches: 10,
                innings: 25,
                balls: 346,
                fours: 87,
                sixes: 9,
                strikeRate: 100,
                economyRate: 100,
                avg: 100,
            },
            {
                id: 2,
                name: "John",
                score: 100,
                team: "team-01",
                image: "/images/john.jpg",
                role: "Batsman",
                status: "Active",
                matches: 10,
                innings: 25,
                balls: 346,
                fours: 87,
                sixes: 9,
                strikeRate: 100,
                economyRate: 100,
                avg: 100,
            }, {
                id: 3,
                name: "John",
                score: 100,
                team: "team-01",
                image: "/images/john.jpg",
                role: "Batsman",
                status: "Active",
                matches: 10,
                innings: 25,
                balls: 346,
                fours: 87,
                sixes: 9,
                strikeRate: 100,
                economyRate: 100,
                avg: 100,
            }, {
                id: 4,
                name: "John",
                score: 100,
                team: "team-01",
                image: "/images/john.jpg",
                role: "Batsman",
                status: "Active",
                matches: 10,
                innings: 25,
                balls: 346,
                fours: 87,
                sixes: 9,
                strikeRate: 100,
                economyRate: 100,
                avg: 100,
            }, {
                id: 5,
                name: "John",
                score: 100,
                team: "team-01",
                image: "/images/john.jpg",
                role: "Batsman",
                status: "Active",
                matches: 10,
                innings: 25,
                balls: 346,
                fours: 87,
                sixes: 9,
                strikeRate: 100,
                economyRate: 100,
                avg: 100,
            },
        ],
        bowlers: [
            {
                id: 5,
                name: "David",
                wickets: 20,
                team: "team-02",
                image: "/images/david.jpg",
                role: "Bowler",
                status: "Active",
                matches: 12,
                overs: 50,
                runs: 150,
                economyRate: 6.0,
                avg: 7.5,
            },
            {
                id: 6,
                name: "David",
                wickets: 20,
                team: "team-02",
                image: "/images/david.jpg",
                role: "Bowler",
                status: "Active",
                matches: 12,
                overs: 50,
                runs: 150,
                economyRate: 6.0,
                avg: 7.5,
            }, {
                id: 7,
                name: "David",
                wickets: 20,
                team: "team-02",
                image: "/images/david.jpg",
                role: "Bowler",
                status: "Active",
                matches: 12,
                overs: 50,
                runs: 150,
                economyRate: 6.0,
                avg: 7.5,
            }, {
                id: 8,
                name: "David",
                wickets: 20,
                team: "team-02",
                image: "/images/david.jpg",
                role: "Bowler",
                status: "Active",
                matches: 12,
                overs: 50,
                runs: 150,
                economyRate: 6.0,
                avg: 7.5,
            }, {
                id: 9,
                name: "David",
                wickets: 20,
                team: "team-02",
                image: "/images/david.jpg",
                role: "Bowler",
                status: "Active",
                matches: 12,
                overs: 50,
                runs: 150,
                economyRate: 6.0,
                avg: 7.5,
            },
        ],
        allRounders: [
            {
                id: 10,
                name: "Alex",
                score: 80,
                wickets: 15,
                team: "team-03",
                image: "/images/alex.jpg",
                role: "All-Rounder",
                status: "Active",
                matches: 8,
                innings: 20,
                balls: 280,
                fours: 65,
                sixes: 7,
                strikeRate: 120,
                economyRate: 5.5,
                avg: 15,
            },
            {
                id: 11,
                name: "Alex",
                score: 80,
                wickets: 15,
                team: "team-03",
                image: "/images/alex.jpg",
                role: "All-Rounder",
                status: "Active",
                matches: 8,
                innings: 20,
                balls: 280,
                fours: 65,
                sixes: 7,
                strikeRate: 120,
                economyRate: 5.5,
                avg: 15,
            }, {
                id: 12,
                name: "Alex",
                score: 80,
                wickets: 15,
                team: "team-03",
                image: "/images/alex.jpg",
                role: "All-Rounder",
                status: "Active",
                matches: 8,
                innings: 20,
                balls: 280,
                fours: 65,
                sixes: 7,
                strikeRate: 120,
                economyRate: 5.5,
                avg: 15,
            }, {
                id: 13,
                name: "Alex",
                score: 80,
                wickets: 15,
                team: "team-03",
                image: "/images/alex.jpg",
                role: "All-Rounder",
                status: "Active",
                matches: 8,
                innings: 20,
                balls: 280,
                fours: 65,
                sixes: 7,
                strikeRate: 120,
                economyRate: 5.5,
                avg: 15,
            }, {
                id: 14,
                name: "Alex",
                score: 80,
                wickets: 15,
                team: "team-03",
                image: "/images/alex.jpg",
                role: "All-Rounder",
                status: "Active",
                matches: 8,
                innings: 20,
                balls: 280,
                fours: 65,
                sixes: 7,
                strikeRate: 120,
                economyRate: 5.5,
                avg: 15,
            }, {
                id: 15,
                name: "Alex",
                score: 80,
                wickets: 15,
                team: "team-03",
                image: "/images/alex.jpg",
                role: "All-Rounder",
                status: "Active",
                matches: 8,
                innings: 20,
                balls: 280,
                fours: 65,
                sixes: 7,
                strikeRate: 120,
                economyRate: 5.5,
                avg: 15,
            },
        ]
    }

    const [modal, setModal] = useState({
        set: false,
        id: 0,
    });

    return (
        <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
            <div className='md:w-1/12'>
                <Sidebar />
            </div>
            <div className='flex md:w-11/12 m-5" w-full p-4'>


                <table class="w-full text-sm h-1/2 text-left overscroll-none scroll-smooth rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" class="px-6 py-3">
                                Player Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Matches
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Points
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Team Member
                            </th>
                        </tr>
                    </thead>
                    <tbody className='h-1/2'>

                        {
                            playerlist.batsmen.map((data) => (

                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img class="w-10 h-10 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/218/338/non_2x/initial-letters-dp-monogram-logo-template-illustration-free-vector.jpg" alt="Jese image" />
                                        <div class="ps-3">
                                            <div class="text-base font-semibold">
                                                <a>
                                                    {data.name}
                                                </a>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        09
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            01
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        10
                                    </td>
                                    <td class="px-6 py-4">
                                        <button
                                            class="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium 
                        rounded-lg text-sm px-5 py-2"
                                            onClick={() => { setModal({ set: true, id: data.id }) }}
                                        >
                                            See Member
                                        </button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>

                <div id="default-modal" class={`${modal.set ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50`}>
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div class="bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full">
                            {/* <!-- Modal header --> */}
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    RUNS PER OVER
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { setModal({ set: false, }) }}>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div class="p-4 md:p-5 space-y-4">

                                <div className='flex flex-wrap justify-center'>
                                    {playerlist.batsmen.map((item) => (
                                        <div key={item.name} className='bg-white rounded-md shadow-md m-4 p-6 max-w-xs'>
                                            <img src="https://static.toiimg.com/thumb/msid-98946081,width-1280,height-720,resizemode-4/98946081.jpg" alt="profile pic" className='object-cover rounded-full mx-auto mb-4' />
                                            <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                                            <p className='text-gray-500 mb-2'>{item.role}</p>
                                            <p className={`text-${item.status === 'Active' ? 'green' : 'red'}-500 font-bold mb-4`}>{item.status}</p>
                                            <p className='text-gray-500 mb-2'>{item.team}</p>
                                            <div className='grid grid-cols-2 gap-2 mb-4'>
                                                {/* ... (rest of the code remains the same) */}

                                                <div>
                                                    <p className='font-bold'>Matches</p>
                                                    <p>{item.matches}</p>
                                                </div>
                                                <div>
                                                    <p className='font-bold'>Innings</p>
                                                    <p>{item.innings}</p>
                                                </div>
                                                <div>
                                                    <p className='font-bold'>Balls</p>
                                                    <p>{item.balls}</p>
                                                </div>
                                                <div>
                                                    <p className='font-bold'>Fours</p>
                                                    <p>{item.fours}</p>
                                                </div>
                                                <div>
                                                    <p className='font-bold'>Sixes</p>
                                                    <p>{item.sixes}</p>
                                                </div>
                                                <div>
                                                    <p className='font-bold'>Strike Rate</p>
                                                    <p>{item.strikeRate}</p>
                                                </div>
                                                <div>
                                                    <p className='font-bold'>Economy Rate</p>
                                                    <p>{item.economyRate}</p>
                                                </div>
                                                <div>
                                                    <p className='font-bold'>Average</p>
                                                    <p>{item.avg}</p>
                                                </div>


                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>




            </div>


        {/* </div> */}
            {/* batsmen */ }

    {/* bowlers */ }
    {/* <div className='flex flex-wrap w-2/6 justify-center'>
                    {playerlist.bowlers.map((item) => (
                        <div key={item.name} className='bg-white rounded-md shadow-md m-4 p-6 max-w-xs'>
                            <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/286600/286651.6.jpg"
                                alt="profile pic" className='w-32 h-32 object-cover rounded-full mx-auto mb-4' />
                            <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                            <p className='text-gray-500 mb-2'>{item.role}</p>
                            <p className={`text-${item.status === 'Active' ? 'green' : 'red'}-500 font-bold mb-4`}>{item.status}</p>
                            <p className='text-gray-500 mb-2'>{item.team}</p>
                            <div className='grid grid-cols-2 gap-2 mb-4'>
                                <div>
                                    <p className='font-bold'>Matches</p>
                                    <p>{item.matches}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Overs</p>
                                    <p>{item.overs}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Runs</p>
                                    <p>{item.runs}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Wickets</p>
                                    <p>{item.wickets}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Economy Rate</p>
                                    <p>{item.economyRate}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Average</p>
                                    <p>{item.avg}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
    {/* all rounder */ }
    {/* <div className="flex flex-wrap w-2/6 justify-center">
                    {playerlist.allRounders.map((allRounder) => (
                        <div key={allRounder.name} className="bg-white rounded-md shadow-md m-4 p-6 max-w-xs">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDR_EPAk8Ix4NEEEFbU_84vRTk7OosvYxDiw&usqp=CAU" 
                            alt="profile pic" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                            <h2 className="text-xl font-semibold mb-2">{allRounder.name}</h2>
                            <p className="text-gray-500 mb-2">{allRounder.role}</p>
                            <p className={`text-${allRounder.status === 'Active' ? 'green' : 'red'}-500 font-bold mb-4`}>{allRounder.status}</p>
                            <p className="text-gray-500 mb-2">{allRounder.team}</p>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                <div>
                                    <p className="font-bold">Matches</p>
                                    <p>{allRounder.matches}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Innings</p>
                                    <p>{allRounder.innings}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Balls</p>
                                    <p>{allRounder.balls}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Fours</p>
                                    <p>{allRounder.fours}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Sixes</p>
                                    <p>{allRounder.sixes}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Strike Rate</p>
                                    <p>{allRounder.strikeRate}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Economy Rate</p>
                                    <p>{allRounder.economyRate}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Average</p>
                                    <p>{allRounder.avg}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

        </div >
    )
}

export default PlayerScore
