const downloadFile = ({ data, fileName, fileType }) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType });
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};
export const exportToExcel = (listDataArr) => {
  // Headers for each column
  let headers = ["List Name, Task Name"];
  console.log(listDataArr);
  // Convert users data to a excel
  let usersExcel = listDataArr.reduce((acc, user) => {
    const { listName, taskName } = user;
    acc.push([listName, taskName].join(","));
    return acc;
  }, []);

  downloadFile({
    data: [...headers, ...usersExcel].join("\n"),
    fileName: "AllTaskLists.xlsx",
    fileType: "text/xlsx",
  });
};
