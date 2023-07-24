import React from "react";
import PropTypes from "prop-types";
import icOutstanding from "../../../assets/images/ic_star_outstanding.png";
import icUpcoming from "../../../assets/images/ic_star_upcoming.png";
import icHappening from "../../../assets/images/ic_star_happening.png";
import icFinsihed from "../../../assets/images/ic_star_finished.png";
import icRank from "../../../assets/images/ic_star_rank.png";

SubMenu.propTypes = {};

function SubMenu(props) {
  return (
    <div className="sticky top-[72px] left-0 w-[72px] z-50 bg-[#0f141a]">
      <div className="left-menu absolute h-[100vh] hidden lg:block bg-[#0f141a] border-r border-r-[#2c3944]">
        <div
          id="outstanding-btn"
          className="border-r-2 border-r-transparent hover:border-r-[#f4bd23] cursor-pointer hover:bg-gradient-to-l from-[#7b631d] to-transparent"
        >
          <div className="w-[72px] h-[72px] flex justify-center items-center">
            <img src={icOutstanding} alt="" />
          </div>
        </div>
        <div
          id="upcoming-btn"
          className="border-r-2 border-r-transparent hover:border-r-[#197ef5] cursor-pointer hover:bg-gradient-to-l from-[#134681] to-transparent"
        >
          <div className="w-[72px] h-[72px] flex justify-center items-center">
            <img src={icUpcoming} alt="" />
          </div>
        </div>
        <div
          id="happening-btn"
          className="border-r-2 border-r-transparent hover:border-r-[#ed4f17] cursor-pointer hover:bg-gradient-to-l from-[#7b2a0f] to-transparent"
        >
          <div className="w-[72px] h-[72px] flex justify-center items-center">
            <img src={icHappening} alt="" />
          </div>
        </div>
        <div
          id="finished-btn"
          className="border-r-2 border-r-transparent hover:border-r-[#33bd82] cursor-pointer hover:bg-gradient-to-l from-[#1f634a] to-transparent"
        >
          <div className="w-[72px] h-[72px] flex justify-center items-center">
            <img src={icFinsihed} alt="" />
          </div>
        </div>
        <div
          id="ranking-btn"
          className="border-r-2 border-r-transparent hover:border-r-[#f4f5f5] cursor-pointer hover:bg-gradient-to-l from-[#737679] to-transparent"
        >
          <div className="w-[72px] h-[72px] flex justify-center items-center">
            <img src={icRank} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
