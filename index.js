console.log("javascript :D");

//Might be a result of a Get-Request
const data = [
    {firstname: "John", lastname: "Doe", email: "john@example.com"},
    {firstname: "Mary", lastname: "Moe", email: "mary@example.com"},
    {firstname: "July", lastname: "Dooley", email: "july@example.com"},
]

const table = document.createElement("table"); // <table></table>
table.id = "dynamicTable"; // <table id="dynamicTable"></table>
table.classList.add("table" , "table-striped") // <table id="dynamicTable" class="table table-striped">

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headerText = ["Firstname","Lastname","Email"];

headerText.forEach(headertext => {
    const th = document.createElement("th");
    th.textContent = headertext;

    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const dataTableSection = document.getElementById("data-table");
dataTableSection.appendChild(table);

/*
<thead>
<tr>
  <th>Firstname</th>
  <th>Lastname</th>
  <th>Email</th>
</tr>
*/