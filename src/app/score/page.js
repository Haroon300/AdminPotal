"use client"
import React, { useState } from 'react';
import { Sidebar } from '../component/sideBar';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);






const ScoreCard = () => {
    const teamsScore = [
        {
            team: "Pakistan",
            score: 30,
            out: 2,
            src: "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg",
        },
        {
            team: "India",
            score: 15,
            out: 3,
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
        },
    ];

    const teamslist = [
        { name: "Pakistan", value: 47 },
        { name: "England", value: 68 },
        { name: "Australia", value: 90 },
        { name: "South Africa", value: 80 },
        { name: "New Zealand", value: 70 },
        { name: "Bangladesh", value: 60 },
        { name: "Zimbabwe", value: 50 },
        { name: "West Indies", value: 40 },
        { name: "Ireland", value: 30 },
        { name: "Scotland", value: 20 },
        { name: "Wales", value: 10 },
    ];

    const labels = [
        '1st', '2nd', '3rd', '4th', '5th', '6th', '6th', '7th', '8th', '9th',
        '10th'
    ];
    const [chartData, setChartData] = useState({
        responsive: true,
        datasets: [
            {
                label: 'Islamabad United',
                data: [3, 5, 2, 6, 8, 1, 6, 7, 2, 0, 2],
                backgroundColor: 'rgba(230, 74, 25)',
            },
            {
                label: 'Karachi Kings',
                data: [6, 0, 8, 6, 4, 9, 4, 3, 1, 5, 4],
                backgroundColor: 'rgba(251, 140, 0)',
            },
        ],
        labels: labels,

    });

    const [chartOptions, setChartOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            // title: {
            //     display: true,
            //     text: 'Match',
            //     color: 'rgba(10, 9, 8)'
            // },
        },
    });


    const [modal, setModal] = useState(false);



    return (
        <div className='bg-[#EFEFEF] h-screen w-screen flex'>
            {/* Sidebar */}
            <div className='md:w-1/12'>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-full p-8">
                
                <h1 className='text-5xl font-bold mb-4'>Khelaao</h1>
                
                {/* match score borad */}
                <div className='flex'>
                    {teamsScore.map((data, index) => (
                        <>
                            <div key={index} className="bg-white p-4 rounded-md m-2 flex items-center">
                                <div className='h-16 w-16 rounded-full overflow-hidden'>
                                    <img src={data.src} alt={`${data.team} Flag`} className='h-16 w-full object-cover' />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold mb-1">{data.team}</h4>
                                    <div className='flex'>
                                        <p className="mr-2">Score: {data.score} /</p>
                                        <p>{data.out}</p>
                                    </div>
                                </div>
                            </div>
                            {index === 0 && <div className="ml-4"><h1 className="text-6xl text-black font-bold">VS</h1>
                            </div>}
                        </>
                    ))}
                </div>

                {/* button for open modal of RUNS */}
                <div className="mb-4">
                    <button
                        class="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg text-sm px-5 py-2"
                        onClick={() => { setModal(true) }}>
                        WORM GRAPH
                    </button>
                </div>


                {/* table of team list start from here  */}
                <div className='h-1/2 overflow-scroll  overflow-x-hidden'>
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                <th scope="col" class="px-6 py-3">
                                    Player's
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Run's
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Losses
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Rank
                                </th>
                            </tr>
                        </thead>
                        <tbody className='h-1/2'>

                            {
                                teamslist.map((data) => (

                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
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
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div>

                {/* modal start from here */}
                <div id="default-modal" class={`${modal ? ('block') : ('hidden')}  fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50`}>
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div class="bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full">
                            {/* <!-- Modal header --> */}
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    RUNS PER OVER
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { setModal(false) }}>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div class="p-4 md:p-5 space-y-4">
                                <Bar className='bg-white h-1/2 w-2/6' options={chartOptions} data={chartData} />
                            </div>
                        </div>
                    </div>
                </div>
                
                    {/* modal end here */}

            </div>
        </div>
    );
};

export default ScoreCard;
