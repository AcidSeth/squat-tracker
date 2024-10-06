let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function add1() {
    count += 1
    countEl.textContent = count
}

function add5() {
    count += 5
    countEl.textContent = count
}

function add10() {
    count += 10
    countEl.textContent = count
}

function add20() {
    count += 20
    countEl.textContent = count
}

function save() {
    let countStr = count + " - ";
    if (count > 0) { 
        saveEl.textContent += countStr;
        countEl.textContent = 0;
        count = 0;
        }
    }


function reset() {
    saveEl.textContent = ""
}