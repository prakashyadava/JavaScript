const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const dltBtn = document.getElementById("dlt-btn")
const ulEl = document.getElementById("ul-el")
const savTb = document.getElementById("tab-save")
let leadLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadLocalStorage) {
    myLeads = leadLocalStorage
    render()
}
savTb.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLead()
    })
})
dltBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
    render()

})

inputBtn.addEventListener("click", function () {
    if (inputEl.value != "") {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLead()
        console.log(localStorage.getItem("myLeads"))
    }
})

function render() {
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += "<li> <a target='_blank' href=" + myLeads[i] + ">" + myLeads[i] + "</a></li>"
    }
}

function renderLead() {

    ulEl.innerHTML += "<li> <a target='_blank' href=" + myLeads[myLeads.length - 1] + ">" + myLeads[myLeads.length - 1] + "</a></li>"

}
