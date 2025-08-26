import { ErrorMessage, Field } from "formik";
import type { FC } from "react";

interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const Input: FC<Props> = ({ label, name, type, placeholder }) => {
  return (
    <div className="space-y-2 relative">
      <label htmlFor={name} className="block text-sm text-white/80">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        required
        autoComplete={name}
        placeholder={placeholder}
        className="input"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-500 position-absolute bottom-[-24px]"
      />
    </div>
  );
};

export default Input;
