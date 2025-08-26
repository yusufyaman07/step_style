import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative mx-auto max-w-6xl mt-6 md:mt-12 xl:mt-20 rounded-3xl overflow-hidden">
      <img
        src="/banner.png"
        alt="banner"
        className="w-full h-[360px] sm:h-[440px] md:h-[520px] object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-10">
        <p className="text-[15px] sm:text-[17px] lg:text-[21px] xl:text-[24px] xl:font-semibold text-grey">
          Limited time only
        </p>

        <h1 className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[74px] font-semibold">
          30% Off
        </h1>

        <p className="text-[15px] sm:text-[17px] md:text-[19px] xl:text-[21px] text-grey max-w-[80%]">
          Designed with your comfort in mind, these sports shoes let you stay
          fully focused on your next session.
        </p>
      </div>
    </div>
  );
};

export default Hero;
