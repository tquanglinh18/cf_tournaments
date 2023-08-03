import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PopUpUpdateInfo from "../components/pop-up/PopUpUpdateInfo";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import Media from "../pages/media/Media";
import Player from "../pages/player/Player";
import Rank from "../pages/ranking/Rank";
import Teams from "../pages/teams/Teams";
import CreateTeams from "../pages/teams/create/CreateTeams";
import ListTeams from "../pages/teams/list-teams/ListTeams";
import ManageTeams from "../pages/teams/manage/ManageTeams";
import CreateTournaments from "../pages/tournaments/create/CreateTournaments";
import ListTournaments from "../pages/tournaments/list-tournaments/ListTournaments";
import MyTournaments from "../pages/tournaments/my-tournaments/MyTournaments";
import { selectUser } from "../redux/features/userSlice";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  const user = useSelector(selectUser);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/tournaments" element={<PopUpUpdateInfo />} />
        <Route
          path="/tournaments/create-tournaments"
          element={<CreateTournaments />}
        />
        <Route path="/tournaments/my-tournaments" element={<MyTournaments />} />
        <Route
          path="/tournaments/list-tournaments"
          element={<ListTournaments />}
        />

        <Route
          path="/teams"
          element={
            <ProtectedRoute user={user}>
              <Teams />
            </ProtectedRoute>
          }
        />

        <Route path="/teams/create-teams" element={<CreateTeams />} />
        <Route path="/teams/manage-teams" element={<ManageTeams />} />
        <Route path="/teams/list-teams" element={<ListTeams />} />

        <Route path="/player" element={<Player />} />

        <Route path="/rank" element={<Rank />} />
        <Route path="/rank/player-ranking" element={<Rank />} />
        <Route path="/rank/teams-ranking" element={<Rank />} />
        <Route path="/rank/total-ranking" element={<Rank />} />

        <Route path="media" element={<Media />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
