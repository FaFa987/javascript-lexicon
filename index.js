console.log("javascript :D");

//Might be a result of a Get-Request
const data = [
    {firstname: "John", lastname: "Doe", email: "john@example.com"},
    {firstname: "Mary", lastname: "Moe", email: "mary@example.com"},
    {firstname: "July", lastname: "Dooley", email: "july@example.com"},
]

const showData = () => {
    
    if(!document.getElementById("dynamicTable")){
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
        
        
        const tbody = document.createElement("tbody");
        
            data.forEach( person => {
              const tr = document.createElement("tr");
        
              const td1 = document.createElement("td");
              td1.textContent = person.firstname;
              tr.appendChild(td1);
        
              const td2 = document.createElement("td");
              td2.textContent = person.lastname;
              tr.appendChild(td2);
        
              const td3 = document.createElement("td");
              td3.textContent = person.email;
              tr.appendChild(td3);
        
              tbody.appendChild(tr);
            });
        
            table.appendChild(tbody);
    }else {
        console.log("Table is already present!")
    }

};

const hideTable = () => {
    console.log("Hide function has been triggered!");

    const table = document.getElementById("dynamicTable");

    if(table){
        table.remove();
    }
};

    /*
<thead>
<tr>
  <th>Firstname</th>
  <th>Lastname</th>
  <th>Email</th>
</tr>
*/