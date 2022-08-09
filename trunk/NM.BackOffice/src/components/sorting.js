import React from "react";

export function sortt(items, operater = ">", response, tableData) {
  const response = items.sort((a, b) =>
    a.title.toLowerCase() + operater + b.title.toLowerCase()
      ? 1
      : b.title.toLowerCase() + operater + a.title.toLowerCase()
      ? -1
      : 0
  );

  return response;
}

export default Sorting;
