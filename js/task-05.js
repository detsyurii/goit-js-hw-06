const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onChangeInput);

function onChangeInput(event) {
  const { value } = event.currentTarget;
  if (value === "") {
    outputRef.textContent = "Anonymous";
  } else {
    outputRef.textContent = value;
  }
}
