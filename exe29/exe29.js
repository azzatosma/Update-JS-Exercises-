// Exercise 29

async function fetchData(){
    console.log("Fetching data...");
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await response.json();
    console.log(" Data fetched successfully ",data);
}
fetchData();