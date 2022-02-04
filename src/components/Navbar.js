import React from "react";
import MenuIcon from "@heroicons/react/outline/MenuIcon";
import SearchIcon from "@heroicons/react/outline/SearchIcon";
import ChevronDownIcon from "@heroicons/react/outline/ChevronDownIcon";
import BellIcon from "@heroicons/react/outline/BellIcon";
import UserCircleIcon from '@heroicons/react/solid/UserCircleIcon';
import ViewGridIcon from '@heroicons/react/solid/ViewGridIcon'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-3">
      <div className="logo flex gap-5 justify-start items-center text-gray-700">
        <MenuIcon className="h-5 w-5" />
        <h2 className="text-2xl">Gmail</h2>
      </div>
      <div className="searchbar">
        <div className="w-full flex gap-3 items-center bg-gray-200 px-3 py-2 rounded-md text-gray-600">
          <SearchIcon className="h-5 w-5" />
          <input
            className=" w-96 bg-gray-200 outline-none"
            placeholder="Search"
          />
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="quickbits">
        <div className="w-full flex gap-3 text-gray-600 items-center">
            <ViewGridIcon className="h-7 w-7" />
            <BellIcon className="h-7 w-7" />
            <UserCircleIcon className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
