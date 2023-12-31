import { useEffect, useState } from "react";
import tournamentsApi from "../../apis/TournamentsApi";
import bgBannerFooter from "../../assets/images/banner_footer.png";
import titleRanking from "../../assets/images/text_rank_heading.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import useScrollToSection from "../../hooks/useScrollToSection";
import SectionItem from "./components/SectionItem";
import SubMenu from "./components/SubMenu";
import RankTable from "./components/rank-table/RankTable";
import SliderMain from "./components/slide/SliderMain";
import "./index.scss";

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
    const getHomeData = async () => {
      const responseRank = await tournamentsApi.getRankData();
      setListTop(responseRank);

      const responseHomeData = await tournamentsApi.getHomeData();
      setListTournaments(responseHomeData);
    };

    setListTop(listTop.slice(0, 2));
    
    getHomeData();
  }, []);

  return (
    <div className="">
      <Header />
      <div className="relative w-full mt-[72px]">
        <SubMenu />
        <div className="relative lg:ml-[75px] flex flex-col bg-[#161d22]">
          <div className="py-[4%] shadow-inner-section">
            <SliderMain />
          </div>
          <div className="">
            <div className="mb-[4%]">
              {listTournaments.map((tournament: any, index: any) => {
                return (
                  <SectionItem
                    index={index}
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
    </div>
  );
}

export default Home;
