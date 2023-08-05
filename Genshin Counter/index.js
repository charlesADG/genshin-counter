function incrementCounter(counterNumber) {
    let counter = parseInt(localStorage.getItem(`counter${counterNumber}`)) || 0;
    counter++;
    if (counterNumber <= 2 && counter > 90){
        counter = 0;
    }else if (counterNumber === 3 && counter > 80){
        counter = 0;
    }
    localStorage.setItem(`counter${counterNumber}`, counter);
    updateCounterDisplay(counterNumber, counter);
}

function increment10(counterNumber) {
    let counter = parseInt(localStorage.getItem(`counter${counterNumber}`)) || 0;
    counter+=10;
    if (counterNumber <= 2 && counter > 90){
        counter = 0;
    }else if (counterNumber === 3 && counter > 80){
        counter = 0;
    }
    localStorage.setItem(`counter${counterNumber}`, counter);
    updateCounterDisplay(counterNumber, counter);
}

function decrementCounter(counterNumber) {
    let counter = parseInt(localStorage.getItem(`counter${counterNumber}`)) || 0;
    counter--;
    if (counter < 0){
        counter = 0;
    }
    localStorage.setItem(`counter${counterNumber}`, counter);
    updateCounterDisplay(counterNumber, counter);
}



function updateCounterDisplay(counterNumber, counter) {
    document.getElementById(`counter${counterNumber}`).textContent = counter;
}

window.onload = function () {
    for (let counterNumber = 1; counterNumber <= 3; counterNumber++) {
        let counter = parseInt(localStorage.getItem(`counter${counterNumber}`)) || 0;
        updateCounterDisplay(counterNumber, counter);
    }
};