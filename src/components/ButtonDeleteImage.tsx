/** @format */

import React from "react";

const ButtonDeleteImage = ({ onClick }: { onClick?: (e?: any) => void }) => {
  return (
    <button
      type="button"
      className="absolute -top-2 -right-2 border border-black bg-white rounded-full bg-transparent text-black w-8 h-8"
      onClick={onClick}
    >
      X
    </button>
  );
};

export default ButtonDeleteImage;
