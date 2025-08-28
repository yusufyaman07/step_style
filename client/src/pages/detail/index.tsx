import { type FC } from "react";
import { useParams } from "react-router-dom";
import useShoes from "../../hooks/useShoe";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "../../components/detail/images";
import Info from "../../components/detail/info";
import Size from "../../components/detail/size";
import Bottom from "../../components/detail/bottom";
import Colors from "../../components/detail/colors";

const Detail: FC = () => {
  const { id } = useParams();
  const { shoe } = useShoes();
  const { isLoading, error, data } = shoe(id as string);

  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} />;

  console.log(data);

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
      <div className="xl:col-span-2">
        <Images pictures={data?.picture || []} />
      </div>

      <div className="flex flex-col gap-8">
        <Info item={data!} />
        <Colors colors={data?.color} />
        <Size sizes={data?.size} />
        <Bottom description={data?.description} />
      </div>
    </div>
  );
};

export default Detail;
