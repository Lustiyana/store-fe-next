/** @format */

import React from "react";

interface TextItemProps {
  value: string;
}

const TextItem: React.FC<TextItemProps> = ({ value }) => {
  return <p className="text-lg">{value}</p>
};

export default TextItem;
