function todoList(todos) {
  // Write your code here...
let content = document.getElementById("content");
let unorderlistTag = document.createElement("ul");
content.appendChild(unorderlistTag);

todos.forEach(task => {
  let listTag = document.createElement("li");
  unorderlistTag.appendChild(listTag);
  listTag.innerText = task.todo;

  listTag.addEventListener("click", makeLine);
  function makeLine(){
    listTag.style.textDecorationLine = "line-through"
  }

  // listTag.addEventListener("click", removeLine);  
  // function removeLine(){
  //   listTag.style.textDecorationLine = "none"
  // }
  
});
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);