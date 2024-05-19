"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import Slider from "./Slider";

const Buttons = [
  {
    id: 0,
    label: "Events",
    value: "events",
  },
  {
    id: 1,
    label: "Collections",
    value: "collections",
  },
];

export interface LeftDataProps {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

function LeftContainer({
  currentTab,
  setCurrentTab,
  title,
  images,
}: LeftDataProps) {
  return (
    <section className="relative w-full h-full">
      <HeaderLogo />

      <div className="px-6 flex flex-col gap-16 lg:mt-12">
        <h2 className="lg:text-8xl text-6xl break-words max-w-[360px] text-white/20 font-bold font-lexend">
          {title}
        </h2>
      </div>

      <div className="lg:absolute lg:top-[50%] lg:-translate-y-[50%] w-full lg:mt-10 mt-4">
        <Slider Images={images} />
      </div>

      <div className="px-6 py-4 flex">
        <div className="bg-[#282b30] rounded-full">
          {Buttons.map((item, index) => (
            <button
              key={item.id}
              className="md:px-12 px-8 py-2 rounded-full text-white duration-200 transition-colors"
              style={{
                backgroundColor:
                  currentTab == item.value ? "#484e56" : "transparent",
              }}
              onClick={() => {
                setCurrentTab(item.value);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeftContainer;
