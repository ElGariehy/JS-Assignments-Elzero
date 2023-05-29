
document.write("<h2> Elzero <h1>")
document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.fontSize = "80px";
document.querySelector("h2").style.fontWeight = "bold";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.fontFamily = "Arial";



//  ------------------ التكليف 03 -----------
console.log("%cElzero %cWeb %cSchool",
 "color:red; font-size:40px;",
 "color:green; font-size:40px; font-weight:bold;",
 "background-color:blue; font-size:40px;",
 )

//  ------------------ التكليف 04 -----------
console.group("Group 1")

console.log("Msg one")
console.log("Msg two")
console.group("Child Group")
console.log("Msg one")
console.log("Msg two")
console.group("Grand Child Group")
console.log("Msg one")
console.log("Msg two")
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("Group 2")
console.log("Msg one")
console.log("Msg two")

//  ------------------ التكليف 05 -----------
console.table=(["Elzero", "Elge7o", "Ahmed", "Emad"]);



//  ------------------ التكليف 06 -----------

// >>>way one: inline comment
// console.log("Iam In Console");
// document.write("Iam In Page");

// >>>way one: inline comment
/* 
console.log("Iam In Console");
document.write("Iam In Page");
*/
