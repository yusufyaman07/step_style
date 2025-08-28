import { Field, Formik, Form as FormikForm } from "formik";
import type { Shoe, ShoeFormValues } from "../../types";
import type { FC } from "react";
import Input from "../Input";

interface Props {
  onSubmit: (value: ShoeFormValues) => void;
  data?: Shoe;
}

const Form: FC<Props> = ({ onSubmit, data }) => {
  console.log(data);

  const initialValues = {
    name: data?.name || "",
    price: String(data?.price) || "",
    discount: String(data?.discount) || "",
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "",
  };

  const handleSubmit = (value: ShoeFormValues) => {
    onSubmit(value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm className="flex flex-col gap-5">
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Enter product name"
        />
        <Input
          label="Price"
          name="price"
          type="number"
          placeholder="Enter product price"
        />
        <Input
          label="Discount"
          name="discount"
          type="number"
          placeholder="Enter product discount"
        />
        <Input
          label="Color"
          name="color"
          type="text"
          placeholder="Enter product color"
        />
        <Input
          label="Size"
          name="size"
          type="text"
          placeholder="Enter product size"
        />
        <Input
          label="Description"
          name="description"
          type="textarea"
          placeholder="Enter product description"
        />
        <Input label="New" name="isNew" type="checkbox" placeholder="" />

        <div className="flex items-center gap-2">
          <Field type="radio" name="gender" id="men" value="men" />
          <label htmlFor="men">Man</label>
          <Field type="radio" name="gender" id="women" value="women" />
          <label htmlFor="women">Woman</label>
        </div>

        <button
          type="submit"
          className="bg-[#4a69e2] py-1 px-4 rounded-md text-white transition hover:bg-[#4a69e2]/80 cursor-pointer"
        >
          Send
        </button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
