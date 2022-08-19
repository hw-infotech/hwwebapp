
/**
 * @method subString
 * @description this is for print the subPart of string 
 * @param {*} str in this param , get the data  
 * @param {*} len in this param we get length that what we want to print
 * @returns 
 */
export const subString = (str, len) => {
  return str?.length > 10 ? str?.substring(0, len) + " ..." : str;
};

/**
 * @method requestSearch 
 * @description this function for serach the JSON data in table by particular object
 * @param {*} tableData we get the JSON data 
 * @param {*} searchwith in the param we get value of particular object that we want to search
 * @returns 
 */
export const requestSearch=(tableData,searchwith,)=>{
  return  tableData.filter((row) => {
    row.title?.toLowerCase().includes(searchwith?.toLowerCase());
  });
  
}
/**
 * @method sortData
 * @description  it sort the data for particular column of table
 * @param {*} tableData it is the JSON data
 * @param {*} sortwith object name
 * @param {*} sortBy it can be ascending or deascending
 * @returns 
 */
export const sortData = (
  tableData,
  sortwith,
  sortBy = "asc",
) => {
  if (sortBy == "asc") {
    return tableData.sort((a, b) =>
      a[sortwith].toLowerCase() > b[sortwith].toLowerCase()
        ? 1
        : b[sortwith].toLowerCase() > a[sortwith].toLowerCase()
        ? -1
        : 0
    );
  }
  if (sortBy == "desc") {
    return tableData.sort((a, b) =>
      a[sortwith].toLowerCase() < b[sortwith].toLowerCase()
        ? 1
        : b[sortwith].toLowerCase() < a[sortwith].toLowerCase()
        ? -1
        : 0
    );
  }
};
