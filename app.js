console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
 
let searchBttn = document.getElementById("submitSearch");
let searchInput = document.getElementById("searchWord");
let feedbackEle = document.getElementById("feedback");
let img = document.querySelector("img");

searchBttn.addEventListener("click", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=Ezv8j3Zw0iHijLXfJ00OWt3FF2FOhFF1&s=" +
    searchInput.value,
    { mode: "cors" }
  )
  .then ((response) => response.json())
  .then((res) => {
    feedbackEle.textContent = "";
    img.src = res.data.images.original.url;
    searchInput.value = "";
  })
  .catch((err) => {
    console.error(err);
    feedbackEle.textContent = err.message;
  });
});