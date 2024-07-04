// Lvl1:
//      1.Write an algorithm to input two numbers and print the bigger number.

document.getElementById('lvl1-q1-btn').addEventListener('click', () => {
    const input1 = Number(document.getElementById('lvl1-q1-i1').value);
    const input2 = Number(document.getElementById('lvl1-q1-i2').value);
    console.log(input1, input2);
    if (input1 > input2) {
        document.getElementById('lvl1-q1-res').innerHTML = `<h3>${input1}</h3>`;
    }
    else if (input2 > input1) {
        document.getElementById('lvl1-q1-res').innerHTML = `<h3>${input2}</h3>`;
    }
    else {
        document.getElementById('lvl1-q1-res').innerHTML = `<h3>Equal Numbers</h3>`;
    }


});



// 2.Write an algorithm to check whether a number is negative, positive or zero. 

document.getElementById('lvl1-q2-btn').addEventListener('click', () => {
    const input = Number(document.getElementById('lvl1-q2-i1').value);
    if (input > 0) {
        document.getElementById('lvl1-q2-res').innerHTML = `<h3>Positive Number</h3>`;
    } else if (input < 0) {
        document.getElementById('lvl1-q2-res').innerHTML = `<h3>Negative Number</h3>`;
    } else {
        document.getElementById('lvl1-q2-res').innerHTML = `<h3>Zero</h3>`;

    }


    document.getElementById('lvl1-q2-res').innerHTML = `<h3>${result}</h3>`;
});
// Lvl2:
//     1.Write an algorithm to check whether a number is divisible by 5 and 11 or not.
document.getElementById('lvl2-q1-btn').addEventListener('click', () => {
    const number = Number(document.getElementById('lvl2-q1-i1').value);
    if (number % (5 * 11) === 0) {
        document.getElementById('lvl2-q1-res').innerHTML = `<h3>The number is divisible by 5 and 11</h3>`;
    } else {
        document.getElementById('lvl2-q1-res').innerHTML = `<h3>The number is not divisible by 5 and 11</h3>`;
    }
});

// 2.Write an algorithm to check whether a number is even or odd.

document.getElementById('lvl2-q2-btn').addEventListener('click', () => {
    const number = Number(document.getElementById('lvl2-q2-i1').value);
    if (number % 2 === 0 && number !== 0) {
        document.getElementById('lvl2-q2-res').innerHTML = `<h3>Even Number</h3>`;
    }
    else if (number === 0) {
        document.getElementById('lvl2-q2-res').innerHTML = `<h3>Zero</h3>`;
    } else {
        document.getElementById('lvl2-q2-res').innerHTML = `<h3>Odd Number</h3>`;

    }



});

// 3.Write an algorithm to enter the length in centimeters and convert it to meters and kilometers.

document.getElementById('lvl2-q3-btn').addEventListener('click', () => {
    const number = Number(document.getElementById('lvl2-q3-i1').value);
    const start = Number(document.getElementById('lvl2-q3-i2').value);
    const end = Number(document.getElementById('lvl2-q3-i3').value);

    if (number >= start && number <= end) {
        document.getElementById('lvl2-q3-res').innerHTML = `<h3>Within Range</h3>`;
    }
    else {
        document.getElementById('lvl2-q3-res').innerHTML = `<h3>Out of Range</h3>`;
    }

});





// Lvl3:
//  1.Write an algorithm to calculate a person's BMI and check whether a person is underweight, overweight, or fit. BMI is calculated using the weight divided by the height squared, where the weight in kg and height in m.
// People having BMI under 18.5 are underweight, from 18.5 to 25 are fit, and over 25 are overweight. Given Height and Weight.

const CalculateBMIBtn = document.getElementById('lvl3-q1-btn');

CalculateBMIBtn.addEventListener('click', () => {
    const weight = Number(document.getElementById('lvl3-q1-i1').value);

    const height = Number(document.getElementById('lvl3-q1-i2').value);

    const result = (weight / height ** 2).toFixed(2);

    document.getElementById('lvl3-q1-res').innerHTML = `<h3>${result} kg/m^2</h3>`;

    if (result >= 18.5 && result <= 25) {
        document.getElementById('lvl3-q1-com').innerHTML = `<h3>Fit</h3>`;
    } else if (result < 18.5) {
        document.getElementById('lvl3-q1-com').innerHTML = `<h3>Underweight</h3>`;
    } else {
        document.getElementById('lvl3-q1-com').innerHTML = `<h3>Overweight</h3>`;
    }
});



// 4. A discount is made on a purchase as follows: 
// * if purchase ≤ 1000 L.E., there is no discount 
// * if purchase > 1000 L.E., the discount is 5% 
// Given the cost of the purchase, write an algorithm to calculate and print the money paid taking into consideration the 10% sales taxes. The taxes are calculated on the amount after the discount. 


document.getElementById('lvl3-q2-btn').addEventListener('click', () => {
    const purchase = Number(document.getElementById('lvl3-q2-i1').value);
    let discount;
    const taxes = 1.1;
    if (purchase <= 1000) {
        discount = 0;
    }
    else {
        discount = 0.05;
    }
    const netCost = taxes * purchase * (1 - discount);


    document.getElementById('lvl3-q2-res').innerHTML = `<h3>${netCost}</h3>`;


});




// 5.For the first two years, a dog year is equal to 10.5 human years. After that, each dog year is equal to 4 human years. Write a program to calculate a dog age in dog years, given a dog age in human years. Expected output should look like the following: 
// * Input a dog’s age in human years: 2 The dog’s age in dog years is 21 2 
// * Input a dog’s age in human years: 15 The dog’s age in dog years is 73 
// * Input a dog’s age in human years: -5 Age must be positive number.

document.getElementById('lvl3-q5-btn').addEventListener('click', () => {
    const dogAgeHumanYears = Number(document.getElementById('lvl3-q5-i1').value);
    let dogAgeDogYears;

    if (dogAgeHumanYears <= 2 && dogAgeHumanYears >= 0) {
        document.getElementById('lvl3-q5-res').innerHTML = `<h3>${dogAgeHumanYears * 10.5}</h3>`;
    }
    else if (dogAgeHumanYears > 2) {

        document.getElementById('lvl3-q5-res').innerHTML = `<h3>${2 * 10.5 + (dogAgeHumanYears - 2) * 4}</h3>`;
    }
    else {
        document.getElementById('lvl3-q5-res').innerHTML = `<h3>Age must be a Positive number</h3>`;
    }
});

// 7. Write an algorithm that acts as a calculator for 2 numbers. Calculator should be able to add, subtract, multiply, and divide. Given Two Number and the sign of the arithmetic operation.


document.getElementById('lvl3-q7-btn').addEventListener('click', () => {
    const operand1 = parseFloat(document.getElementById('lvl3-q7-i1').value);
    const operand2 = parseFloat(document.getElementById('lvl3-q7-i2').value);
    const operator = document.getElementById('lvl3-q7-i3').value;
    let result;

    switch (operator) {
        case '*':
            result = operand1 * operand2;
            break;

        case '/':
            result = operand1 / operand2;
            break;

        case '+':
            result = operand1 + operand2;
            break;

        case '-':
            result = operand1 - operand2;
            break;


        default:
            result = 'Wrong Operator'
            break;
    }
    document.getElementById('lvl3-q7-res').innerHTML = `<h3>${result}</h3>`;
});
