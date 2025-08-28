import type { FC } from "react";

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }) => {
  return (
    <div className="bg-red-500 text-white rounded-lg p-4 text-center my-20 mx-auto max-w-lg">
      <h2>{message}</h2>
      <p>Please try again later</p>
    </div>
  );
};

export default Error;
