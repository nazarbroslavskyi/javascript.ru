const ul = document.createElement("ul");
const script = document.querySelector("script");
document.body.insertBefore(ul, script.nextSibling);
let inputData;
do {
     inputData = prompt("input data", "");
    // console.log(inputData);
    if(inputData !== null && inputData !== "") {
        let li = document.createElement("li");
        li.textContent = inputData;
        ul.appendChild(li);
    }
} while(inputData !== "" && inputData !== null);