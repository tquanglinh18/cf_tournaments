import {
  faBell,
  faList,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icHome from "../../assets/images/ic_home.png";
import icMedia from "../../assets/images/ic_media.png";
import icPlayer from "../../assets/images/ic_player.png";
import icRank from "../../assets/images/ic_rank.png";
import icTeam from "../../assets/images/ic_team.png";
import icTournaments from "../../assets/images/ic_tournaments.png";
import logoCF from "../../assets/images/logo_cf.png";
import HeaderItem from "./component/HeaderItem";
import MenuMobile from "./component/MenuMobile";
import NotifyItem from "./component/NotifyItem";
import "./index.css";
import "./index.js";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="">
      <div className="fixed text-white bg-[#0f141a] top-0 z-50 w-full h-[72px] flex justify-between items-center">
        <div className="flex justify-between h-full lg:justify-start xl:justify-start w-full bg-[#0f141a] itmes-center">
          <div className="flex items-center w-[74px] p-2">
            <img src={logoCF} alt="" className="w-full" />
          </div>
          <div className="hidden lg:flex">
            <HeaderItem
              id={"home"}
              name={"Trang chủ"}
              urlIcon={icHome}
              subMenus={[]}
            />
            <HeaderItem
              id={"tournaments"}
              name={"Giải đấu"}
              urlIcon={icTournaments}
              subMenus={[
                {
                  title: "Tạo giải đấu",
                  icon: faPlus,
                },
                {
                  title: "Giải đấu của tôi",
                  icon: faMagnifyingGlass,
                },
                {
                  title: "Danh sách giải đấu",
                  icon: faMagnifyingGlass,
                },
              ]}
            />
            <HeaderItem
              id={"teams"}
              name={"Đội tuyển"}
              urlIcon={icTeam}
              subMenus={[
                {
                  title: "Tạo đội tuyển",
                  icon: faPlus,
                },
                {
                  title: "Quản lí đội tuyển",
                  icon: faMagnifyingGlass,
                },
                {
                  title: "Danh sách đội tuyển",
                  icon: faMagnifyingGlass,
                },
              ]}
            />
            <HeaderItem
              id={"player"}
              name={"Thành viên"}
              urlIcon={icPlayer}
              subMenus={[]}
            />
            <HeaderItem
              id={"rank"}
              name={"Bảng xếp hạng"}
              urlIcon={icRank}
              subMenus={[
                {
                  title: "BXH tuyển thủ",
                  icon: faMagnifyingGlass,
                },
                {
                  title: "BXH đội tuyển",
                  icon: faMagnifyingGlass,
                },
                {
                  title: "BXH tổng",
                  icon: faMagnifyingGlass,
                },
              ]}
            />
            <HeaderItem
              id={"media"}
              name={"Media"}
              urlIcon={icMedia}
              subMenus={[]}
            />
          </div>
        </div>
        <div className="flex items-center justify-center px-8 ">
          <div className="flex items.center justify-center space-x-4">
            <div className="flex items-center justify-center ">
              <div id="notify-btn" className="">
                <FontAwesomeIcon
                  icon={faBell}
                  className="cursor-pointer"
                  size="xl"
                />
              </div>
              <div
                id="notify-list"
                className="absolute hidden bg-black text-white w-[90%] lg:w-[40%] lg:translate-x-0 top-[72px] left-[50%] -translate-x-[50%] max-h-[350px] overflow-y-auto"
              >
                <NotifyItem type={"success"} message={"hehee"} />
                <NotifyItem type={"error"} message={"oh n o"} />
                <NotifyItem type={"success"} message={"hehee"} />
                <NotifyItem type={"error"} message={"oh n o"} />
                <NotifyItem type={"success"} message={"hehee"} />
                <NotifyItem type={"error"} message={"oh n o"} />
                <NotifyItem type={"success"} message={"hehee"} />
                <NotifyItem type={"error"} message={"oh n o"} />
                <NotifyItem type={"success"} message={"hehee"} />
                <NotifyItem type={"error"} message={"oh n o"} />
                <NotifyItem type={"success"} message={"hehee"} />
                <NotifyItem type={"error"} message={"oh n o"} />
              </div>
            </div>
            <div
              className="flex items-center px-4 cursor-pointer h-[24px] lg:hidden"
              id="menu_icon_mobile"
            >
              <FontAwesomeIcon icon={faList} size="xl" />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center justify-center px-8 space-x-8">
              <div className="bg-[#f75014] px-2 py-1 rounded min-w-[120px] text-center">
                TuanNA
              </div>
              <div className="cursor-pointer">Thoát</div>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-mobile" className="hidden">
        <MenuMobile nickName={"TuanNA"} />
      </div>
    </div>
  );
}

export default Header;
