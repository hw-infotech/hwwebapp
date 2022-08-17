export const subString = (str, len) => {
  return str?.length > 10 ? str?.substring(0, len) + " ..." : str;
};

export const requestSearch=(tableData,searchwith,)=>{
  return  tableData.filter((row) => {
    row.title?.toLowerCase().includes(searchwith?.toLowerCase());
  });
  
}
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
