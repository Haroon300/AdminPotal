"use client";
import React, { useEffect } from "react";
import { Sidenav, initTE } from "tw-elements";
import { AiOutlineTeam } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbScoreboard } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { BsPersonVcard } from "react-icons/bs";
import { PiListMagnifyingGlass, PiUserListBold } from "react-icons/pi";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";


export const Sidebar = () => {
  const SidenavComponent = () => {
    useEffect(() => {
      initTE({ Sidenav });

      document.getElementById("slim-toggler").addEventListener("click", () => {
        const instance = Sidenav.getInstance(
          document.getElementById("sidenav-4")
        );
        instance.toggleSlim();
      });
    }, []);
  };

  SidenavComponent();

  return (
    <div>
      <div>
        <nav
          id="sidenav-4"
          className="group fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden 
          bg-black shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] 
          data-[te-sidenav-slim='true']:hidden data-[te-sidenav-slim-collapsed='true']:w-[77px] 
          data-[te-sidenav-slim='true']:w-[77px] data-[te-sidenav-hidden='false']:translate-x-0 
          dark:bg-zinc-800 [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='false']]:hidden 
          [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='true']]:[display:unset]"
          data-te-sidenav-init
          data-te-sidenav-hidden="false"
          data-te-sidenav-mode="side"
          data-te-sidenav-slim="true"
          data-te-sidenav-content="#slim-content"
          data-te-sidenav-slim-collapsed="true"
        >
          <ul
            class="relative m-0 list-none px-[0.2rem]"
            data-te-sidenav-menu-ref
          >
            <li class="relative flex justify-center items-center">
              <span class="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-white dark:[&>svg]:text-white">
                <MdDashboard />
              </span>
              <span
                class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden text-white
                  font-bold italic"
                data-te-sidenav-slim="false"
              >
                Dashboard
              </span>
            </li>
            <li class="relative">
              <a
                href="/dashboard"
                id="slim-toggler"
                class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 
                text-[0.875rem] text-white outline-none transition duration-300 e
                ase-linear hover:bg-gray-500 hover:bg-opacity-40 hover:text-inherit hover:outline-none 
                focus:bg-gray-600 focus:bg-opacity-80
                focus:text-inherit focus:outline-none active:bg-orange-300 active:text-inherit 
                active:outline-none data-[te-sidenav-state-active]:text-inherit 
                data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 
                dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span class="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-white dark:[&>svg]:text-white">
                  <BiHomeAlt2 />
                </span>
                <span
                  class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden text-white
                  italic"
                  data-te-sidenav-slim="false"
                >
                  Home
                </span>
              </a>
            </li>
            <li class="relative">
              <a
                id="slim-toggler"
                class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 
                text-[0.875rem] text-white outline-none transition duration-300 e
                ase-linear hover:bg-gray-500 hover:bg-opacity-40 hover:text-inherit hover:outline-none
                focus:bg-gray-300 focus:bg-opacity-40
                focus:text-inherit focus:outline-none active:bg-orange-300 active:text-inherit 
                active:outline-none data-[te-sidenav-state-active]:text-inherit 
                data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 
                dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span class="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-white dark:[&>svg]:text-white">
                  <TbScoreboard />
                </span>
                <span
                  class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden 
                  text-white italic"
                  data-te-sidenav-slim="false"
                >
                  Score
                </span>
              </a>
              <ul
                class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                data-te-sidenav-collapse-ref
              >
                <li class="relative">
                  <a
                    id="slim-toggler"
                    class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] 
                    pr-6 text-[0.78rem]  outline-none transition duration-300 ease-linear hover:bg-gray-500 hover:bg-opacity-40 
                    hover:outline-none focus:bg-slate-50 focus:text-inherit 
                    focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none 
                    text-white
                    data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                    motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 
                    dark:focus:bg-white/10 dark:active:bg-white/10"
                    data-te-sidenav-link-ref
                  >
                    <BsPersonVcard className="h-5 w-5 mr-1" />
                    Player Score
                  </a>
                </li>
                <li class="relative">
                  <a
                    href="/score"
                    id="slim-toggler"
                    class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] 
                    pr-6 text-[0.78rem]  outline-none transition duration-300 ease-linear hover:bg-gray-500 hover:bg-opacity-40
                    hover:outline-none focus:bg-slate-50 focus:text-inherit 
                    focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none 
                    data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                    text-white
                    motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 
                    dark:focus:bg-white/10 dark:active:bg-white/10"
                    data-te-sidenav-link-ref
                  >
                    <AiOutlineTeam className="h-5 w-5" />
                    Team Score
                  </a>
                </li>
              </ul>
            </li>
            <li class="relative">
              <a
                id="slim-toggler"
                class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 
                text-[0.875rem] text-white outline-none transition duration-300 e
                ase-linear hover:bg-gray-500 hover:bg-opacity-40 hover:text-inherit hover:outline-none
                focus:bg-gray-600 focus:bg-opacity-40
                focus:text-inherit focus:outline-none active:bg-orange-300 active:text-inherit 
                active:outline-none data-[te-sidenav-state-active]:text-inherit 
                data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 
                dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span class="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-white dark:[&>svg]:text-white">
                  <PiListMagnifyingGlass />
                </span>
                <span
                  class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden text-white
                  italic"
                  data-te-sidenav-slim="false"
                >
                  List's
                </span>
              </a>
              <ul
                class="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                data-te-sidenav-collapse-ref
              >
                <li class="relative">
                  <a
                    href="/teamslist"
                    id="slim-toggler"
                    class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] 
                    pr-6 text-[0.78rem]  outline-none transition duration-300 ease-linear hover:bg-gray-500 hover:bg-opacity-40 
                    hover:outline-none focus:bg-slate-50 focus:text-inherit 
                    focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none 
                    data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                    text-white
                    motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 
                    dark:focus:bg-white/10 dark:active:bg-white/10"
                    data-te-sidenav-link-ref
                  >
                    <PiUserListBold className="h-5 w-5 mr-1" />
                    Team's List
                  </a>
                </li>
                <li class="relative">
                  <a
                    id="slim-toggler"
                    class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] 
                    pr-6 text-[0.78rem]  outline-none transition duration-300 ease-linear hover:bg-gray-500 hover:bg-opacity-40 
                    hover:outline-none focus:bg-slate-50 focus:text-inherit 
                    focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none 
                    text-white
                    data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                    motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 
                    dark:focus:bg-white/10 dark:active:bg-white/10"
                    data-te-sidenav-link-ref
                    href="/matchlist"
                  >
                    <TfiLayoutListThumbAlt className="h-5 w-5 mr-1" />
                    Match's List
                  </a>
                </li>
              </ul>
            </li>
            <li class="relative">
              <a
              href="/signin"
                id="slim-toggler"
                class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 
                text-[0.875rem] text-white outline-none transition duration-300 e
                ase-linear hover:bg-gray-500 hover:bg-opacity-40 hover:text-inherit hover:outline-none
                focus:bg-gray-600 focus:bg-opacity-80
                focus:text-inherit focus:outline-none active:bg-orange-300 active:text-inherit 
                active:outline-none data-[te-sidenav-state-active]:text-inherit 
                data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 
                dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span class="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-white dark:[&>svg]:text-white">
                  <CiLogout />
                </span>
                <span
                  class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden text-white
                  italic"
                  data-te-sidenav-slim="false"
                >
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}