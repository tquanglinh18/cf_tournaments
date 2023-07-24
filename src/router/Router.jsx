import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home.jsx";
import Layout from "../pages/layout/Layout";
import Media from "../pages/media/Media";
import Player from "../pages/player/Player";
import Rank from "../pages/ranking/Rank";
import Teams from "../pages/teams/Teams";
import CreateTeams from "../pages/teams/create/CreateTeams";
import ListTeams from "../pages/teams/list-teams/ListTeams";
import ManageTeams from "../pages/teams/manage/ManageTeams";
import Tournaments from "../pages/tournaments/Tournaments";
import CreateTournaments from "../pages/tournaments/create/CreateTournaments";
import ListTournaments from "../pages/tournaments/list-tournaments/ListTournaments";
import MyTournaments from "../pages/tournaments/my-tournaments/MyTournaments";

const Router = () => {
    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="home" element={<Home />} />
  
            <Route path="tournaments" element={<Tournaments />} />
            <Route path="create-tournaments" element={<CreateTournaments />} />
            <Route path="my-tournaments" element={<MyTournaments />} />
            <Route path="list-tournaments" element={<ListTournaments />} />
  
            <Route path="teams" element={<Teams />} />
            <Route path="create-teams" element={<CreateTeams />} />
            <Route path="manage-teams" element={<ManageTeams />} />
            <Route path="list-teams" element={<ListTeams />} />
  
            <Route path="player" element={<Player />} />
  
            <Route path="rank" element={<Rank />} />
            <Route path="player-ranking" element={<CreateTeams />} />
            <Route path="teams-ranking" element={<ManageTeams />} />
            <Route path="total-ranking" element={<ListTeams />} />
  
          <Route path="media" element={<Media />} />
  
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    );
};

export default Router;