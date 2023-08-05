type Props = {
  type: string;
  data: any[];
  isShow: boolean;
};

function TableRank(props: Props) {
  const { type, data, isShow } = props;
  return (
    <div
      className={`overflow-x-auto tab_table_ranking ${
        isShow ? "block" : "hidden"
      }`}
      id={type}
    >
      <table className="w-full custom_ranking_view_top min-w-[767px] lg:min-w-0">
        <thead>
          <tr>
            <th>
              <div>Hạng</div>
            </th>
            <th>
              <div>Tên {type === "player" ? "tuyển thủ" : "đội tuyển"}</div>
            </th>
            <th>
              <div>Tổng điểm</div>
            </th>
            <th>
              <div>Số trận thắng</div>
            </th>
            <th>
              <div>Số giải thắng</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData) => {
            return (
              <tr key={rowData.rank}>
                <td>
                  {rowData.rank < 4 ? <div></div> : <div>{rowData.rank}</div>}
                </td>
                <td className="w-[40%]">
                  <div>
                    <h3 className="line-clamp-1">{rowData.name}</h3>
                  </div>
                </td>
                <td className="w-[15%]">
                  <div>{rowData.total_score}</div>
                </td>
                <td className="w-[15%]">
                  <div>{rowData.total_match_win}</div>
                </td>
                <td className="w-[15%]">
                  <div>{rowData.total_tournaments}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableRank;
