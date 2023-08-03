import { CustomArrowProps } from "react-slick";
import icNext from "../../../assets/images/ic_next.png";
import icPrev from "../../../assets/images/ic_prev.png";

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props}>
    <img src={icNext} alt="" />
  </div>
);

const PrevArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props}>
    <img src={icPrev} alt="" />
  </div>
);

export { NextArrow, PrevArrow };
