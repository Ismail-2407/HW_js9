const contentDiv = document.getElementById("content");
contentDiv.innerHTML = `
    <div class="resizable-box">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <div class="resize-handle"></div>
    </div>
`;

const resizableBox = contentDiv.querySelector(".resizable-box");
const resizeHandle = contentDiv.querySelector(".resize-handle");
let isResizing = false;
let currentMouseX, currentMouseY;

resizeHandle.addEventListener("mousedown", (e) => {
  isResizing = true;
  currentMouseX = e.clientX;
  currentMouseY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  const dx = e.clientX - currentMouseX;
  const dy = e.clientY - currentMouseY;

  currentMouseX = e.clientX;
  currentMouseY = e.clientY;

  resizableBox.style.width = resizableBox.offsetWidth + dx + "px";
  resizableBox.style.height = resizableBox.offsetHeight + dy + "px";
});

document.addEventListener("mouseup", () => {
  isResizing = false;
});
