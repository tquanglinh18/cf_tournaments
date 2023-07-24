import React, { useEffect, useState } from "react";
import icNext from "../../../../assets/images/ic_next.png";
import icPrev from "../../../../assets/images/ic_prev.png";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import { Slide } from "./SliderJS";
import "./SliderCSS.css";

const SliderMain = () => {
  const data = [
    {
      image: "https://picsum.photos/200/300/?random=1",
      text: "hello",
    },
    {
      image: "https://picsum.photos/200/300/?random=12",
      text: "lel",
    },
    {
      image: "https://picsum.photos/200/300/?random=13",
      text: "kak",
    },
    {
      image: "https://picsum.photos/200/300/?random=15",
      text: "kk",
    },
    {
      image: "https://picsum.photos/200/300/?random=10",
      text: "hello",
    },
  ];
  const [widthContainer, setWidthContainer] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidthContainer(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const ref = React.useRef(StackedCarousel);
  return (
    <div className="card relative">
      <div className="w-full">
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={(widthContainer * 65) / 100}
                carouselWidth={width - 72}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                autoPlay={200}
              />
            );
          }}
        />
        <div
          className="card-button left-[10%] z-30"
          onClick={() => ref.current?.goBack()}
        >
          <img src={icPrev} alt="" />
        </div>
        <div
          className="card-button right-[10%] z-30"
          onClick={() => ref.current?.goNext()}
        >
          <img src={icNext} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SliderMain;
