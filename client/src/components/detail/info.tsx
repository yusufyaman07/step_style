import type { FC } from "react";
import type { Shoe } from "../../types";
import Badge from "../card/Badge";
import Price from "../card/Price";

interface Props {
  item: Shoe;
}
const Info: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 relative ">
      <Badge item={item} />

      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">
        {item.name}
      </h1>

      <div className="text-2xl flex gap-1 relative">
        <Price item={item} />

        {item.discount && (
          <span className="line-through ps-3">{item.price}</span>
        )}
      </div>
    </div>
  );
};

export default Info;
