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