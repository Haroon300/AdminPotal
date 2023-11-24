'use client'
import React, { useState } from 'react'
import { Sidebar } from '../component/sideBar'
import { data } from 'autoprefixer'

const TeamsList = () => {
  const teamslist = {
    title: "Teams",
    items: [
      {
        id: 1,
        name: "Australia",
        member: [
          "Michael Clarke",
          "James Faulkner",
          "Aaron Finch",
          "Ryan Harris",
          "Mitchell Johnson",
          "Mitchell Marsh",
          "Peter Nevill",
          "Peter Siddle",
          "Mitchell Starc",
          "David Warner",
          "Pat Cummins",
          "Fawad Ahmed",
          "Brad Haddin",
          "Josh Hazlewood",
          "Nathan Lyon",
          "Shaun Marsh",
          "Chris Rogers",
          "Steven Smith",
          "Adam Voges",
          "Shane Watson"
        ]

      },
      {
        id:2,
        name: "Bangladesh",
        member: [
          "Arafat Sunny",
          "Imrul Kayes",
          "Jubair Hossain",
          " Liton Das",
          "Mahmudullah",
          "Mashrafe Mortaza",
          "Mohammad Shahid",
          "Mominul Haque",
          "Mushfiqur Rahim",
          "Mustafizur Rahman",
          "Nasir Hossain",
          "Rony Talukdar",
          "Rubel Hossain",
          "Sabbir Rahman",
          "Shakib Al Hasan",
          "Sohag Gazi",
          "Soumya Sarkar",
          "Taijul Islam",
          "Tamim Iqbal",
          "Taskin Ahme"
        ]
      },
      {
        id: 3,
        name: "England",
        member: [
          "Moeen Ali",
          "James Anderson",
          "Jonny Bairstow",
          "Gary Ballance",
          "Ian Bell",
          "Sam Billings",
          "Stuart Broad",
          "Jos Buttler",
          "Alastair Cook",
          "Steven Finn",
          "Alex Hales",
          "Chris Jordan",
          "Adam Lyth",
          "Eoin Morgan",
          "Adil Rashid",
          "Joe Root",
          "Jason Roy",
          "Ben Stokes",
          "David Willey",
          "Mark Wood"
        ]
      },
      {
        id: 4,
        name: "Pakistan",
        member: [
          "Ahmed Shehzad",
          "Anwar Ali",
          "Asad Shafiq",
          "Azhar Ali",
          "Babar Azam",
          "Ehsan Adil",
          "Imad Wasim",
          "Imran Khan",
          "Misbah-ul-Haq",
          "Mohammad Hafeez",
          "Mohammad Irfan",
          "Mohammad Rizwan",
          "Mukhtar Ahmed",
          "Rahat Ali",
          "Sarfraz Ahmed",
          "Shahid Afridi",
          "Shoaib Malik",
          "Sohail Tanvir",
          "Umar Akmal",
          "Yasir Shah"
        ]
      },{
        id: 5,
        name: "Australia",
        member: [
          "Michael Clarke",
          "James Faulkner",
          "Aaron Finch",
          "Ryan Harris",
          "Mitchell Johnson",
          "Mitchell Marsh",
          "Peter Nevill",
          "Peter Siddle",
          "Mitchell Starc",
          "David Warner",
          "Pat Cummins",
          "Fawad Ahmed",
          "Brad Haddin",
          "Josh Hazlewood",
          "Nathan Lyon",
          "Shaun Marsh",
          "Chris Rogers",
          "Steven Smith",
          "Adam Voges",
          "Shane Watson"
        ]

      },
      {
        id: 6,
        name: "Bangladesh",
        member: [
          "Arafat Sunny",
          "Imrul Kayes",
          "Jubair Hossain",
          " Liton Das",
          "Mahmudullah",
          "Mashrafe Mortaza",
          "Mohammad Shahid",
          "Mominul Haque",
          "Mushfiqur Rahim",
          "Mustafizur Rahman",
          "Nasir Hossain",
          "Rony Talukdar",
          "Rubel Hossain",
          "Sabbir Rahman",
          "Shakib Al Hasan",
          "Sohag Gazi",
          "Soumya Sarkar",
          "Taijul Islam",
          "Tamim Iqbal",
          "Taskin Ahme"
        ]
      },
      {
        id: 7,
        name: "England",
        member: [
          "Moeen Ali",
          "James Anderson",
          "Jonny Bairstow",
          "Gary Ballance",
          "Ian Bell",
          "Sam Billings",
          "Stuart Broad",
          "Jos Buttler",
          "Alastair Cook",
          "Steven Finn",
          "Alex Hales",
          "Chris Jordan",
          "Adam Lyth",
          "Eoin Morgan",
          "Adil Rashid",
          "Joe Root",
          "Jason Roy",
          "Ben Stokes",
          "David Willey",
          "Mark Wood"
        ]
      },
      {
        id: 8,
        name: "Pakistan",
        member: [
          "Ahmed Shehzad",
          "Anwar Ali",
          "Asad Shafiq",
          "Azhar Ali",
          "Babar Azam",
          "Ehsan Adil",
          "Imad Wasim",
          "Imran Khan",
          "Misbah-ul-Haq",
          "Mohammad Hafeez",
          "Mohammad Irfan",
          "Mohammad Rizwan",
          "Mukhtar Ahmed",
          "Rahat Ali",
          "Sarfraz Ahmed",
          "Shahid Afridi",
          "Shoaib Malik",
          "Sohail Tanvir",
          "Umar Akmal",
          "Yasir Shah"
        ]
      },{
        id: 9,
        name: "Australia",
        member: [
          "Michael Clarke",
          "James Faulkner",
          "Aaron Finch",
          "Ryan Harris",
          "Mitchell Johnson",
          "Mitchell Marsh",
          "Peter Nevill",
          "Peter Siddle",
          "Mitchell Starc",
          "David Warner",
          "Pat Cummins",
          "Fawad Ahmed",
          "Brad Haddin",
          "Josh Hazlewood",
          "Nathan Lyon",
          "Shaun Marsh",
          "Chris Rogers",
          "Steven Smith",
          "Adam Voges",
          "Shane Watson"
        ]

      },
      {
        id: 10,
        name: "Bangladesh",
        member: [
          "Arafat Sunny",
          "Imrul Kayes",
          "Jubair Hossain",
          " Liton Das",
          "Mahmudullah",
          "Mashrafe Mortaza",
          "Mohammad Shahid",
          "Mominul Haque",
          "Mushfiqur Rahim",
          "Mustafizur Rahman",
          "Nasir Hossain",
          "Rony Talukdar",
          "Rubel Hossain",
          "Sabbir Rahman",
          "Shakib Al Hasan",
          "Sohag Gazi",
          "Soumya Sarkar",
          "Taijul Islam",
          "Tamim Iqbal",
          "Taskin Ahme"
        ]
      },
      {
        id: 11,
        name: "England",
        member: [
          "Moeen Ali",
          "James Anderson",
          "Jonny Bairstow",
          "Gary Ballance",
          "Ian Bell",
          "Sam Billings",
          "Stuart Broad",
          "Jos Buttler",
          "Alastair Cook",
          "Steven Finn",
          "Alex Hales",
          "Chris Jordan",
          "Adam Lyth",
          "Eoin Morgan",
          "Adil Rashid",
          "Joe Root",
          "Jason Roy",
          "Ben Stokes",
          "David Willey",
          "Mark Wood"
        ]
      },
      {
        id: 13,
        name: "Pakistan",
        member: [
          "Ahmed Shehzad",
          "Anwar Ali",
          "Asad Shafiq",
          "Azhar Ali",
          "Babar Azam",
          "Ehsan Adil",
          "Imad Wasim",
          "Imran Khan",
          "Misbah-ul-Haq",
          "Mohammad Hafeez",
          "Mohammad Irfan",
          "Mohammad Rizwan",
          "Mukhtar Ahmed",
          "Rahat Ali",
          "Sarfraz Ahmed",
          "Shahid Afridi",
          "Shoaib Malik",
          "Sohail Tanvir",
          "Umar Akmal",
          "Yasir Shah"
        ]
      },
    ]
  }
  const [modal, setModal] = useState({
    set: false,
    id: 0,
  });
  return (
    <div className='flex h-screen w-screen'>
      <div className='md:w-1/12'>
        <Sidebar />
      </div>
      <div className="flex flex-col md:w-11/12 m-5">
        <h1 className='text-3xl font-bold mb-4'>All Team's</h1>
        {/* table of teamslist */}
        <div class="relative overflow-x-auto h-3/4 ">

          <table class="w-full text-sm h-1/2 text-left overscroll-none scroll-smooth rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>

                <th scope="col" class="px-6 py-3">
                  Team
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
                teamslist.items.map((data) => (

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

        </div>

        {/* modal */}
        <div id="default-modal" class={`${modal.set ? ('block') : ('hidden')}  fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50`}>
          <div class="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div class="bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full">
              {/* <!-- Modal header --> */}
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Match Details
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { setModal({ set: false, }) }}>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4">
                {teamslist.items
                  .filter((data) => data.id === modal.id)
                  .map((data) => (
                    <div key={data.id}>
                      <h1 className="text-2xl font-semibold mb-2">{data.name}</h1>
                      <div className="overflow-x-auto max-h-96">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-100 sticky top-0">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {data.member.map((member, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{member}</td>
                                <td className="px-6 py-4 whitespace-nowrap">Batsman</td>
                                <td className="px-6 py-4 whitespace-nowrap">5th</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
              </div>


            </div>
          </div>
        </div>
        {/* end of modal */}
      </div>
    </div>

  )
}

export default TeamsList
