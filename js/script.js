  let $ = document

let range = $.getElementById("range");
let container = $.querySelector(".container")

range.addEventListener("change",function (){
    console.log(range.value);
    container.style.filter=`brightness(${range.value}%)`
}) 
