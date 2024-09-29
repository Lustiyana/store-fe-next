/** @format */

import React, { ReactNode, ForwardedRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextInputProps {
  icon?: ReactNode;
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | any;
  defaultValue?: any;
  disabled?: boolean;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      icon,
      type = "text",
      placeholder,
      error,
      label,
      className,
      defaultValue,
      disabled = false,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
        <label htmlFor="" className="label-text">
          {label}
        </label>
        <label
          className={`input input-bordered flex items-center gap-2 ${
            error && "input-error"
          }`}
        >
          {icon}
          <input
            type={type}
            className="grow"
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            {...props}
            ref={ref}
          />
        </label>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default TextInput;
