// ------------------Chapter(43-To-48)---------------------------------

// --------------------Question(1)--------------------------------

function showAlert(message)
{
    alert(message);
}

// -------------------(RemoveTableRow)---------------------------
var deletedItem = []

function removeData(target)
{
  document.getElementById(target).style.display="none";
  deletedItem.push(target)
  console.log("Deleted: "+deletedItem[deletedItem.length-1])
}

function  undoDelete()
{
  if(deletedItem.length===0)
  {
    var message = alert("Noting to Undo")
    return message;
  }
  var undoItem = deletedItem.pop()
  document.getElementById(undoItem).style.display="table-row";
  console.log("Restored: "+undoItem)

}
// --------------------------------------------------------------