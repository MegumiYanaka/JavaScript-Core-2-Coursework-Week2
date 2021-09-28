function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
    // Write your code to create todo list elements with 
    // completed and delete buttons here,
    //  all todos should display inside the "todo-list" element.
  list.replaceChildren([]);
  todos.forEach((todo,index) => {
    let itemToDo = document.createElement("li");
    let button = document.createElement("span");
    let doneButtun = document.createElement("i");
    let deleteButtun = document.createElement("i");

    list.appendChild(itemToDo);
    itemToDo.className = 
    "list-group-item d-flex justify-content-between align-items-center";
    itemToDo.innerText = todo.task;
    // itemToDo.id = index;
    itemToDo.style.textDecorationLine = (todo.completed)? "line-through" : "";
    itemToDo.appendChild(button).className = "badge bg-primary rounded-pill";
    button.appendChild(doneButtun).className = "fa fa-check";
    button.appendChild(deleteButtun).className = "fa fa-trash";
   
    doneButtun.addEventListener("click",function(){
      if(itemToDo.style.textDecorationLine === "line-through"){
        itemToDo.style.textDecorationLine = "";
        todo.completed = false;
      }else{
        itemToDo.style.textDecorationLine = "line-through";
        todo.completed = true;
      }
    }); 
   
    deleteButtun.addEventListener("click",function(){
      itemToDo.remove();
    })   
  });

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Cooking lunch", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and 
// add it as a new todo to the bottom of the todo list.
//  These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing
  //  when we click the 'Add Todo' button.
 
  event.preventDefault();
  // Write your code here... and 
  // remember to reset the input field to be blank after creating a todo!
  let todoInput = document.getElementById("todoInput");
  todos.push({ task: todoInput.value, completed: false});
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that 
// checks the todos in the todo list and deletes the completed ones
//  (we can check which ones are completed by seeing 
// if they have the line-through styling applied or not).

function deleteAllCompletedTodos() {
  // Write your code here...
  // todos.filter(task => task.completed);
  todos = todos.filter(task => task.completed === false);
  populateTodoList(todos);
}

