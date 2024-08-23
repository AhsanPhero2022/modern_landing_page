import React from "react";
import {
  ChevronDownIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <header className="bg-[#001529] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative">
            <button className="bg-color-1 text-n-1 px-4 py-2 rounded-md flex items-center">
              My Campaign <ChevronDownIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button className="text-n-1 mr-4">
            <BellIcon className="w-6 h-6" />
          </button>
          <button className="text-n-1 w-12 h-12">
            {user ? <img src={user.imageUrl} /> : <UserCircleIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
