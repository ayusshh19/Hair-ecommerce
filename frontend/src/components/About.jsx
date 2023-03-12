import React from "react";
import styled from "styled-components";
import mainlogo from "../assets/image5.jpeg";
import baby from "../assets/cardimages/baby.png";
import hairloss from "../assets/cardimages/hairloss.png";
import natural from "../assets/cardimages/natural.png";
import regrow from "../assets/cardimages/regrow.png";
import repair from "../assets/cardimages/repair.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import Cards from "../utils/Cards";
export default function About() {
  SwiperCore.use([Autoplay]);
  return (
    <Aboutcomponent>
      <div className="Aboutcontent">
        <div className="aboutleft">
          <img src={mainlogo} alt="" srcset="" />
        </div>
        <div className="aboutright">
          <h1>About Us</h1>
          <h3>
            Sadhana Herbal Product in Kalyan is one of the leading businesses in
            the Hair Oil Manufacturers. Also known for Ayurvedic Doctors, Hair
            Oil Dealers, Hair Oil Manufacturers, Herbal Face Pack Manufacturers,
            Ayurvedic Face Pack Dealers, Herbal Oil Manufacturers, Ayurvedic
            Hair Oil Stockists, Ayurvedic Hair Oil Dealers and much more. Find
            Address, Contact Number, Reviews & Ratings, Photos, Maps of Sadhana
            Herbal Product, Kalyan.
          </h3>
        </div>
      </div>
      <div className="sliderabout">
        <Swiper
          breakpoints={{
            576: {
              width: 276,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1900: {
              width: 1008,
              slidesPerView: 4,

            }
          }}
          //   centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        //   navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
        >
          <SwiperSlide>
            <Cards image={natural} text={"Our Product is 100% Natural"} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards image={hairloss} text={"It helps to prevent hairloss"} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards image={regrow} text={"It can be beneficial for bald people to regrow their hair back"} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards image={repair} text={"It repairs our hair roots naturally"} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards image={baby} text={"It can be used for small kids"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </Aboutcomponent>
  );
}

const Aboutcomponent = styled.div`
  width: 100%;
  height: 90vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  .Aboutcontent {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width:990px) {
    .Aboutcontent {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
  .aboutleft {
    width: 100% !important;
    height: 50%;
  }

  .aboutleft img {
    width:  100%;
    height: 100%;
  }
  .aboutright {
    width: 100% !important;
    height: 100% !important;
    box-sizing: border-box;
    text-align: center;
  }
  .sliderabout {
    width: 100%;
    margin: 0;
  }
  .sliderabout {
    width: 100% !important;
    margin: 0 !important;
  }
  }
  .aboutleft {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .aboutleft img {
    width: 30%;
    height: 80%;
  }

  .aboutright {
    width: 50%;
    height: 50%;
    box-sizing: border-box;
  }
  .sliderabout {
    width: 80%;
    margin: auto;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
