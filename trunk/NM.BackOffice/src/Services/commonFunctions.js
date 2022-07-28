export const subString = (str, len) => {
  return str?.length > 10 ? str?.substring(0, len) + " ..." : str;
};
   