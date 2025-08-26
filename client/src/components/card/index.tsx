import { Link } from "react-router-dom";
import type { Shoe } from "../../types";
import type { FC } from "react";
import Badge from "./Badge";
import Price from "./Price";

interface Props {
  shoe: Shoe;
}

const Card: FC<Props> = ({ shoe }) => {
  return (
    <div className="flex flex-col justify-between h-auto sm:h-[420px] md:h-[460px]">
      <div>
        <div className="relative p-2 bg-white rounded-xl sm:rounded-2xl">
          <Badge item={shoe} />

          <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
            <img
              src={shoe.picture[0]}
              alt={shoe.name}
              className="w-full h-full object-cover rounded-lg sm:rounded-2xl"
            />
          </div>
        </div>

        <h2
          className="
            font-semibold my-3 text-base sm:text-lg md:text-xl
            leading-tight line-clamp-2
            sm:min-h-[calc(1.2em*2)]
          "
        >
          {shoe.name}
        </h2>
      </div>

      <Link
        to={`/shoe/${shoe._id}`}
        className="bg-[#232321] text-white font-medium px-3 py-2 rounded-md transition hover:bg-black text-center flex items-center justify-center gap-1"
      >
        Detail - <Price item={shoe} />
      </Link>
    </div>
  );
};

export default Card;
