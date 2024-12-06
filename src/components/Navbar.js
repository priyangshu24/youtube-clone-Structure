import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between h-16 px-6 bg-black opacity-95">
      <div className="flex items-center gap-6 text-xl text-white">
        <GiHamburgerMenu />
        <div className="flex items-center gap-1">
          <BsYoutube className="text-3xl text-red-600" />
          <span className="text-2xl font-bold">YouTube</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex items-center h-10 overflow-hidden bg-gray-800 rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="h-full px-4 text-white bg-gray-800 border-none w-96 focus:outline-none"
              value={searchTerm}
              onChange={e => dispatch(changeSearchTerm(e.target.value))}
            />
            <button className="flex items-center justify-center w-16 h-full transition duration-200 bg-red-600 rounded-r-full hover:bg-red-700">
              <AiOutlineSearch className="text-xl text-white" />
            </button>
          </div>
        </form>

        <button className="p-2 transition duration-200 bg-gray-800 rounded-full hover:bg-gray-700">
          <FaMicrophone className="text-xl text-white" />
        </button>
      </div>
      <div className="flex items-center gap-6 text-xl text-white">
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute px-1 text-xs bg-red-600 rounded-full bottom-2 left-2">9+</span>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.JkELpD8WrwxIIfADiURrpgHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="profile logo"
          className="rounded-full w-9 h-9"
        />
      </div>
    </div>
  );
}