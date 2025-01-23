const contentDiv = document.getElementById("content");
contentDiv.innerHTML = `
    <ul class="tree">
        <li>This PC
            <ul>
                <li>Local Disk (C:)
                    <ul>
                        <li>Program Files</li>
                        <li>Users</li>
                        <li>Windows</li>
                    </ul>
                </li>
                <li>Local Disk (D:)
                    <ul>
                        <li>New Folder 1</li>
                        <li>New Folder 2</li>
                        <li>New Folder 3</li>
                    </ul>
                </li>
                 <li>Local Disk (E:)
                 </li>
            </ul>
        </li>
    </ul>
`;

const treeItems = contentDiv.querySelectorAll(".tree li");
treeItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (item.children.length > 0 && event.target === item) {
      item.classList.toggle("collapsed");
    }
  });
  item.addEventListener("mouseover", () => {
    item.style.fontWeight = "bold";
  });
  item.addEventListener("mouseout", () => {
    item.style.fontWeight = "normal";
  });
});
