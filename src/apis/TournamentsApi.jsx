import axiosClient from "./axiosClient";

class TournamentsApi {
  getHomeData = (params) => {
    const url = "/home_data.json";
    return axiosClient.get(url, { params });
  };

  getMediaData = (params) => {
    const url = "/media_data.json";
    return axiosClient.get(url, { params });
  };

  getPlayerData = (params) => {
    const url = "/player_data.json";
    return axiosClient.get(url, { params });
  };

  getRankData = (params) => {
    const url = "/rank_data.json";
    return axiosClient.get(url, { params });
  };

  getTeamsData = (params) => {
    const url = "/teams_data.json";
    return axiosClient.get(url, { params });
  };

  getUserData = (params) => {
    const url = "/user_data.json";
    return axiosClient.get(url, { params });
  };
}
const tournamentsApi = new TournamentsApi();
export default tournamentsApi;
