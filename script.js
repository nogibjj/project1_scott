// Get form and input elements
const form = document.querySelector("#form");
const input = document.querySelector("#input");

// Handle form submit event
form.addEventListener("submit", (event) => {
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

