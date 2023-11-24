'use client'
import React, { useState } from 'react'
import { Sidebar } from '../component/sideBar'

const MatchList = () => {
    const match = [
        {
            id: 1,
            name: 'Match 1',
            date: '2021-01-01',
            time: '12:00',
            team1: 'Team 1',
            team2: 'Team 2',
            score1: 300,
            score2: 280,
            stadium: 'Stadium 1',
            location: 'Location 1',
            status: 'Finished'
        },
        {
            id: 2,
            name: 'Match 2',
            date: '2021-01-02',
            time: '14:00',
            team1: 'Team 3',
            team2: 'Team 4',
            score1: null,
            score2: null,
            stadium: 'Stadium 2',
            location: 'Location 2',
            status: 'In progress'
        },
        {
            id: 3,
            name: 'Match 3',
            date: '2021-01-03',
            time: '16:00',
            team1: 'Team 5',
            team2: 'Team 6',
            score1: null,
            score2: null,
            stadium: 'Stadium 3',
            location: 'Location 3',
            status: 'Upcoming'
        },
        {
            id: 4,
            name: 'Match 4',
            date: '2021-01-04',
            time: '18:00',
            team1: 'Team 7',
            team2: 'Team 8',
            score1: null,
            score2: null,
            stadium: 'Stadium 4',
            location: 'Location 4',
            status: 'Postponed'
        },
        {
            id: 5,
            name: 'Match 5',
            date: '2021-01-05',
            time: '20:00',
            team1: 'Team 9',
            team2: 'Team 10',
            score1: null,
            score2: null,
            stadium: 'Stadium 5',
            location: 'Location 5',
            status: 'In progress'

        }
    ]
    const [modal, setModal] = useState({
        set: false,
        id: 0,
    });



    return (
        <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
            <div>
                <Sidebar />
            </div>
            <div className='w-full max-w-2xl p-4'>
                <h1 className='text-3xl font-bold mb-4'>All Matches</h1>
                {match.map((match) => (
                    <div
                        key={match.id}
                        className='bg-white p-6 rounded-md shadow-md mb-4'
                    >
                        <h2 className='text-2xl font-bold mb-2'>{match.name}</h2>
                        <div className='flex items-center mb-4'>
                            <div className='flex-1'>
                                <p className='text-lg font-semibold'>
                                    {match.team1} vs {match.team2}
                                </p>
                                <p className='text-gray-500'>
                                    {match.date}, {match.time}
                                </p>
                                <p className='text-gray-500'>
                                    {match.stadium}, {match.location}
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <div className='text-xl font-bold mr-2'>
                                    {match.score1} - {match.score2}
                                </div>
                                <span className='text-gray-500'>{match.status}</span>
                            </div>
                        </div>
                        <button className='bg-orange-600 hover:bg-orange-500 text-white text-sm px-5 py-2 
                        rounded-lg' onClick={() => { setModal({ set: true, id: match.id }) }}>
                            See Details
                        </button>
                    </div>
                ))}
            </div>


            <div id="default-modal" class={`${modal.set ? ('block') : ('hidden')}  fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50`}>
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

                            {match
                                .filter((data) => data.id === modal.id)
                                .map((data) => (
                                    <div key={data.id} className="flex flex-col space-y-4">
                                        <div className="flex flex-row space-x-4">
                                            <div className="flex flex-col">
                                                <p className="font-medium text-lg text-gray-700 dark:text-white">
                                                    {data.team1}
                                                </p>
                                                <p className="font-medium text-lg text-gray-700 dark:text-white">
                                                    {data.score1}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="font-medium text-lg text-gray-700 dark:text-white">
                                                    {data.team2}
                                                </p>
                                                <p className="font-medium text-lg text-gray-700 dark:text-white">
                                                    {data.score2}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center border-t pt-4">
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                                    Date: {data.date}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                                    Time: {data.time}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-orange-600">
                                                    {data.status}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-gray-600 dark:text-gray-400">
                                                Stadium: {data.stadium}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                Location: {data.location}
                                            </p>
                                        </div>
                                    </div>
                                ))}


                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default MatchList
