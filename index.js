// document.getElementById("count-id").innerText

let count = 0;

let countId = document.getElementById("count-id");


function increment() {
    console.log("The button was clicked")
    count = count + 1;
    countId.innerText = count;
    console.log(count)
}