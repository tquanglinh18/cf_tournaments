import Slider from "react-slick";
import icNext from "../../../assets/images/ic_next.png";
import icPrev from "../../../assets/images/ic_prev.png";
import icFinished from "../../../assets/images/ic_star_finished.png";
import icHappening from "../../../assets/images/ic_star_happening.png";
import icOutstanding from "../../../assets/images/ic_star_outstanding.png";
import icUpcoming from "../../../assets/images/ic_star_upcoming.png";
import TournamentItem from "./TournamentItem";

type Props = {
  type: any;
  description: any;
  data: any[];
};

const headingColor: Record<string, string> = {
  outstanding: "#ffc421",
  upcoming: "#1882ff",
  happening: "#ff4e00",
  finished: "#33c485",
};
const headingIcon: Record<string, string> = {
  outstanding: icOutstanding,
  upcoming: icUpcoming,
  happening: icHappening,
  finished: icFinished,
};

function SectionItem(props: Props) {
  const { type, data, description } = props;
  var settingsSubSlide = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id={type} className="w-full py-8">
      <div className="container flex flex-col mx-auto">
        <div className="w-[90%] mx-auto flex items-center mb-8">
          <div className="mr-2">
            <img src={headingIcon[type]} alt="" />
          </div>
          <p style={{ color: headingColor[type] }} className={`text-[20px]`}>
            {description}
          </p>
        </div>
        <div className="w-[75%] sm:w-[85%] lg:w-[95%] mx-auto slide-main">
          <Slider {...settingsSubSlide}>
            {data.map((item, index) => {
              return <TournamentItem key={index} tournament={item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-next slick-prev--home slick-arrow" onClick={onClick}>
      <img src={icNext} alt="" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-prev slick-prev--home slick-arrow" onClick={onClick}>
      <img src={icPrev} alt="" />
    </div>
  );
};

export default SectionItem;
