import React from "react";

const HeroSection = () => {
  return (
    <section className="flex justify-between gap-5 items-center px-5">
      <div>
        <p className="font-medium text-[28px]">Hello I&apos;m John Wick</p>
        <h1 className="text-[100px] font-extrabold text-secondary">
          Full stack Killer
        </h1>
        <p className="font-medium text-[28px] underline">Contact me</p>{" "}
      </div>
      <img
        src="/john-wick-portrait.jpg"
        alt="Hero Image"
        className="rounded-[40px] w-[600px] h-[736px]"
      />
    </section>
  );
};

export default HeroSection;
