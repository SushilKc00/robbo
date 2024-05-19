"use client";
import Image, { StaticImageData } from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Qr = "/images/Qr.png";
export interface RightDataProps {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  heading: string;
  subheading: string;
  title?: string;
  description: string;
  peopleGroup?: {
    title: string;
    image: {
      src: string | StaticImageData;
      alt: string;
    };
  };
  event?: {
    venue: string;
    time: string;
  };
  sliderTitle?: string;
  images?: {
    src: string;
    alt: string;
  }[];

  items?: {
    title: string;
    date: string;
    nameBy: string;
    image: {
      src: string | StaticImageData;
      alt: string;
    };
  }[];
}

function RightContainer({
  currentTab,
  heading,
  subheading,
  title,
  description,
  peopleGroup,
  event,
  sliderTitle,
  images,
  items,
}: RightDataProps) {
  return (
    <section className="relative h-full">
      <div className="lg:px-32 px-6 lg:py-6 pt-14">
        <h2 className="text-[2rem] font-bold text-white">{heading}</h2>
      </div>

      <div className="lg:px-32 px-6 flex flex-col gap-5 mt-6">
        {currentTab == "events" ? (
          <h2 className="text-white font-extrabold font-lexend text-[3.4rem] leading-[3.8rem]">
            {subheading}
          </h2>
        ) : (
          <h2 className="text-white font-extrabold font-lexend text-[3.4rem] leading-[3.8rem] w-[50%]">
            {subheading}
          </h2>
        )}

        {event && (
          <div className="flex md:flex-row flex-col items-center md:gap-12 gap-4">
            <span className="text-white text-xl font-semibold flex items-center gap-2">
              <LocationIcon />
              {event.venue}
            </span>
            <span className="text-white text-xl font-semibold flex items-center gap-2">
              <ClockIcon />
              {event.time}
            </span>
          </div>
        )}
        {title && <h3 className="text-white font-bold font-lexend">{title}</h3>}

        <p className="text-white font-lexend">{description}</p>

        {peopleGroup && (
          <div className="flex gap-2 items-center">
            <Image
              src={peopleGroup?.image.src}
              alt="people-group"
              width={130}
              height={60}
            />
            <p className="text-white text-md font-semibold font-lexend">
              {peopleGroup?.title}
            </p>
          </div>
        )}

        {sliderTitle && (
          <h3 className="text-white text-2xl font-bold">{sliderTitle}</h3>
        )}
      </div>

      <div className="lg:pl-32 pl-6 mt-16">
        <div className="w-full relative">
          {currentTab == "events" ? (
            <Swiper
              spaceBetween={25}
              slidesPerView={2}
              centeredSlides={true}
              loop={true}
              effect={"coverflow"}
              speed={600}
              autoplay={{
                delay: 3000,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
              }}
              modules={[Autoplay, EffectCoverflow]}
              className="w-full mx-auto"
            >
              {images?.map((item, index) => (
                <SwiperSlide key={index}>
                  <ArtistLineUpCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              spaceBetween={25}
              slidesPerView={2}
              centeredSlides={true}
              loop={true}
              speed={600}
              autoplay={{
                delay: 3000,
              }}
              modules={[Autoplay]}
            >
              {items?.map((item, index) => (
                <SwiperSlide key={index}>
                  <CollectiblesCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-4 md:items-center md:justify-between mt-10 lg:pl-32 pl-5 pr-4">
        <div>
          <div className="flex justify-center">
            <Image
              src={Qr}
              alt="Qr-code"
              className="object-contain"
              width={145}
              height={40}
            />
          </div>
        </div>
        <button className="bg-[#ffca5f] md:text-xl text-lg text-black-primary rounded-full font-bold px-6 py-2 ">
          Join Watch list
        </button>
      </div>

      <div className="absolute top-0 left-0 lg:h-full h-10 lg:w-14 w-full bg-[#b9a0ff] flex lg:flex-col gap-6 justify-center lg:text-xl text-sm font-semibold items-center text-black">
        <p className="vertical-text-orientaiton text-center stripe-animate">
          Bus tour , JLN Stadium , Delhi
        </p>
        <div className="stripe-animate">
          <StarIcon />
        </div>
        <p className="vertical-text-orientaiton text-center stripe-animate px-2">
          Collection Live : Meta Lives , live on astrix
        </p>
      </div>
    </section>
  );
}

const StarIcon = () => {
  return (
    <svg
      width="30"
      height="35"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.34293 12.8931L16.9889 17.2764L12.3056 2.73094L18.789 0.9783L22.2225 15.9151L32.4994 4.54494L37.3068 9.23481L26.1292 19.6541L41.0545 22.9636L39.3785 29.4061L24.7325 25.0229L29.4158 39.5683L22.9324 41.3209L19.499 26.3842L9.22206 37.7543L4.41461 33.0644L15.5923 22.6451L0.666964 19.3356L2.34293 12.8931Z"
        fill="#1A1D21"
      />
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_694"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="27"
        height="27"
      >
        <rect width="27" height="27" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_694)">
        <path
          d="M13.5 13.5C14.1187 13.5 14.6484 13.2797 15.0891 12.8391C15.5297 12.3984 15.75 11.8687 15.75 11.25C15.75 10.6313 15.5297 10.1016 15.0891 9.66094C14.6484 9.22031 14.1187 9 13.5 9C12.8813 9 12.3516 9.22031 11.9109 9.66094C11.4703 10.1016 11.25 10.6313 11.25 11.25C11.25 11.8687 11.4703 12.3984 11.9109 12.8391C12.3516 13.2797 12.8813 13.5 13.5 13.5ZM13.5 21.7688C15.7875 19.6688 17.4844 17.7609 18.5906 16.0453C19.6969 14.3297 20.25 12.8062 20.25 11.475C20.25 9.43125 19.5984 7.75781 18.2953 6.45469C16.9922 5.15156 15.3938 4.5 13.5 4.5C11.6062 4.5 10.0078 5.15156 8.70469 6.45469C7.40156 7.75781 6.75 9.43125 6.75 11.475C6.75 12.8062 7.30313 14.3297 8.40938 16.0453C9.51562 17.7609 11.2125 19.6688 13.5 21.7688ZM13.5 24.75C10.4812 22.1812 8.22656 19.7953 6.73594 17.5922C5.24531 15.3891 4.5 13.35 4.5 11.475C4.5 8.6625 5.40469 6.42188 7.21406 4.75313C9.02344 3.08438 11.1188 2.25 13.5 2.25C15.8812 2.25 17.9766 3.08438 19.7859 4.75313C21.5953 6.42188 22.5 8.6625 22.5 11.475C22.5 13.35 21.7547 15.3891 20.2641 17.5922C18.7734 19.7953 16.5188 22.1812 13.5 24.75Z"
          fill="#E8E9E9"
        />
      </g>
    </svg>
  );
};

const ClockIcon = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_697"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="27"
        height="27"
      >
        <rect width="27" height="27" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_697)">
        <path
          d="M13.5 24.75C12.0938 24.75 10.7766 24.4828 9.54844 23.9484C8.32031 23.4141 7.25156 22.6922 6.34219 21.7828C5.43281 20.8734 4.71094 19.8047 4.17656 18.5766C3.64219 17.3484 3.375 16.0312 3.375 14.625C3.375 13.2187 3.64219 11.9016 4.17656 10.6734C4.71094 9.4453 5.43281 8.37655 6.34219 7.46718C7.25156 6.5578 8.32031 5.83593 9.54844 5.30155C10.7766 4.76718 12.0938 4.49999 13.5 4.49999C14.9063 4.49999 16.2234 4.76718 17.4516 5.30155C18.6797 5.83593 19.7484 6.5578 20.6578 7.46718C21.5672 8.37655 22.2891 9.4453 22.8234 10.6734C23.3578 11.9016 23.625 13.2187 23.625 14.625C23.625 16.0312 23.3578 17.3484 22.8234 18.5766C22.2891 19.8047 21.5672 20.8734 20.6578 21.7828C19.7484 22.6922 18.6797 23.4141 17.4516 23.9484C16.2234 24.4828 14.9063 24.75 13.5 24.75ZM16.65 19.35L18.225 17.775L14.625 14.175V8.99999H12.375V15.075L16.65 19.35ZM6.3 2.64374L7.875 4.21874L3.09375 8.99999L1.51875 7.42499L6.3 2.64374ZM20.7 2.64374L25.4813 7.42499L23.9063 8.99999L19.125 4.21874L20.7 2.64374ZM13.5 22.5C15.6938 22.5 17.5547 21.7359 19.0828 20.2078C20.6109 18.6797 21.375 16.8187 21.375 14.625C21.375 12.4312 20.6109 10.5703 19.0828 9.04218C17.5547 7.51405 15.6938 6.74999 13.5 6.74999C11.3063 6.74999 9.44531 7.51405 7.91719 9.04218C6.38906 10.5703 5.625 12.4312 5.625 14.625C5.625 16.8187 6.38906 18.6797 7.91719 20.2078C9.44531 21.7359 11.3063 22.5 13.5 22.5Z"
          fill="#E8E9E9"
        />
      </g>
    </svg>
  );
};

const CollectiblesCard = ({
  title,
  nameBy,
  date,
  image,
}: {
  title: string;
  nameBy: string;
  date: string;
  image: { src: string | StaticImageData; alt: string };
}) => {
  return (
    <div className="p-3 bg-[#b9a0ff] rounded-xl">
      <div className="flex items-center justify-between">
        <span className="text-[0.55rem] font-bold bg-black-primary text-white px-3 rounded-full">
          {date}
        </span>
        <span className="text-[0.65rem] font-medium font-inter">{nameBy}</span>
      </div>

      <h2 className="text-center text-sm font-medium mt-2">{title}</h2>

      <div className="relative w-full aspect-[4/4.6] border border-black-primary rounded-xl mt-2">
        <Image
          src={image.src}
          alt="virtual-game"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

const ArtistLineUpCard = ({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) => {
  return (
    <div className="w-full relative aspect-[4/5]">
      <Image
        src={src}
        alt="girl"
        fill
        className="w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default RightContainer;
