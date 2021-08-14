function todoList(todos) {
  // Write your code here...
let content = document.getElementById("content");
let ul = document.createElement("ul");
content.appendChild(ul);

todos.forEach(task => {     
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = task.todo;

   
    li.addEventListener("click",function(){
      if(li.style.textDecorationLine === "line-through"){
        li.style.textDecorationLine = "";
      }else{
        li.style.textDecorationLine = "line-through";
      }
      
    }); 
});
}
const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);