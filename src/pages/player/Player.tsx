import axios from "axios";
import bgHeading from "../../assets/images/bg_heading.png";
import headingMemberOnPage from "../../assets/images/heading_member_on_page.png";
import icArrowDown from "../../assets/images/ic_arrow_down.png";
import icFacebok from "../../assets/images/icon_facebook.png";
import "./index.css";
import { useEffect, useState } from "react";

type Props = {};

function Player(props: Props) {
  const [players, setPlayers] = useState<[]>([]);
  const [playersAPI, setPlayersAPI] = useState<[]>([]);

  useEffect(() => {
    axios.get("./data/player_data.json").then((results) => {
      setPlayersAPI(results.data);
      setPlayers(results.data);
    });
  }, []);

  const [searchParam, setSearchParam] = useState({
    name: "",
    forte: "",
  });

  function handleSearch() {
    const playerFilter: any = playersAPI.filter((item: any) => {
      if (
        item.name
          .toLowerCase()
          .includes(searchParam.name.toLocaleLowerCase()) &&
        item.forte.toLowerCase().includes(searchParam.forte.toLocaleLowerCase())
      ) {
        return item;
      }
    });

    setPlayers(playerFilter);
  }

  return (
    <section className="bg-[#161d22] relative">
      <div className="absolute top-0 w-full">
        <img className="object-cover w-full" src={bgHeading} alt="" />
      </div>
      <div className="relative max-w-[1350px] w-full mx-auto pb-[5%] pt-[18.75%] px-3 sm:px-5 overflow-hidden">
        <div className="w-full px-5 mb-8 lg:mb-14">
          <img className="w-full" src={headingMemberOnPage} alt="" />
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
                  forte: e.target.value,
                });
              }}
              placeholder="Tìm theo vị trí"
              className="md:max-w-[230px] w-full py-4 px-5 rounded bg-[#353f48] text-[#959697] placeholder:text-[#959697]"
            >
              <option value="" selected disabled>
                Chọn vị trí sở trường
              </option>
              <option value="Tanker">Tanker</option>
              <option value="Attacker">Attacker</option>
              <option value="Supporter">Supporter</option>
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
        <div className="overflow-x-auto">
          <table className="w-full custom_member_on_page min-w-[992px]">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên tuyển thủ</th>
                <th>Nickname</th>
                <th>Vị trí</th>
                <th>Facebook</th>
                <th>Thông tin chi tiết</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {players.length > 0 ? (
                players.map((player: any, index: any) => {
                  return (
                    <tr key={index}>
                      <td>
                        <h3>{index + 1}</h3>
                      </td>
                      <td className="w-[30%]">
                        <h3 className="line-clamp-1">{player.name}</h3>
                      </td>
                      <td>
                        <h3>{player.nickname}</h3>
                      </td>
                      <td>
                        <h3>{player.forte}</h3>
                      </td>
                      <td>
                        <div className="flex justify-center cursor-pointer hover:scale-110">
                          <img src={icFacebok} alt="" />
                        </div>
                      </td>
                      <td>
                        <button className="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center hover:scale-110">
                          Xem chi tiết
                        </button>
                      </td>
                      <td>
                        <h3>{player.state}</h3>
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
      </div>
    </section>
  );
}

export default Player;
