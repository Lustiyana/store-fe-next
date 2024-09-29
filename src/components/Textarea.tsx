/** @format */

import React, { ForwardedRef, forwardRef } from "react";

interface TextareaProps {
  label?: string;
  className?: string;
  placeholder?: string;
  error?: any;
  defaultValue?: string;
  disabled?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder,
      error,
      label,
      className = "",
      defaultValue,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <label className={`form-control ${className}`}>
        {label && (
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
        )}
        <textarea
          className={`textarea textarea-bordered h-24 ${
            error ? "textarea-error" : ""
          }`}
          placeholder={placeholder}
          ref={ref}
          defaultValue={defaultValue}
          disabled={disabled}
          {...props}
        ></textarea>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </label>
    );
  }
);

export default Textarea;
