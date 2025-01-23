const contentDiv = document.getElementById("content");
let initialText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

contentDiv.innerHTML = `<div id="editable-text">${initialText}</div>`;
let divText = contentDiv.querySelector("#editable-text");

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "e") {
    const text = divText.textContent;
    divText.innerHTML = `<textarea>${text}</textarea>`;
    const textarea = divText.querySelector("textarea");
    textarea.focus();
  }
  if (event.ctrlKey && event.key === "s") {
    const textarea = divText.querySelector("textarea");
    const text = textarea ? textarea.value : divText.textContent;
    divText.innerHTML = text;
  }
});
