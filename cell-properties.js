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

// Attach Event Listners
bold.addeventListener("click", (e) => {
    // On clicking on the bold icon the "Selected" cell should be affected.
    // Therefore first we need to identify the selected cell by the user.
    // Acess active cell -> Use Adress bar to decode rid, cid.
    // Now use rid and cid to locate the cell using attribute selector as they are attributes of the cells.
    // rid and cid can be used to access the object in storageDB too.
    // Hence 2-way binding is achieved i.e changes are simultaneously made in UI and Data Layer.
    
    
});
//************************Cell Formatting Bar Functionality ended ****************************************/