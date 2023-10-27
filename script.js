let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

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
        rowCont.appendChild(cell)
        addListenerForAddressBarDisplay(cell, i, j)
    }
    cellsCont.appendChild(rowCont)
}

//*************Cell Name Functionality starts */
function addListenerForAddressBarDisplay(cell, i, j){
    cell.addEventListener("click", (e) => {
        let rowID = i + 1;
        let colID = String.fromCharCode(65 + j);
        addressBar.value = `${colID}${rowID}`
    })
}
//*************Cell Name Functionality ends */