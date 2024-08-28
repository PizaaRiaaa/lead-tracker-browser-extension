let myLeads = [];

let saveInputBtn = document.querySelector(".input-btn");
let inputEl = document.querySelector(".input-el")
let boxDiv = document.querySelector(".box");
let ulEl = document.querySelector(".ul-el");

saveInputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = "";

  renderLeads();

})

function renderLeads() {
  let listItems = "";
  for(let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li><a target='_blank' href=${myLeads[i]}>  ${myLeads[i]} </a></li>`; 
  }
  ulEl.innerHTML =  listItems;
}
