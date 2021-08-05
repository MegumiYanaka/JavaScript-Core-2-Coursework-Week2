function shoppingList(arrayOfItems) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderlistTag = document.createElement("ul");
  content.appendChild(unorderlistTag);

  arrayOfItems.forEach(items => {
  let listTag = document.createElement("li");
  unorderlistTag.appendChild(listTag);
  listTag.innerText =items;
  });
} 

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
