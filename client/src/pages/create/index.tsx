import { type FC } from "react";
import useShoes from "../../hooks/useShoe";
import type { ShoeFormValues } from "../../types";
import Form from "../../components/form";

const Create: FC = () => {
  const { create } = useShoes();

  const onSubmit = (value: ShoeFormValues) => {
    create.mutate(value);
  };
  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Add Product</h1>

      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
