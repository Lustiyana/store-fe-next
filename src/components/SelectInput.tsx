/** @format */

import React, { ForwardedRef, forwardRef } from "react";

interface SelectInputProps {
  placeholder?: string;
  options?: { value: string | number; label: string }[];
  label?: string;
  className?: string;
  error?: any;
  defaultValue?: any;
  disabled?: boolean;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    {
      placeholder,
      options = [],
      label,
      className = "",
      error,
      defaultValue,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <label className={`form-control w-full ${className}`}>
        {label && (
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
        )}
        <select
          className={`select select-bordered ${error ? "select-error" : ""}`}
          defaultValue={defaultValue}
          disabled={disabled}
          {...props}
          ref={ref}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              selected={defaultValue == option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </label>
    );
  }
);

export default SelectInput;
