const form = document.querySelector("#form");
const input = document.querySelector("#input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = input.value;
  const newInput = document.createElement("p");
  newInput.innerText = userInput;
  form.appendChild(newInput);
  input.value = "";
});

// document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const input = document.getElementById("input").value;

//   fetch("http://localhost:8000/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       "input": input
//     })
//   })
//     .then(response => response.json())
//     .then(data => {
//       const p = document.createElement("p");
//       p.innerHTML = `Output: ${data.output}`;
//       p.innerText = data.input;
//       form.appendChild(p);
//       document.getElementById("form").appendChild(p);
//     });
// });
