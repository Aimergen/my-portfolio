import React from "react";

const AboutSection = () => {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <div className="flex items-center">
          <h2 className="text-[75px] font-extrabold text-secondary">about</h2>
          <hr className="w-full h-1 bg-secondary rounded-full ml-10" />
        </div>
        <p className="ml-40 text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, in
          corrupti iusto nulla asperiores reprehenderit vero sed, quasi
          voluptatibus quibusdam dolor et voluptates quod animi, eum quidem
          minus voluptate est!
        </p>
      </div>
      <div className="flex items-center justify-between px-20">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl">Front-End</h2>
          <p className="font-medium text-lg underline">1 year Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl">Back-End</h2>
          <p className="font-medium text-lg underline">1 year Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl">Cloud Engineer</h2>
          <p className="font-medium text-lg underline">1 year Experience</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
