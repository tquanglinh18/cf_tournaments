import { useEffect, useState } from "react";
import tournamentsApi from "../../apis/TournamentsApi";
import bgHeading from "../../assets/images/bg_heading.png";
import divideRankLeft from "../../assets/images/divider_rank_left.png";
import divideRankRight from "../../assets/images/divider_rank_right.png";
import icRankCup from "../../assets/images/ic_rank_cup.png";
import titleHeading from "../../assets/images/text_rank_heading.png";
import "./index.scss";
import { loadPageScript } from "./main.js";
import TableRank from "./components/TableRank";

function Rank() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchRankData = async () => {
      try {
        const response = await tournamentsApi.getRankData();
        setData(response);
        console.log("🚀 ~ useEffect ~ response:", response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRankData();
  }, []);
  
  const stateLoadPage = document.readyState;
  useEffect(() => {
    if (stateLoadPage === "complete") {
      return loadPageScript;
    } else {
      return window.addEventListener("load", loadPageScript);
    }
  }, [stateLoadPage]);
  return (
    <section className="bg-[#161d22] relative">
      <div className="absolute top-0 w-full">
        <img className="object-cover w-full" src={bgHeading} alt="" />
      </div>
      <div className="relative max-w-[1056px] w-full mx-auto pb-[5%] pt-[18.75%] px-3 sm:px-5 overflow-hidden">
        <div className="w-full mb-8 lg:mb-12">
          <img className="w-full" src={titleHeading} alt="" />
        </div>
        <div>
          <div
            style={{ perspective: 1500 + "px" }}
            className="relative w-full h-[180px] items-center md:h-[56px] lg:h-[62px] flex justify-center mb-8 lg:mb-12"
          >
            <div
              className="absolute cursor-pointer lg:max-w-[330px] px-5 w-[85%] md:w-[35%] lg:w-full py-5 flex items-center justify-between rounded-[3px] tab_select_item tab_select_item--previous"
              data-position="previous"
            >
              <img className="flex-shrink" src={icRankCup} alt="" />
              <h3 className="text-white lg:text-[22px] leading-none whitespace-nowrap">
                BXH TỔNG
              </h3>
              <img className="flex-shrink" src={icRankCup} alt="" />
            </div>
            <div
              className="absolute cursor-pointer lg:max-w-[330px] px-5 w-[85%] md:w-[35%] lg:w-full py-5 flex items-center justify-between rounded-[3px] tab_select_item tab_select_item--center"
              data-position="center"
            >
              <img className="flex-shrink" src={icRankCup} alt="" />
              <h3 className="text-white lg:text-[22px] leading-none whitespace-nowrap">
                BXH ĐỘI TUYỂN
              </h3>
              <img className="flex-shrink" src={icRankCup} alt="" />
            </div>
            <div
              className="absolute cursor-pointer lg:max-w-[330px] px-5 w-[85%] md:w-[35%] lg:w-full py-5 flex items-center justify-between rounded-[3px] tab_select_item tab_select_item--next"
              data-position="next"
            >
              <img className="flex-shrink" src={icRankCup} alt="" />
              <h3 className="text-white lg:text-[22px] leading-none whitespace-nowrap">
                BXH TUYỂN THỦ
              </h3>
              <img className="flex-shrink" src={icRankCup} alt="" />
            </div>
          </div>
          <div className="flex justify-center space-x-[4%] items-center mb-8 lg:mb-14">
            <div className="w-[30%] md:w-[20%]">
              <img className="w-full" src={divideRankLeft} alt="" />
            </div>
            <h3 className="text-[16px] lg:text-[20px] text-white text-center leading-normal">
              Thứ hạng hiện tại của bạn:
              <span className="text-[#f75014] font-bold ml-2">100</span>
            </h3>
            <div className="w-[30%] md:w-[20%]">
              <img className="w-full" src={divideRankRight} alt="" />
            </div>
          </div>

          {data.map((dataType: any, index: number) => {
            return (
              <TableRank
                key={index}
                type={dataType.type}
                data={dataType.data}
                isShow={dataType.type === "teams" ? true : false}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Rank;
