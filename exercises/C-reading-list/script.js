function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderlistTag = document.createElement("ul");
  content.appendChild(unorderlistTag); // ul was added in content
  
  books.forEach(book =>{
    //Create <li>
    let listTag = document.createElement("li");
    unorderlistTag.appendChild(listTag); // I always mistake to write "content.ul.appendChild();"
    //Create <p>
    let paragraph = document.createElement("p");
    listTag.appendChild(paragraph); 
    //Put the title & the author in <p>
    paragraph.innerText = book.title + " - " + book.author;
    //Create <img> 
    let coverImg = document.createElement("img");//coverImg.setAttribute("src", "links to a URL"); 
    listTag.appendChild(coverImg);
    //background color (alreadyRead:true-green, :false-red)
    if(book.alreadyRead){  
      listTag.style.backgroundColor = "green";
      }else{
      listTag.style.backgroundColor = "red";
      }
  });
}
 
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);