import { ErrorMessage, Field } from "formik";
import type { FC } from "react";

interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const Input: FC<Props> = ({ label, name, type, placeholder }) => {
  const isTextarea = type === "textarea";
  const isCheckbox = type === "checkbox";

  return (
    <div className={`${isCheckbox ? "" : "space-y-2"} relative`}>
      {isCheckbox ? (
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <label className="block text-sm text-white/80">{label}</label>
          <Field id={name} name={name} type="checkbox" className="h-4 w-4" />
        </div>
      ) : (
        <>
          <label htmlFor={name} className="block text-sm text-white/80">
            {label}
          </label>
          <Field
            id={name}
            name={name}
            // textarea ise as="textarea"
            as={isTextarea ? "textarea" : "input"}
            type={isTextarea ? undefined : type}
            required
            autoComplete={name}
            placeholder={placeholder}
            className={`input ${isTextarea ? "resize-none min-h-[120px]" : ""}`}
          />
        </>
      )}

      <ErrorMessage
        name={name}
        component="div"
        className={`text-sm text-red-500 ${
          isCheckbox ? "mt-1" : "absolute -bottom-6"
        }`}
      />
    </div>
  );
};

export default Input;
