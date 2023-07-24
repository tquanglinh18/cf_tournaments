import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./SliderCSS.css";
import icCaption from "../../../../assets/images/ic_caption.png";
import icPlay from "../../../../assets/images/ic_play.png";
import icPrize from "../../../../assets/images/ic_prize.png";
import icTime from "../../../../assets/images/ic_time.png";
import icTotalTeams from "../../../../assets/images/ic_total_team.png";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;
  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="w-[65%] h-full hidden lg:block bg-slate-500">
          <img
            src="https://images.alphacoders.com/614/thumb-1920-614654.jpg"
            alt=""
            className="object-cover h-full"
          />
        </div>
        <div className="w-full lg:w-[35%] p-5 h-full bg-[#0f141a] text-white flex flex-col justify-between lg:border-l-4  border-l-[#8c97a4]">
          <h3 className="mb-2 text-[14px] line-clamp-2 lg:text-base xl:text-[18px] font-bold">
            CROSSFIRE COMMUNITY SPING 2023 CROSSFIRE COMMUNITY SPING 2023
            CROSSFIRE COMMUNITY SPING 2023
          </h3>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#96a2af] text-[10px] xl:text-[14px]">
              Giải đấu được tạo bởi
            </p>
            <div className="flex bg-[#1f252b] justify-center items-center py-1 px-2 rounded">
              <div className="mr-2">
                <img src={icCaption} alt="" />
              </div>
              <p className="text-[10px] xl:text-[14px]">ShirunaiOkami</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2 space-x-1">
            <div className="text-[10px] xl:text-[14px] bg-[#1f252b] py-1 px-2 rounded-md flex items-center justify-center">
              <div className="w-[10px] h-[10px] lg:w-[14px] mr-2 flex items-center">
                <img src={icPlay} alt="" className="object-cover w-full" />
              </div>
              <p>Đang diễn ra</p>
            </div>
            <div className="text-[10px] xl:text-[14px] bg-[#1f252b] py-1 px-2 rounded-md">
              <p>Đặt boom</p>
            </div>
            <div className="text-[10px] xl:text-[14px] bg-[#1f252b] py-1 px-2 rounded-md">
              <p>5 vs 5</p>
            </div>
          </div>
          <div className="bg-[#1f252b] py-1 px-2 rounded-md mb-2">
            <div className="text-[12px] xl:text-[14px] flex items-center">
              <img src={icPrize} alt="" className="w-[12px] h-[12px] mr-2" />
              <p>GIẢI THƯỞNG</p>
            </div>
            <p className="text-[#53dc71] px-4 text-[12px] xl:text-[14px]">
              5.000.000 VND
            </p>
          </div>
          <div className="bg-[#1f252b] py-1 px-2 rounded-md mb-2">
            <div className="text-[12px] xl:text-[14px] flex items-center">
              <img src={icTime} alt="" className="w-[12px] h-[12px] mr-2" />
              <p>THỜI GIAN GIẢI ĐẤU</p>
            </div>
            <p className="text-[#ffc102] px-4 text-[12px] xl:text-[14px]">
              01.06 - 30.06.2023
            </p>
          </div>
          <div className="bg-[#1f252b] py-1 px-2 rounded-md mb-2">
            <div className="text-[12px] xl:text-[14px] flex items-center">
              <img
                src={icTotalTeams}
                alt=""
                className="w-[12px] h-[12px] mr-2"
              />
              <p>SỐ LƯỢNG TEAM</p>
            </div>
            <p className="text-[#f12e2e] px-4 text-[12px] xl:text-[14px]">
              32/32
            </p>
          </div>
          <button
            type="button"
            className="text-[14px] w-full bg-[#ff3600] p-2 text-center rounded-md cursor-pointer"
          >
            Thông tin chi tiết
          </button>
        </div>
      </div>
    </div>
  );
});
