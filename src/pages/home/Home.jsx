import axios from "axios";
import { useEffect, useState } from "react";
import SectionItem from "./component/SectionItem";
import SliderMain from "./component/slide/SliderMain";
import Footer from "../../components/footer/Footer";
import "./index.js";
import SubMenu from "./component/SubMenu";
import bgBannerFooter from "../../assets/images/banner_footer.png";
import RankTable from "./component/rank-table/RankTable";

Home.propTypes = {};

function Home(props) {
  const [listTournaments, setListTournaments] = useState([]);
  const [listTop, setListTop] = useState([]);

  useEffect(() => {
    axios
      .get("./data/home_data.json")
      .then((results) => {
        setListTournaments(results.data);
      })
      .catch((error) => {
        setListTournaments([]);
      });
    axios
      .get("./data/rank_data.json")
      .then((results) => {
        setListTop(results.data.slice(0,2));
      })
      .catch((error) => {
        setListTop([]);
      });
  }, []);

  return (
    <div className="relative w-full">
      <SubMenu />
      <div className="relative lg:ml-[75px] flex flex-col bg-[#161d22]">
        <div className="py-[4%]">
          <SliderMain />
        </div>
        <div className="container mx-auto">
          {listTournaments.map((tournament, index) => {
            return (
              <SectionItem
                key={index}
                id={index}
                type={tournament.type}
                description={tournament.description}
                data={tournament.data}
              />
            );
          })}

          <div className="w-full mb-[2%]">
            <div className="w-[80%] lg:w-[90%] mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2">
              {listTop.map((top, index) => {
                return (
                  <RankTable key={index} type={top.type} data={top.data} />
                );
              })}
            </div>
            <div className="w-full mx-auto">
              <img src={bgBannerFooter} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
