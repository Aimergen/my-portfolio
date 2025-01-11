import React from "react";

const WorkSection = () => {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <div className="flex items-center">
          <h2 className="text-[75px] font-extrabold text-secondary">work</h2>
          <hr className="w-full h-1 bg-secondary rounded-full ml-10" />
        </div>
        <p className="ml-40 text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, in
          corrupti iusto nulla asperiores reprehenderit vero sed, quasi
          voluptatibus quibusdam dolor et voluptates quod animi, eum quidem
          minus voluptate est!
        </p>
      </div>
      <div className="flex items-center justify-between px-20 gap-10">
        <div className="flex flex-col w-full space-y-5">
          <div className="w-full h-[342px] bg-purple-100"></div>
          <div>
            <p className="font-bold text-2xl">Design Portfolio</p>
            <p className="font-medium text-lg">HTML , CSS , JS ,TSX</p>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-5">
          <div className="w-full h-[342px] bg-purple-100"></div>
          <div>
            <p className="font-bold text-2xl">Design Portfolio</p>
            <p className="font-medium text-lg">HTML , CSS , JS ,TSX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
