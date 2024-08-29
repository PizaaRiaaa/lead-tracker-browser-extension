let myLeads = [];

let saveInputBtn = document.querySelector(".input-btn");
let saveTabBtn = document.querySelector(".save-tab-btn")
let btnDelete = document.querySelector(".delete-btn");
let inputEl = document.querySelector(".input-el")
let boxDiv = document.querySelector(".box");
let ulEl = document.querySelector(".ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function render(leadsArr) {
  let listItems = "";
  for(let i = 0; i < leadsArr.length; i++) {
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
    listItems += `
      <li><a target='_blank' href=${leadsArr[i]}>  ${leadsArr[i]} </a></li>`; 
  }
  ulEl.innerHTML =  listItems;
}

saveInputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  render(myLeads);
})

saveTabBtn.addEventListener("click", function() {
  myLeads.push(window.location.href)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

btnDelete.addEventListener("click", function() {
  localStorage.clear();
  myLeads = [];
  render(myLeads)
})

