import { type FC } from "react";
import useShoes from "../../../hooks/useShoe";
import Loader from "../../loader";
import Error from "../../error";
import Card from "../../card";

const List: FC = () => {
  const { shoes } = useShoes();
  const { isLoading, error, data } = shoes();

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6">
      {data?.map((shoe) => (
        <Card shoe={shoe} key={shoe._id} />
      ))}
    </div>
  );
};

export default List;
