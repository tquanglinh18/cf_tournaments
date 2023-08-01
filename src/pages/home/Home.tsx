import axios from "axios";
import { useEffect, useState } from "react";
import SectionItem from "./component/SectionItem";
import SliderMain from "./component/slide/SliderMain";
import Footer from "../../components/footer/Footer";
import SubMenu from "./component/SubMenu";
import bgBannerFooter from "../../assets/images/banner_footer.png";
import RankTable from "./component/rank-table/RankTable";
import titleRanking from "../../assets/images/text_rank_heading.png";
import useScrollToSection from "../../hooks/useScrollToSection";

function Home() {
  const [listTournaments, setListTournaments] = useState<any>([]);
  const [listTop, setListTop] = useState<any>([]);

  useScrollToSection([
    {
      id: "outstanding-btn",
      idSection: "outstanding",
    },
    {
      id: "upcoming-btn",
      idSection: "upcoming",
    },
    {
      id: "happening-btn",
      idSection: "happening",
    },
    {
      id: "finished-btn",
      idSection: "finished",
    },
    {
      id: "ranking-btn",
      idSection: "rank-table",
    },
  ]);

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
        setListTop(results.data.slice(0, 2));
      })
      .catch((error) => {
        setListTop([]);
      });
  }, []);

  return (
    <div className="relative w-full mt-[72px]">
      <SubMenu />
      <div className="relative lg:ml-[75px] flex flex-col bg-[#161d22]">
        <div className="py-[4%]">
          <SliderMain />
        </div>
        <div className="container mx-auto">
          <div className="mb-[4%]">
            {listTournaments.map((tournament: any, index: any) => {
              return (
                <SectionItem
                  key={index}
                  type={tournament.type}
                  description={tournament.description}
                  data={tournament.data}
                />
              );
            })}
          </div>
          <div id="rank-table" className="w-full">
            <div className="w-full flex items-center justify-center mb-12">
              <img src={titleRanking} alt="" />
            </div>
            <div className="w-[80%] lg:w-[90%] mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2">
              {listTop.map((top: any, index: any) => {
                return (
                  <RankTable key={index} type={top.type} data={top.data} />
                );
              })}
            </div>
          </div>
          <div className="w-full mx-auto">
            <img src={bgBannerFooter} alt="" className="" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
