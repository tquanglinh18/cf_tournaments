import PropTypes from "prop-types";
import Slider from "react-slick";
import icNext from "../../../assets/images/ic_next.png";
import icPrev from "../../../assets/images/ic_prev.png";
import TournamentItem from "./TournamentItem";

SectionItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  data: PropTypes.array,
};

SectionItem.defaultProps = {
  type: "",
  id: 0,
  description: "",
  data: [],
};

function SectionItem(props) {
  const { type, id, data, description } = props;
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
        <div className="w-[90%] mx-auto flex items-center text-[#ffc421] mb-8">
          <div className="mr-2">
            <img src="./assets/images/ic_star_outstanding.png" alt="" />
          </div>
          <p className="text-[20px]">{description}</p>
        </div>
        <div className="w-[75%] sm:w-[85%] lg:w-[95%] mx-auto">
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

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next slick-arrow" onClick={onClick}>
      <img src={icNext} alt="" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev slick-arrow" onClick={onClick}>
      <img src={icPrev} alt="" />
    </div>
  );
};

export default SectionItem;
