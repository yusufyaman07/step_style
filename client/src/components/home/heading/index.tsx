import { type FC } from "react";

const Heading: FC = () => {
  return (
    <div className="flex justify-between items-center my-[24px] md:mt-[36px] lg:mt-[50px] xl:mt-[90px] xl:mb-[32px] px-2">
      <h1 className="font-semibold uppercase  leading-[96%] text-[24px] md:text-[36px] lg:text-[60px] xl:text-[74px]">
        Don't miss <br /> out new drops
      </h1>

      <button className="bg-[#4a69e2] text-white py-[8px] px-[12px] lg:py-[12px] lg:px-[28px] rounded-[8px] hover:brightness-90 transition cursor-pointer">
        Start Shopping
      </button>
    </div>
  );
};

export default Heading;
