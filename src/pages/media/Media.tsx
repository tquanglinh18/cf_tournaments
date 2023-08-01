import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import bgMedia from "../../assets/images/bg_heading.png";
import icNext from "../../assets/images/ic_next.png";
import icPrev from "../../assets/images/ic_prev.png";
import titleMedia from "../../assets/images/title_media.png";
import "../../assets/js/slick-carousel/slick-theme.min.css";
import "../../assets/js/slick-carousel/slick.min.css";
import ItemRound from "./component/ItemRound";

function Media() {
  const [media, setMedia] = useState<any>([]);
  const [indexSelected, setIndexSelected] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios
      .get("./data/media_data.json")
      .then((results) => {
        setMedia(results.data);
      })
      .catch((error) => {
        setMedia({});
      });
  }

  function handleSelected(index: number) {
    setIndexSelected(index);
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <div className="">
        <img src={icPrev} alt="" />
      </div>
    ),
    nextArrow: (
      <div className="">
        <img src={icNext} alt="" />
      </div>
    ),
  };

  console.log("🚀 ~ file: Media.tsx:28 ~ Media ~ media:", media);

  return (
    <section className="bg-[#161d22] text-white">
      <div className="relative">
        <div className="absolute w-full">
          <div className="">
            <img src={bgMedia} alt="" className="object-cover w-full" />
          </div>
        </div>
        <div className="relative w-full pb-[4%]">
          <div className=" max-w-[1350px] px-5 mx-auto">
            <div className="pt-[35%] w-full flex flex-col items-center mb-[5%]">
              <div className="w-full mx-auto mb-2 text-white">
                <div className="w-full mb-[6%]">
                  <img src={titleMedia} alt="" className="mx-auto" />
                </div>
                <div className="w-full">
                  <Slider {...settings}>
                    {media.map((media: any, index: number) => {
                      return (
                        <div
                          key={index}
                          onClick={() => handleSelected(index)}
                          className="px-2 cursor-pointer text-center tournaments-name selected"
                        >
                          <p
                            className={
                              indexSelected === index
                                ? "rounded bg-[#f75014] px-1 py-2 hover:bg-[#f75014]"
                                : "rounded bg-[#0f141a] px-1 py-2 hover:bg-[#f75014]"
                            }
                          >
                            {media.title}
                          </p>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            {media.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    indexSelected === index ? "relative" : "relative hidden"
                  }
                >
                  <div className="flex items-center mb-16 space-x-4 md:space-x-6 lg:space-x-8">
                    <div className="w-full h-[2px] bg-[#31404e]"></div>
                    <div className="py-4 px-6 min-w-[240px] md:min-w-[360px] lg:min-w-[480px] text-center bg-[#f75014] rounded">
                      <div className="text-base lg:text-[20px] xl:text-[24px]">
                        <p>{item.title}</p>
                      </div>
                    </div>
                    <div className="w-full h-[2px] bg-[#31404e]"></div>
                  </div>
                  <ItemRound round={item.media} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
