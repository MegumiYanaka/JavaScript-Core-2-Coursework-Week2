function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  let select= document.createElement("select");
  let p= document.createElement("p");
  select.addEventListener("change", evt =>{
      p.style.backgroundColor = evt.target.options[evt.target.options.selectedIndex].text;
      p.innerText = evt.target.options[evt.target.options.selectedIndex].text;
    });
  content.appendChild(select);
  content.appendChild(p);
  colours.forEach(color=>{
    let option = document.createElement("option");
    select.appendChild(option);
    option.text = color;
 
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
