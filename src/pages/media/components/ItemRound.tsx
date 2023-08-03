type Props = {
  round: any[];
};

function ItemRound(props: Props) {
  const { round } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {Array.isArray(round) &&
        round?.length !== 0 &&
        round.map((item, index) => {
          return (
            <div key={index} className={"item-media-" + index}>
              <div className="w-full px-2 py-1 border border-[#253138] bg-[#0e1319] mb-1 shadow-inner text-center">
                Round {item.round} - {item.time}
              </div>
              <div className="w-full border border-[#253138] mb-1">
                <div className="mb-1">
                  <img
                    src={item.url_banner}
                    alt=""
                    className="object-cover w-full aspect-video"
                  />
                </div>
                <div className="w-full p-2 cursor-pointer">
                  <button className="bg-[#f75014] w-full p-2 rounded text-center">
                    Xem ngay
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ItemRound;
