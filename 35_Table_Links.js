console.log("Mounting 35_Table_Links.js...");
const h1 = document.getElementsByTagName("h1")
const table = document.body?.firstElementChild.childNodes[3].firstElementChild

const tableData = new Array()
console.log(table);// returns a object which contains the array of rows present in the entire table and also the length of array

console.log(table.tHead);

console.log(table.caption) // it prints the caption of the table if present otherwise null

console.log(table.tBodies);
const tbody = table.tBodies
console.log(table.rows);
console.log(table.tFoot);



tableData.push({
    id: "1211821058",
    name: "Aryan Kumar",
    email: "aryanak9163@gmail.com",
    phone: "+918235172505"
}, {
    id: "1211821050",
    name: "Kush",
    email: "aryanak9164@gmail.com",
    phone: "+918235172550"
}, {
    id: "1211821088",
    name: "Kumar Mafia",
    email: "aryanak9168@gmail.com",
    phone: "+919435172505"
})


table.childNodes[5].innerHTML = tableData.map((element, index) => {
    return `<tr key=${index}>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.phone}</td>
    </tr>`
})

table.tFoot.innerHTML = `<span>All rights reserved</span>`
console.log(table.tFoot.firstElementChild)


console.log(tbody[0].rows[1].rowIndex);
console.log(tbody[0].rows[1].sectionRowIndex);
console.log(tbody[0].rows[2].cells[3].cellIndex);

console.log(typeof window);
console.log(typeof document);
