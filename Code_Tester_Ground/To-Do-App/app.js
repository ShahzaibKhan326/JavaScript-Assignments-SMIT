const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

function addTask()
{
   const task = input.value.trim();

     if(task === "") return;

     const li = document.createElement("li");
     li.innerHTML = 
     `<span class="task-text"> ${task}</span>
     <span class="delete"> X </span>
     `
     ;

     taskList.appendChild(li);
     input.value = "";

     saveTasks();
}
addBtn.addEventListener("click",addTask)

input.addEventListener("keydown",  (e)=>
{
    if(e.key === "Enter")
    {
        addTask();
    }

    if(e.key === "+")
    {
        e.target.style.fontSize = "20px";
    }
}
)

taskList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete"))
    {
        e.target.parentElement.remove();
        saveTasks();
    }
    if(e.target.classList.contains("task-text"))
    {
        e.target.parentElement.classList.toggle("completed")
        saveTasks();
    }
})

function saveTasks()
{
    localStorage.setItem("tasks",taskList.innerHTML)
}

function loadTask()
{
    const saved = localStorage.getItem("tasks");
    if(saved)
    {
        taskList.innerHTML = saved;
    }
}

const clearBtn = document.querySelector("#clearCompleted");

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".completed").forEach(task => task.remove());
  saveTasks();
});


loadTask();