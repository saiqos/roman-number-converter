"use strict";
const numberInput = document.getElementById('number');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');
const form = document.getElementById('form');

function convertToRoman(input) {
    const symbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]

    const result = [];
    symbols.forEach((arr) => {
        while (input >= arr[1]) {
            result.push(arr[0]);
            input -= arr[1];
        }
    })
    return result.join('');
}

function displayOutput() {
    const numStr = numberInput.value;
    const int = parseInt(numStr, 10);

    output.classList.remove('hidden');

    clearOutput();

    if (isValid(numStr, int)) {
        output.innerText = convertToRoman(int);
    }
}

const isValid = (str, int) => {
    let errText = "";

    if (!str || str.match(/[e.]/g)) {
        errText = "Please enter a valid number";
    } else if (int < 1) {
        errText = 'Please enter a number greater than or equal to 1.';
    } else if (int > 3999) {
        errText = 'Please enter a number less than or equal to 3999.';
    } else {
        return true;
    }

    output.innerText = errText;
    output.classList.add('alert');

    return false;
}

const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    displayOutput();
})

convertBtn.addEventListener('click', displayOutput);

