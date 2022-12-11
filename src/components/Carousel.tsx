import React from "react";
import Carousel from "react-material-ui-carousel";
import s1 from "../assets/pdf/1.png";
import s2 from "../assets/pdf/2.png";
import s3 from "../assets/pdf/3.png";
import s4 from "../assets/pdf/4.png";
import s5 from "../assets/pdf/5.png";
import s6 from "../assets/pdf/6.png";
import s7 from "../assets/pdf/7.png";
import s8 from "../assets/pdf/8.png";
import s9 from "../assets/pdf/9.png";
import styled from "@emotion/styled";

const slides = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

export const PDFCarousel = () => {
  return (
    <CarouselWrapper>
      <CarouselUI
        next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
        prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
      >
        {slides.map((slide, index) => (
          <SlideItem key={index} slide={slide} />
        ))}
      </CarouselUI>
    </CarouselWrapper>
  );
};

type SlideItemProps = {
  slide: string;
};

const SlideItem = ({ slide }: SlideItemProps) => {
  return <Img src={slide} alt={slide} />;
};

const CarouselWrapper = styled.div`
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
`;
const CarouselUI = styled(Carousel)`
  width: 400px;
  max-width: 100%;
  //   margin: 0 auto;
`;
const Img = styled.img`
  width: 400px;
  max-width: 100%;
  height: auto;
`;
