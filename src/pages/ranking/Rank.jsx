import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import "./index.js";
import bgHeading from "../../assets/images/bg_heading.png";
import titleHeading from "../../assets/images/text_rank_heading.png";
import icRankCup from "../../assets/images/ic_rank_cup.png";
import divideRankLeft from "../../assets/images/divider_rank_left.png";
import divideRankRight from "../../assets/images/divider_rank_right.png";
import avtRankGold from "../../assets/images/avatar_rank_gold.png";
import avtRankSiliver from "../../assets/images/avatar_rank_siliver.png";
import avtRankBronze from "../../assets/images/avatar_rank_bronze.png";

Rank.propTypes = {};

function Rank(props) {
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
            style={{ perspective: 1500 +  'px'}}
            className="relative w-full h-[180px] items-center md:h-[56px] lg:h-[62px] flex justify-center mb-8 lg:mb-12"
          >
            <div
              className="absolute cursor-pointer lg:max-w-[330px] px-5 w-[85%] md:w-[35%] lg:w-full py-5 flex items-center justify-between rounded-[3px] space-x-8 tab_select_item tab_select_item--previous"
              data-position="previous"
            >
              <img className="flex-shrink" src={icRankCup} alt="" />
              <h3 className="text-white lg:text-[22px] leading-none whitespace-nowrap">
                BXH TỔNG
              </h3>
              <img className="flex-shrink" src={icRankCup} alt="" />
            </div>
            <div
              className="absolute cursor-pointer lg:max-w-[330px] px-5 w-[85%] md:w-[35%] lg:w-full py-5 flex items-center justify-between rounded-[3px] space-x-8 tab_select_item tab_select_item--center"
              data-position="center"
            >
              <img className="flex-shrink" src={icRankCup} alt="" />
              <h3 className="text-white lg:text-[22px] leading-none whitespace-nowrap">
                BXH ĐỘI TUYỂN
              </h3>
              <img className="flex-shrink" src={icRankCup} alt="" />
            </div>
            <div
              className="absolute cursor-pointer lg:max-w-[330px] px-5 w-[85%] md:w-[35%] lg:w-full py-5 flex items-center justify-between rounded-[3px] space-x-8 tab_select_item tab_select_item--next"
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
          <div
            className="overflow-x-auto tab_table_ranking"
            style={{display: "none"}}
          >
            <table className="w-full custom_ranking_view_top min-w-[767px] lg:min-w-0">
              <thead>
                <tr>
                  <th>
                    <div>Hạng</div>
                  </th>
                  <th>
                    <div>Tên đội tuyển</div>
                  </th>
                  <th>
                    <div>Tổng điểm</div>
                  </th>
                  <th>
                    <div>Số trận thắng</div>
                  </th>
                  <th>
                    <div>Số giải thắng</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img className="h-full" src={avtRankGold} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>VTC Online</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img className="h-full" src={avtRankSiliver} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img className="h-full" src={avtRankBronze} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">VTC Online Team</h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div>1</div>
                  </td>
                  <td>
                    <div>1</div>
                  </td>
                  <td>
                    <div>1</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="overflow-x-auto tab_table_ranking"
            style={{display: "block"}}
          >
            <table className="w-full custom_ranking_view_top min-w-[767px] lg:min-w-0">
              <thead>
                <tr>
                  <th>
                    <div>Hạng</div>
                  </th>
                  <th>
                    <div>Tên đội tuyển</div>
                  </th>
                  <th>
                    <div>Tổng điểm</div>
                  </th>
                  <th>
                    <div>Số trận thắng</div>
                  </th>
                  <th>
                    <div>Số giải tham dự</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img className="h-full" src={avtRankGold} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>VTC Online</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img
                          className="h-full"
                          src={avtRankSiliver}
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img className="h-full" src={avtRankBronze} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">VTC Online Team</h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="overflow-x-auto tab_table_ranking"
            style={{display: "none"}}
          >
            <table className="w-full custom_ranking_view_top min-w-[767px] lg:min-w-0">
              <thead>
                <tr>
                  <th>
                    <div>Hạng</div>
                  </th>
                  <th>
                    <div>Tên tuyển thủ</div>
                  </th>
                  <th>
                    <div>Tổng điểm</div>
                  </th>
                  <th>
                    <div>Số trận thắng</div>
                  </th>
                  <th>
                    <div>Số giải tham dự</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img className="h-full" src={avtRankGold} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>VTC Online</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img
                          className="h-full"
                          src={avtRankSiliver}
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full">
                      <div className="h-[62px]">
                        <img className="h-full" src={avtRankBronze} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">VTC Online Team</h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>4</div>
                  </td>
                  <td className="w-[40%]">
                    <div>
                      <h3 className="line-clamp-1">
                        VTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC OnlineVTC
                        OnlineVTC Online
                      </h3>
                    </div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                  <td className="w-[15%]">
                    <div>1</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rank;
