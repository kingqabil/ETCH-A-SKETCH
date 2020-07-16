const body = document.querySelector("body");
const btn = document.createElement("button");
btn.classList.add("title");
btn.textContent = "Rest Grid";
body.appendChild(btn);
const inputColRow = document.createElement("input");
inputColRow.setAttribute("type", "number");
inputColRow.classList.add("title");

for(let i =0 ; i <=1; i++)
{if(i==0)
   {inputColRow.setAttribute("id", "inputCol");
    inputColRow.setAttribute("placeholder","Columns");
   body.appendChild(inputColRow.cloneNode(true));}
   else 
   {
    inputColRow.setAttribute("id","inputRow");
    inputColRow.setAttribute("placeholder","Rows");
    body.appendChild(inputColRow.cloneNode(true));
   }

}
const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "ETCH-A-SKETCH-GRID";
body.appendChild(title);


const container = document.createElement("div");
container.setAttribute("id", "container");
container.classList.add("wrapper");
body.appendChild(container);

const selectContainer = document.querySelector("#container");
let multiDiv;

function multiDivFun() {
  multiDiv = document.createElement("div");
  multiDiv.classList.add("box");
  for (let i = 0; i <= 255; i++) {
    multiDiv.setAttribute("id", `div${i}`);
    selectContainer.appendChild(multiDiv.cloneNode(true));
  }

  return "done";
}
multiDivFun();
function palyHover(e) {
  const hover = document.getElementById(e.path[0].id);
  if (!e.path[0].id || e.path[0].id == "container") return;
  hover.classList.toggle("divhover");
}

window.addEventListener("mouseover", palyHover);
window.addEventListener("mouseout", palyHover);

const inputColVal=document.getElementById("inputCol");
const inputRowVal=document.getElementById("inputRow");


function restGrid(e) {
  if (container.style.display !== "none") {
    container.setAttribute("style", "display:none ;grid-template-columns:none;grid-template-rows:none");
    
    
  } else {
    container
    .setAttribute("style", `display:grid;grid-template-columns:repeat(${inputColVal.value},${1.6/inputColVal.value}fr);
        grid-template-rows:repeat(${inputRowVal.value},${1.6/inputColVal.value}fr)`);

       
  }
  
}

const btnRset = document
  .querySelector("button")
  .addEventListener("click", restGrid);
