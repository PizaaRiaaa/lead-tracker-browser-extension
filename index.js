let myLeads = ["www.facebook.com"];

let saveInputBtn = document.querySelector(".input-btn");
let btnDelete = document.querySelector(".delete-btn");
let inputEl = document.querySelector(".input-el")
let boxDiv = document.querySelector(".box");
let ulEl = document.querySelector(".ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

saveInputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  renderLeads();
})

btnDelete.addEventListener("click", function() {
  localStorage.clear();
  myLeads = [];
  renderLeads()
})

function renderLeads() {
  let listItems = "";
  for(let i = 0; i < myLeads.length; i++) {
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
    listItems += `
      <li><a target='_blank' href=${myLeads[i]}>  ${myLeads[i]} </a></li>`; 
  }
  ulEl.innerHTML =  listItems;
}
