const link = '';
async function getDirectoryData() {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data.link);  // note that we reference the directory array of the data object given the structure of the json file
    //displayDirectory(data.link);
  }
  
