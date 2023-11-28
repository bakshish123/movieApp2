import React from "react";
import coffee from "../assets/svg/coffee.svg";
import film from "../assets/svg/film.svg";
import heart from "../assets/svg/heart.svg";
import trending from "../assets/svg/trending-up.svg";
import calendar from "../assets/svg/calendar.svg";
import users from "../assets/svg/users.svg";
import message from "../assets/svg/message-circle.svg";
import sliders from "../assets/svg/sliders.svg";
import logout from "../assets/svg/log-out.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setDisplay } from "../store/sideNavbarSlice";
import { useMediaQuery } from "react-responsive";

const SideNavbar = () => {
  // const disp = useSelector((state: RootState) => state.sideNavbar.display);
  // const dispatch = useDispatch();
  // const handleSideNavbar = () => {
  //   dispatch(setDisplay(!disp));
  // };

  return (
    <div className="bg-stone-900 sm:hidden md:block md:w-[12rem] lg:w-[12rem]">
      <div className="flex flex-col gap-11">
        <div className="flex flex-row mt-[2rem] gap-2 ml-[2vw]">
          <img src={coffee} alt="" />
          <h2 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal mt-[5px]">
            WATCH
          </h2>
        </div>
        <Link to="/">
          <div className="flex flex-row ml-[2vw] gap-2">
            <img src={film} alt="" />
            <h3 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">
              Home
            </h3>
          </div>
        </Link>
        <Link to="/favourite">
          <div className="flex flex-row ml-[2vw] gap-2">
            <img src={heart} alt="" />
            <h3 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">
              Favourites
            </h3>
          </div>
        </Link>
        <Link to="/trending">
          <div className="flex flex-row ml-[2vw] gap-2">
            <img src={trending} alt="" />
            <h3 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">
              Trending
            </h3>
          </div>
        </Link>
        <div className="flex flex-row ml-[2vw] gap-2 ">
          <img src={calendar} alt="" />
          <h3 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">
            Coming soon
          </h3>
        </div>
        <div className="flex flex-row ml-[2vw] gap-2 mt-[7rem]">
          <img src={users} alt="" />
          <h3 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">
            Community
          </h3>
        </div>
        <div className="flex flex-row ml-[2vw] gap-2 ">
          <img src={message} alt="" />
          <h3 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">
            Social
          </h3>
        </div>
        <div className="flex flex-row ml-[2vw] gap-2 mt-[7rem]">
          <img src={sliders} alt="" />
          <h3 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">
            Settings
          </h3>
        </div>
        <div className="flex flex-row ml-[2vw] gap-2 ">
          <img src={logout} alt="" />
          <h3 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">
            Logout
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
