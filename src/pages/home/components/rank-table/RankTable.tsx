import logoCF from "../../../../assets/images/logo_cf.png";
import titleTopPlayer from "../../../../assets/images/title_top_player.png";
import titleTopTeams from "../../../../assets/images/title_top_teams.png";
import "./index.scss";

type Props = {
  type: string;
  data: any[];
};

function RankTable(props: Props) {
  const { type, data } = props;
  return (
    <div
      className={
        type === "player"
          ? "border-[#ffc421] w-full border bg-[#141a1e] text-[#5a6776]"
          : "border-[#f75014] w-full border bg-[#141a1e] text-[#5a6776]"
      }
    >
      <div className="bg-[#141a1e] mx-auto">
        <div className="w-full my-[5%]">
          <img
            src={type === "player" ? titleTopPlayer : titleTopTeams}
            alt=""
            className="mx-auto"
          />
        </div>
        <table className="custom_table w-full">
          <thead className="w-full text-[10px] mb-4">
            <tr>
              <th className="w-[15%] text-[8px] md:text-[12px] xl:text-[14px]">
                Hạng
              </th>
              <th className="text-[8px] md:text-[12px] xl:text-[14px]">
                Tên {type === "player" ? "tuyển thủ" : "đội tuyển"}
              </th>
              <th className="w-[15%] text-[8px] md:text-[12px] xl:text-[14px]">
                Tổng điểm
              </th>
              <th className="w-[15%] text-[8px] md:text-[12px] xl:text-[14px]">
                Số trận thắng
              </th> 
              <th className="w-[15%] text-[8px] md:text-[12px] xl:text-[14px]">
                Số giải tham dự
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr key={index} className="w-full text-[12px] text-center">
                  <td className="w-[15%] text-[8px] md:text-[12px] xl:text-[14px]">
                    {value.rank}
                  </td>
                  <td className="flex justify-center items-center space-x-2">
                    <div className="w-[20px] h-[20px] md:w-[32px] md:h-[32px] lg:w-[48px] lg:h-[48px] flex items-center">
                      <img
                        src={logoCF}
                        alt=""
                        className="object-contain w-full"
                      />
                    </div>
                    <p className="text-[8px] md:text-[12px] w-full line-clamp-1 text-start">
                      {value.name}
                    </p>
                  </td>
                  <td className="w-[15%] text-[8px] md:text-[12px] xl:text-[14px]">
                    {value.total_score}
                  </td>
                  <td className="w-[15%] text-[8px] md:text-[12px] xl:text-[14px]">
                    {value.total_match_win}
                  </td>
                  <td className="w-[15%] text-[8px] md:text-[12px] xl:text-[14px]">
                    {value.total_tournaments}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RankTable;
