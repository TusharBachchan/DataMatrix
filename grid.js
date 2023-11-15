let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

//*************Grid Creation starts ****************************************************/
for (let i = 0; i < rows; i++) {
    let addressCol = document.createElement('div')
    addressCol.innerText = i + 1;
    addressCol.classList.add("address-col");
    addressColCont.appendChild(addressCol);
}

for (let i = 0; i < cols; i++) {
    let addressRow = document.createElement('div')
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRow.classList.add("address-row");
    addressRowCont.appendChild(addressRow);
}



for (let i = 0; i < rows; i++) {
    
    let rowCont = document.createElement("div");
    rowCont.classList.add("row-cont")
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div")
        cell.classList.add("cell");
        cell.setAttribute("contenteditable", "true")
        cell.setAttribute("spellcheck", "false")
        // Attributes to map sheet cells to sheetDB[][] cells : check cell-properties.js
        cell.setAttribute("rid", i)
        cell.setAttribute("cid", j)
        rowCont.appendChild(cell)
        addListenerForAddressBarDisplay(cell, i, j)
    }
    cellsCont.appendChild(rowCont)
}

//*************Grid Creation ends ****************************************************/

//*************Cell Name display in address bar Functionality starts ****************************************************/
function addListenerForAddressBarDisplay(cell, i, j){
    cell.addEventListener("click", (e) => {
        let rowID = i + 1;
        let colID = String.fromCharCode(65 + j);
        addressBar.value = `${colID}${rowID}`
    })
}
//*************Cell Name display in address bar Functionality ends *****************************************************/

// By default the first cell should be selected when the user opens the applicaton, clicking it using DOM
// let firstCell = document.querySelector(".cell");
// firstCell.click()