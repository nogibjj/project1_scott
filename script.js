// Get form and input elements
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button_submit = document.querySelector(".button-submit");
const button_clear = document.querySelector(".button-clear");
// Handle form submit event
button_submit.addEventListener("click", (event) => {
  event.preventDefault();

  // Get user input value
  const userInput = input.value;

  // Send user input to FastAPI endpoint
  fetch("http://127.0.0.1:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: userInput }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // add the data to the html after the button as <p> tags
      const p = document.createElement("p");
      p.innerText = data.input;
      form.appendChild(p);
      // Do something with the response data
    });
});

button_clear.addEventListener("click", (event) => {
  event.preventDefault();
  // check to see if there are any <p> tags and remove them
  const p = document.querySelectorAll("p");
  if (p.length > 0) {
    p.forEach((p) => {
      p.remove();
    });
  }
});