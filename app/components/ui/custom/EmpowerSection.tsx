import React from "react";
import combpng from "~/assets/comb.png";

const EmpowerSection = () => {
  return (
    <div className="w-full bg-oha__green px-10 md:px-[198px] py-28 relative h-[700px] uid text-white">
      <div className="uid text-white flex flex-col gap-10">
        <h1 className="font-semibold text-6xl leading-snug">
          Empower Lives. Protect Nature. <br /> Harvest the Future.
        </h1>
        <div className="flex flex-col gap-10 text-2xl">
          <p>
            Welcome to One Hive Africa, where your investment is more than just
            a financial transaction—it's a commitment to <br /> changing lives
            and preserving our planet.{" "}
          </p>
          <p>
            Together, we are creating a world where every hive is a symbol of
            hope, every drop of honey is a testament to resilience, <br /> and
            every investment is a step towards a sustainable future.
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 pb-10">
        <img
          src={combpng}
          alt="comb"
          className="h-96 "
        />
      </div>
    </div>
  );
};

export default EmpowerSection;
