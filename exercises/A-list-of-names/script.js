// function listOfNames(arrayOfPeople) {
//   let content = document.querySelector("#content");
//   arrayOfPeople.forEach(function (person, index, array){
//     let nameTag = document.createElement("h1"); //be careful for the name of valuable
//     let jobTag = document.createElement("h2"); 
//     content.appendChild(nameTag);
//     nameTag.textContent = index + ": " + person.name; // 0: Chris
//     content.appendChild(jobTag);
//     jobTag.textContent = person.job;
//   });
// }                              

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(person => { //(parameter => {parameter **** });
    let nameTag = document.createElement("h1"); //be careful for the name of valuable
    let jobTag = document.createElement("h2"); 
    content.appendChild(nameTag);
    nameTag.textContent = person.name; 
    content.appendChild(jobTag);
    jobTag.textContent = person.job;
  });
}       

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
