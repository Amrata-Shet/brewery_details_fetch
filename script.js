let btn = document.getElementById("btn");
let data = document.getElementById("data");

const url = "https://api.openbrewerydb.org/breweries";

//add an event listener to the target element
btn.addEventListener("click", async function () {
  data.innerHTML = "Loading....";
  //write your logic here
  try {
    //fetch the data
    let res = await fetch(url);
    let object = await res.json();
    data.innerHTML = `
    <br>
    <button>${object[0].id}</button>
    <button>${object[0].name}</button>
    <button>${object[0].brewery_type}</button>
    <button>${object[0].phone}</button>
    <br><br>
    <button>${object[0].street}</button>
    <button>${object[0].city}</button>
    <button>${object[0].state}</button>
    <button>${object[0].country}</button>`;
  } catch (error) {
    console.log(error);
  }
});