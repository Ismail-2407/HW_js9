const contentDiv = document.getElementById("content");
contentDiv.innerHTML = `
    <table id="sortable-table">
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th data-type="number">Age</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Mark</td><td>Zuckerberg</td><td>34</td><td>Facebook</td></tr>
            <tr><td>Larry</td><td>Page</td><td>45</td><td>OpenAI</td></tr>
            <tr><td>Timothy</td><td>Cook</td><td>57</td><td>Apple</td></tr>
            <tr><td>Bill</td><td>Gates</td><td>62</td><td>Microsoft</td></tr>
        </tbody>
    </table>
`;

const table = contentDiv.querySelector("#sortable-table");
const headers = table.querySelectorAll("th");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const column = Array.from(header.parentNode.children).indexOf(header);
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const dataType = header.getAttribute("data-type");

    rows.sort((a, b) => {
      const aValue = a.children[column].textContent;
      const bValue = b.children[column].textContent;
      if (dataType === "number") {
        return parseInt(aValue) - parseInt(bValue);
      }
      return aValue.localeCompare(bValue);
    });

    table.querySelector("tbody").innerHTML = "";
    rows.forEach((row) => table.querySelector("tbody").appendChild(row));
  });
});
