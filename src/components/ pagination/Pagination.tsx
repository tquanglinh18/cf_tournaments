import { useState } from "react";
import icNext from "../../assets/images/ic_next.png";
import icPrev from "../../assets/images/ic_prev.png";

type Props = {
  currentPage: number;
  totalItem: number;
  limit: number;
};

function Pagination(props: Props) {
  const [indexSelected, setIndexSelected] = useState<number>(0);

  const countPage = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  function handleNextClicked() {
    setIndexSelected(indexSelected + 1);
  }

  function handlePrevClicked() {
    setIndexSelected(indexSelected - 1);
  }

  function handleClickPage(index: number) {
    setIndexSelected(index);
  }
  return (
    <div className="flex justify-center items-center space-x-8">
      <button
        className="h-[32px] w-[32px] cursor-pointer"
        disabled={indexSelected === 0}
        onClick={handlePrevClicked}
      >
        <img
          src={icPrev}
          alt=""
          className="object-contain aspect-square w-full"
        />
      </button>
      <div className="flex justify-center items-center">
        {countPage.map((page, index) => {
          return (
            <div
              onClick={() => handleClickPage(index)}
              className={`rounded-full ${
                index === indexSelected ? "bg-[#f75014]" : "bg-[#253138]"
              }  h-[32px] w-[32px] flex justify-center items-center text-white cursor-pointer mx-1`}
            >
              {page}
            </div>
          );
        })}
      </div>

      <button
        className="h-[32px] w-[32px] cursor-pointer"
        disabled={indexSelected === countPage.length - 1}
        onClick={handleNextClicked}
      >
        <img
          src={icNext}
          alt=""
          className="object-contain aspect-square w-full"
        />
      </button>
    </div>
  );
}

export default Pagination;
