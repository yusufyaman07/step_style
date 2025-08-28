import { type FC } from "react";
import useShoes from "../../hooks/useShoe";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Link } from "react-router-dom";

const Dashboard: FC = () => {
  const { shoes, remove } = useShoes();
  const { isLoading, error, data } = shoes();

  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} />;

  return (
    <div>
      {/* Title */}
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-2xl md:text-3xl font-semibold">Products</h1>

        <Link
          to="/admin/create"
          className="bg-[#4a69e2] px-4 py-1 md:px-6 md:py-2 rounded-md text-white hover:bg-my-blue/90 transition cursor-pointer"
        >
          Add Product
        </Link>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full table-auto md:table-fixed text-sm bg-white">
          <colgroup className="hidden md:table-column-group">
            <col className="w-[90px]" />
            <col className="w-[40%]" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
            <col className="w-[20%]" />
          </colgroup>

          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-4 md:px-6 py-3 text-center"></th>
              <th className="px-4 md:px-6 py-3 text-center">Name</th>
              <th className="px-4 md:px-6 py-3 text-center">Price</th>
              <th className="px-4 md:px-6 py-3 text-center whitespace-nowrap hidden sm:table-cell">
                Discount (%)
              </th>
              <th className="px-4 md:px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 md:px-6 py-4 text-center align-middle">
                  <img
                    src={item.picture[0]}
                    alt={item.name}
                    className="inline-block w-14 md:w-20 rounded-xl object-cover"
                  />
                </td>

                <td className="px-4 md:px-6 py-4 text-center align-middle font-semibold text-gray-900">
                  <span className="block max-w-[140px] sm:max-w-none mx-auto truncate">
                    {item.name}
                  </span>
                </td>

                <td className="px-4 md:px-6 py-4 text-center align-middle font-semibold text-gray-900">
                  {item.price}
                </td>

                <td className="px-4 md:px-6 py-4 text-center align-middle font-semibold text-black hidden sm:table-cell">
                  {item.discount > 0 ? `${item.discount}%` : "None"}
                </td>

                <td className="px-4 md:px-6 py-4 align-middle">
                  <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-3">
                    <Link
                      to={`/admin/edit/${item._id}`}
                      className="text-[#4a69e2] hover:text-[#4a69e2]/90 hover:underline transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => remove.mutate(item._id)}
                      className="text-red-600 hover:underline cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
