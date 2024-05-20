"use client";

import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

import Barbe from "../../public/Images/Barbe.png";
import Girl from "../../public/Images/Girl.png";
import LunarPlace from "../../public/Images/Lunar Place.png";
import Virtual from "../../public/Images/Virtual.png";
import Djman from "../../public/Images/Djman.png";
import Colacup from "../../public/Images/Colacup.png";

import Artist1 from "../../public/Images/Artist1.png";
import Artist2 from "../../public/Images/Artist2.png";
import Artist3 from "../../public/Images/Artist3.png";

import PeopleGroup from "../../public/Images/PeopleGroup.png";

const leftContentEvent = {
  title: `ASTRIX EVENTS`,
  images: [
    {
      src: Djman,
      alt: "Djman",
    },
    {
      src: Virtual,
      alt: "virtual",
    },
    {
      src: Colacup,
      alt: "Cola-cup",
    },
    {
      src: Girl,
      alt: "Girl",
    },
  ],
};

const leftContentCollections = {
  title: `ASTRIX COLLECTIBLE`,
  images: [
    {
      src: Barbe,
      alt: "Barbe",
    },
    {
      src: Virtual,
      alt: "virtual",
    },
    {
      src: LunarPlace,
      alt: "Lunar Place",
    },
    {
      src: Girl,
      alt: "Girl",
    },
  ],
};

const rightContentEvent = {
  heading: "Explore Youre First  Event",
  subheading: "Event Name",
  event: {
    venue: "Venue",
    time: "04/3/2024 @19:00",
  },
  description:
    "Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.",

  sliderTitle: "Artist Lineup",

  images: [
    {
      src: Artist1,
      alt: "artist",
    },
    {
      src: Artist2,
      alt: "artist",
    },
    {
      src: Artist3,
      alt: "artist",
    },
    {
      src: Artist2,
      alt: "artist",
    },
  ],
};

const rightContentCollections = {
  heading: "Explore Youre First Collectible",
  subheading: "Meta Lives",
  title: "Live in Astrix",
  description:
    "Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. ",
  peopleGroup: {
    title: "22k people interested",
    image: {
      src: PeopleGroup,
      alt: "",
    },
  },
  items: [
    {
      title: "Collectible Name",
      nameBy: "By Pablo",
      date: "2024",
      image: {
        src: Virtual,
        alt: "virtual",
      },
    },
    {
      title: "Collectible Name",
      nameBy: "By Pablo",
      date: "2024",
      image: {
        src: Virtual,
        alt: "virtual",
      },
    },
    {
      title: "Collectible Name",
      nameBy: "By Pablo",
      date: "2024",
      image: {
        src: Virtual,
        alt: "virtual",
      },
    },
    {
      title: "Collectible Name",
      nameBy: "By Pablo",
      date: "2024",
      image: {
        src: Virtual,
        alt: "virtual",
      },
    },
  ],
};

function HomeLanding() {
  const [currentTab, setCurrentTab] = useState("events");
  const leftContent =
    currentTab == "events" ? leftContentEvent : leftContentCollections;

  const rightContent =
    currentTab == "events" ? rightContentEvent : rightContentCollections;

  return (
    <div className="flex lg:flex-row flex-col gap-6 min-h-screen">
      <div className="lg:w-[55%] min-h-full">
        {currentTab == "events" ? (
          <LeftContainer
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            {...leftContent}
          />
        ) : (
          <LeftContainer
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            {...leftContent}
          />
        )}
      </div>
      <div className="lg:w-[45%] min-h-full">
        {currentTab == "events" ? (
          <RightContainer
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            {...rightContent}
          />
        ) : (
          <RightContainer
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            {...rightContent}
          />
        )}
      </div>
    </div>
  );
}

export default HomeLanding;
