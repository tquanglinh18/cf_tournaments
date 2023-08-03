import axios from "axios";
import { useEffect, useState } from "react";
import bgHeading from "../../assets/images/bg_heading.png";
import headingTeamsOnPage from "../../assets/images/heading_teams_on_page.png";
import icArrowDown from "../../assets/images/ic_arrow_down.png";
import "./index.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../components/ pagination/Pagination";

function Teams() {
  const [teams, setTeams] = useState<[]>([]);
  const [teamsAPI, setTeamsAPI] = useState<[]>([]);

  useEffect(() => {
    axios.get("./data/teams_data.json").then((results) => {
      setTeamsAPI(results.data);
      setTeams(results.data);
    });
  }, []);

  const [searchParam, setSearchParam] = useState({
    name: "",
    location: "",
  });

  function handleSearch() {
    const teamsFilter: any = teamsAPI.filter((item: any) => {
      if (
        item.name
          .toLowerCase()
          .includes(searchParam.name.toLocaleLowerCase()) &&
        item.location
          .toLowerCase()
          .includes(searchParam.location.toLocaleLowerCase())
      ) {
        return item;
      }
    });

    setTeams(teamsFilter);
  }

  return (
    <section className="bg-[#161d22] relative">
      <div className="absolute top-0 w-full">
        <img className="object-cover w-full" src={bgHeading} alt="" />
      </div>
      <div className="relative max-w-[1350px] w-full mx-auto pb-[5%] pt-[18.75%] px-3 sm:px-5 overflow-hidden">
        <div className="w-full px-5 mb-8 lg:mb-14">
          <img className="w-full" src={headingTeamsOnPage} alt="" />
        </div>
        <form className="flex flex-wrap md:flex-nowrap items-center w-full justify-center space-y-[2%] md:space-y-0 md:space-x-[2%] mb-8 lg:mb-14">
          <input
            className="md:max-w-[230px] w-full py-4 px-5 rounded bg-[#353f48] text-[#959697] placeholder:text-[#959697]"
            type="text"
            placeholder="Tìm theo tên"
            onChange={(e) => {
              setSearchParam({
                ...searchParam,
                name: e.target.value,
              });
            }}
          />
          <div className="relative md:max-w-[230px] w-full">
            <select
              onChange={(e) => {
                setSearchParam({
                  ...searchParam,
                  location: e.target.value,
                });
              }}
              placeholder="Tìm theo vị trí"
              className="md:max-w-[230px] w-full py-4 px-5 rounded bg-[#353f48] text-[#959697] placeholder:text-[#959697]"
            >
              <option value="">Tìm theo thành phố</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Bắc Ninh">Bắc Ninh</option>
              <option value="Nam Định">Nam Định</option>
            </select>
            <img
              className="absolute right-[5%] top-1/2 -translate-y-1/2"
              src={icArrowDown}
              alt=""
            />
          </div>
          <div
            className="md:max-w-[230px] w-full text-center px-3 py-4 rounded bg-[#f75014] text-white cursor-pointer"
            onClick={handleSearch}
          >
            Tìm kiếm
          </div>
        </form>
        <div className="overflow-x-auto mb-8">
          <table className="w-full custom_teams_on_page min-w-[992px]">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên tuyển thủ</th>
                <th>Hiển thị</th>
                <th>Số lượng thành viên</th>
                <th>Tỉnh thành</th>
                <th>Thông tin chi tiết</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {teams.length > 0 ? (
                teams.map((teams: any, index: any) => {
                  return (
                    <tr key={index}>
                      <td>
                        <h3>{index + 1}</h3>
                      </td>
                      <td className="w-[30%]">
                        <h3 className="line-clamp-1">{teams.name}</h3>
                      </td>
                      <td>
                        <FontAwesomeIcon icon={faUser} />
                      </td>
                      <td>
                        <h3>{"0" + teams.member.length + "/05"}</h3>
                      </td>
                      <td>
                        <h3>{teams.location}</h3>
                      </td>
                      <td>
                        <button className="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center hover:scale-110">
                          Xem chi tiết
                        </button>
                      </td>
                      <td>
                        {teams.member.length === 5 ? (
                          <h3>Đã đủ thành viên</h3>
                        ) : (
                          <button className="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center hover:scale-110">
                            Xin gia nhập
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="flex items-center justify-center w-full text-[#657383]">
                    Không tìm thấy thông tin
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="text-white w-full flex items-center justify-center">
          <Pagination currentPage={0} totalItem={55} limit={15} />
        </div>
      </div>
    </section>
  );
}

export default Teams;
