//************************Cell Formatting Bar Functionality started ****************************************/
/** Agenda
 * 1. Modifying Cell Properties
 * 2. Storing Property applied to individual Cells in a storage: As any cell can have any set of properties
 * 3. Two Way Binding : Both storage and UI needs to be changed to keep cells and Formatting bar in Sync
 */

/**
 * Storage of Properties
 * The cells can have their unique set of properties eg: bold, text-color etc.
 * The cells of the sheet can be represented by a 2D Array.
 * Since every cell has a set of properties, these properties can be stored in an object.
 * Therefore the 2D array will be like :
 * [
 *      [{}, {}, {}, ...],
 *      [{}, {}, {}, ...],
 *      ... and so on
 * ]
 * 2D Array -> SheetDB
*/

let sheetDB = [];

for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for (let j = 0; j < cols; j++) {
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "monospace",
            fontSize: "14",
            fontColor: "#000000",
            BGcolor: "#000000" // Just for Indication
        }
        sheetRow.push(cellProp)
    }
    sheetDB.push(sheetRow)
}

// Selectors for Cell Properties
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector(".font-family-prop");
let fontColor = document.querySelector(".font-color-prop");
let BGcolor = document.querySelector(".BGcolor-prop");
let alignment = document.querySelector(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];


// ************************************* Attach Event Listners for Formatting Bar Elements starts**********************************************
// For Bold button
bold.addEventListener("click", (e) => {
    // On clicking on the bold icon the "Selected" cell should be affected.
    // Therefore first we need to identify the selected cell by the user.
    // Acess active cell -> Use Adress bar to decode rid, cid.
    // Now use rid and cid to locate the cell using attribute selector as they are attributes of the cells.
    // rid and cid can be used to access the object in storageDB too.
    // Hence 2-way binding is achieved i.e changes are simultaneously made in UI and Data Layer.
    
    let address = addressBar.value;
    let [cell, cellProp] = activeCell(address);
    cellProp.bold = !cellProp.bold;
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // changing font wight of text in selected box
    
});
// ************************************* Attach Event Listners for Formatting Bar Elements ends**********************************************

// returns cell node and object containing properties corresponding to that node in sheetDB
function activeCell(address){ 
    // address is the value in the address bar
    // Next step is to decode that value to find cid and rid -> use function decodeRIDAndCID()
    // cid and rid will help in locating both cell node and corresponding object in sheetDB
    // As cid and rid are attributes of the cell and the corresponding object is stored at sheetDB[rid][cid]
    // Get rid and cid by calling decodeRIDAndCIDFromAddress()
    let [rid, cid] = decodeRIDAndCIDFromAddress(address)
   
    // Getting active cell node 
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp];
}
// Using Address value in Address bar to get the value of rid and cid of selected/active cell
function decodeRIDAndCIDFromAddress(address){
    // eg. -> a value from address bar -> "A1"
    // Start of decoding, rid is related to A and cid is related to 1
    let rid = Number(address.slice(1)) - 1; // +"1" = 1, 1 - 1 = 0, since we are working with zero based indexing
    let cid = Number(address.charCodeAt(0)) - 65; // 65 - 65 = 0, first index = 0, since A corresponds to 0
    return [rid, cid];
}
//************************Cell Formatting Bar Functionality ended ****************************************/