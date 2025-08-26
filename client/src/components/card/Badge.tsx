import type { FC } from "react";
import type { Shoe } from "../../types";

interface Props {
  item: Shoe;
}

const Badge: FC<Props> = ({ item }) => {
  if (!item.discount && !item.isNew) return null;

  const bgClass = item.discount ? "bg-[#ffa52f]" : "bg-[#4a69e2]";

  return (
    <span
      className={`absolute top-0 left-0 text-white rounded-tl-[12px] rounded-br-[12px] lg:rounded-tl-[24px] lg:rounded-br-[24px] px-2 py-1 lg:px-4 lg:py-2 ${bgClass}`}
    >
      {item.discount ? `${item.discount}% Discount` : "New"}
    </span>
  );
};

export default Badge;
