// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")


// intialize the count as 0
let count = 0
// listen for clicks on the increment button
function increment() {
    count = count + 1
    countEl.innerText = count
}
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

