import React from "react";

/**
 * @method CapitalizeFirstLetter
 * @description it is for Capital the first letter of string
 * @param {*} str in this param we get the string that we want the first letter capital
 * @returns
 */
const CapitalizeFirstLetter = (str) => {
  // converting first letter to uppercase
  const capitalized = str?.charAt(0)?.toUpperCase() + str?.slice(1);
  return capitalized;
};
export default CapitalizeFirstLetter;
