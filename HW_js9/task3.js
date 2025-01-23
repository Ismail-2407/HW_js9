const contentDiv = document.getElementById("content");
contentDiv.innerHTML = `
    <ul class="book-list">
        <li>"JavaScript for Kids: A Playful Introduction to Programming" by Nick Morgan</li>
        <li>"Eloquent JavaScript: A Modern Introduction to Programming" by Marijn Haverbeke</li>
        <li>"JavaScript: The Good Parts" by Douglas Crockford</li>
        <li>"You Don't Know JS" by Kyle Simpson</li>
        <li>"Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries" by Eric Elliott</li>
        <li>"Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript" by David Herman</li>
        <li>"JavaScript: The Definitive Guide" by David Flanagan</li>
    </ul>
`;

const bookListItems = contentDiv.querySelectorAll(".book-list li");
let previousColor = "";
let selectedItems = new Set();

bookListItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const currentItem = event.target;
    // Смена цвета на оранжевый
    const tempColor = currentItem.style.backgroundColor;
    if (tempColor != "orange") {
      currentItem.style.backgroundColor = "orange";
    } else {
      currentItem.style.backgroundColor = previousColor;
    }
    previousColor = tempColor;

    if (event.ctrlKey) {
      if (selectedItems.has(currentItem)) {
        selectedItems.delete(currentItem);
        currentItem.style.backgroundColor = "";
      } else {
        selectedItems.add(currentItem);
      }
    }

    if (event.shiftKey) {
      if (selectedItems.has(currentItem)) {
        selectedItems.delete(currentItem);
        currentItem.style.backgroundColor = "";
      } else {
        selectedItems.forEach((selectedItem) => {
          selectedItem.style.backgroundColor = "";
        });
        selectedItems = new Set([currentItem]);
        bookListItems.forEach((selected) => {
          if (selected != currentItem) {
            selected.style.backgroundColor = "";
          }
        });
        selectedItems.add(currentItem);
      }
    }
  });
});
