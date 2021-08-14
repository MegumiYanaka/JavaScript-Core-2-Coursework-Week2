function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  list.replaceChildren([]); 

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
todos.forEach(todo => {
  let listTag = document.createElement("li");
  list.appendChild(listTag);
  listTag.className = "list-group-item d-flex justify-content-between align-items-center";
  listTag.innerText = todo.task

  let spanTag = document.createElement("span");
  listTag.appendChild(spanTag);
  spanTag.className = "badge bg-primary rounded-pill";
  
  let completeButton = document.createElement("i");
  spanTag.appendChild(completeButton );
  completeButton .className = "fa fa-check";
  addEventListener("click", toggleTask);
  function toggleTask(){
    toggleComplete(todo);
  }
  
  
  let deleteButton = document.createElement("i");
  spanTag.appendChild(deleteButton);
  deleteButton.className = "fa fa-trash";
});
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add 
//it as a new todo to the bottom of the todo list. 
//These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let elem = event.currentElement;
  let input = document.getElementById("todoInput");
  todos.push({task: input.value, completed:false });
  populateTodoList(todos);
  input.value = "";
  // Write your code here... and remember to reset the input field to be 
  //blank after creating a todo!


}
// Advanced challenge: Write a fucntion that checks the todos in the todo list
// and deletes the completed ones (we can check which ones are completed 
//by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}

function toggleComplete(todo){
  todo.completed =! todo.completed 
  populateTodoList(todos);
}


