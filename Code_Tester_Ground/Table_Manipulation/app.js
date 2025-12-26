// console.log("Hello world!")

// ---------------------Accessing Table-------------------------------

// ------------(Checking Row in a Table #1.0)------------------->

// const table = document.querySelector("#myTable");
// console.log(table.rows.length);

// ------------(Adding a Row dynamically #1.0)------------------->

// function addRow()
// {
//     const  table = document.querySelector("#myTable");
//     const row = table.insertRow();

//     row.insertCell(0).textContent ="shahzaib";
//     row.insertCell(1).textContent ="20";
//     row.insertCell(2).textContent ="2354";
//     row.insertCell(3).textContent =""
// }

// ------------(Adding 3 Rows using loop #1.0)--------------------------------

// function addRow()
// {
//        const table = document.querySelector("#myTable");
        
  
//      for(let i = 0 ; i < 3 ;i++)
//      {
      
//       const row = table.insertRow();
    
//       for(let j = 0 ; j < 4 ; j++)
//       {
//         row.insertCell(j).textContent ="";
//       }

//      }

// }

// ------------(Adding rows from input fields #1.1)--------------------------------

// function addData()
// {
//   let name = document.getElementById("name").value;
//   let cls = document.getElementById("class").value;
//   let age = document.getElementById("age").value;

//   const table = document.getElementById("mytable");
//   const row = table.insertRow();
//   row.innerHTML = `<td>${name}</td> <td>${cls}</td> <td>${age}</td>`;
// }

// -------------(Delete a row using button #1.2)----------------------------------

// function deleteRow(btn)
// {
//  btn.closest("tr").remove();
// }

// -------------(Edit a row  #1.2)----------------------------------

let selectedRow = null;

function editRow(btn)
{
  selectedRow = btn.closest("tr");

  document.querySelector("#editName").value = selectedRow.cells[0].textContent;
  document.querySelector("#editClass").value = selectedRow.cells[1].textContent;
  document.querySelector("#editAge").value = selectedRow.cells[2].textContent;

}

function updateData()
{
  preventDefault();
  // selectedRow.cells[0].textContent = document.querySelector("#editname").value;
  selectedRow.cells[0].textContent = document.getElementById("editName").value;
  selectedRow.cells[1].textContent = document.getElementById("editClass").value;
  selectedRow.cells[2].textContent = document.getElementById("editAge").value;

}