import PropTypes from "prop-types";
import icCaption from "../../../assets/images/ic_caption.png";
import icPrize from "../../../assets/images/ic_prize.png";
import icTime from "../../../assets/images/ic_time.png";
import icTotalTeam from "../../../assets/images/ic_total_team.png";
import lineSpace from "../../../assets/images/line_space.png";

TournamentItem.propTypes = {
  tournament: PropTypes.object,
};

TournamentItem.defaultProps = {
  tournament: {},
};

function TournamentItem(props) {
  const { tournament } = props;
  return (
    <div className="bg-[#0f141a] p-2 text-white mx-2">
      <div className="mb-2">
        <img
          src={tournament.url_banner}
          alt="tournament_banner"
          className="w-full aspect-video rounded"
        />
      </div>
      <div className="mb-2 h-[60px] line-clamp-2 text-lg">
        {tournament.name}
      </div>
      <div className="flex items-center mb-4">
        <div className="mx-2">
          <img src={icTime} alt="" />
        </div>
        <p className="text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]">
          Thời gian diễn ra: {tournament.start_at.toString()} -{" "}
          {tournament.end_at.toString()}
          .2023
        </p>
      </div>
      <div className="flex items-center justify-center mb-8">
        <div className="bg-[#31404e] px-2 py-4 text-center w-[30%] rounded">
          <p className="text-[8px] md:text-[10px] lg:text-[12px] line-clamp-1">
            Chế độ chơi
          </p>
          <p className="text-[#d5391b] text-[10px] md:text-[14px] lg:text-[14px] xl:text-base line-clamp-1">
            {tournament.game_mode}
          </p>
        </div>
        <div className="bg-[#1c242c] px-1 py-4 text-center w-[40%] scale-110 rounded shadow-lg">
          <div className="flex items-center justify-center">
            <div className="w-[8px] h-[8px] md:h-[10px] md:w-[10px] lg:w-[16px] lg:h6[12px]">
              <img
                src={icPrize}
                alt=""
                className="object-cover aspect-square"
              />
            </div>
            <p className="text-[8px] md:text-[10px] ml-1 line-clamp-1">
              Giải thưởng (VND)
            </p>
          </div>
          <p className="text-[14px] xl:text-base text-[#54dc72] font-bold">
            {tournament.prize.toString()}
          </p>
        </div>
        <div className="bg-[#31404e] px-2 py-4 text-center w-[30%] rounded">
          <p className="text-[8px] md:text-[10px] lg:text-[12px] line-clamp-1">
            Hình thức
          </p>
          <p className="text-[#ffc000] text-[10px] md:text-[14px] xl:text-base line-clamp-1">
            {tournament.form}
          </p>
        </div>
      </div>
      <div className="w-full mb-4">
        <img src={lineSpace} alt="" className="w-full" />
      </div>
      <div className="flex justify-between space-x-4">
        <div className="max-w-[50%] flex bg-[#1f252b] justify-center items-center py-1 px-2 rounded">
          <div className="w-[16px] h-[16px]">
            <img
              src={icCaption}
              alt=""
              className="object-contain aspect-square w-[16px] h-[16px]"
            />
          </div>
          <p className="ml-2 w-full text-[10px] xl:text-[14px] line-clamp-1">
            {tournament.create_by}
          </p>
        </div>
        <div className="max-w-[50%] flex items-center justify-center px-2 py-1 rounded">
          <div className="w-[16px] h-[16px]">
            <img
              src={icTotalTeam}
              alt=""
              className="object-contain aspect-square w-[16px] h-[16px]"
            />
          </div>
          <p className="ml-2 w-full text-[10px] xl:text-[14px] line-clamp-1">
            {tournament.total_teams.toString()} Team tham dự
          </p>
        </div>
      </div>
    </div>
  );
}

export default TournamentItem;
