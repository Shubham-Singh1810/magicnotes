// Welcome to App
console.log("This is app.js");
// if you adds a objective add it to the local storage
showvnote();
let savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click", function (e){
  let notetxt = document.getElementById("notetxt");
  let vnote = localStorage.getItem("vnote");
  if(vnote == null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(vnote)
  }
  notesObj.push(notetxt.value);
  localStorage.setItem("vnote", JSON.stringify(notesObj));
  notetxt.value ="";
  console.log(notesObj);
  showvnote();
})
function showvnote(){
  let vnote = localStorage.getItem("vnote");
  if(vnote == null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(vnote)
  }
  let html =""
  notesObj.forEach(function( element, index ) {
    html += ` <div id="obj">
    <h2 class="objsize">${index +1}. ${element}</h2>
    <div class="buttons"> 
        <button id="${index}" onclick="doneobj(this.id)"class="done">Done</button>
        <button id="${index}" onclick="deleteobj(this.id)" class="delete">Delete</button>
        
    </div>
    </div>`
  });
  let vnoteelm = document.getElementById("notes");
  if (notesObj.length!=0){
    vnoteelm.innerHTML = html;
  }
  else{
    vnoteelm.innerHTML=`<h1 class="objheading">Write your objectives. <em>Plan your day with us___</h1>`
  }
}
// function to delete note
function deleteobj(index){
  let vnote = localStorage.getItem("vnote");
  if(vnote == null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(vnote)
  }
  notesObj.splice(index, 1);
  localStorage.setItem("vnote", JSON.stringify(notesObj));
  showvnote();
}
// function to done
function doneobj(index){
  let vnote = localStorage.getItem("vnote");
  if(vnote == null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(vnote)
  }
  notesObj.splice(index, 1);
  localStorage.setItem("vnote", JSON.stringify(notesObj));
  showvnote();
  congrates();
}
function congrates(){
  alert("Congrates you completed this  objective. KEEP GOING DOMINATE THIS DAY")
}
// hambarger funtion
let hambarger = document.querySelector(".hambarger")
let follow = document.querySelector(".follow")
let display = document.querySelector(".display")
hambarger.addEventListener("click",()=>{
follow.classList.toggle("vclass")
follow.classList.toggle("display")
})

  



