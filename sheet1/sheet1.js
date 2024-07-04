// Lv1l: 
// 1.Write an algorithm to input two numbers and find their sum. 

const lvl1Q1SubmitBtn = document.getElementById('lvl1-q1-btn');

lvl1Q1SubmitBtn.addEventListener('click', () => {
    const lvl1Q1Input1Val = Number(document.getElementById('lvl1-q1-i1').value);

    const lvl1Q1Input2Val = Number(document.getElementById('lvl1-q1-i2').value);

    const result = lvl1Q1Input1Val + lvl1Q1Input2Val;

    document.getElementById('lvl1-q1-res').innerHTML = `<h3>${result}</h3>`;
});



// 2.Write an algorithm to input three numbers and find their average. 

const lvl1Q2SubmitBtn = document.getElementById('lvl1-q2-btn');

lvl1Q2SubmitBtn.addEventListener('click', () => {
    const lvl1Q2Input1Val = Number(document.getElementById('lvl1-q2-i1').value);

    const lvl1Q2Input2Val = Number(document.getElementById('lvl1-q2-i2').value);

    const lvl1Q2Input3Val = Number(document.getElementById('lvl1-q2-i3').value);

    const result = (lvl1Q2Input1Val + lvl1Q2Input2Val + lvl1Q2Input3Val) / 3;

    document.getElementById('lvl1-q2-res').innerHTML = `<h3>${result}</h3>`;
});
// Lvl2: 
// 1.Write an algorithm that determines the flying time between two cities given the distance between them and the average speed of the airplane.
const lvl2Q1SubmitBtn = document.getElementById('lvl2-q1-btn');

lvl2Q1SubmitBtn.addEventListener('click', () => {
    const distance = Number(document.getElementById('lvl2-q1-i1').value);

    const speed = Number(document.getElementById('lvl2-q1-i2').value);

    const result = (distance / speed).toFixed(2);

    document.getElementById('lvl2-q1-res').innerHTML = `<h3>${result} m/s</h3>`;
});

// 2.Write an algorithm that calculates your BMI given your weight and height. The BMI is calculated using the weight divided by the height squared, where the weight in kg and height in m.

const CalculateBMIBtn = document.getElementById('lvl2-q2-btn');

CalculateBMIBtn.addEventListener('click', () => {
    const weight = Number(document.getElementById('lvl2-q2-i1').value);

    const height = Number(document.getElementById('lvl2-q2-i2').value);

    const result = (weight / height ** 2).toFixed(2);

    document.getElementById('lvl2-q2-res').innerHTML = `<h3>${result} kg/m^2</h3>`;
});

// 3.Write an algorithm to enter the length in centimeters and convert it to meters and kilometers.

document.getElementById('lvl2-q3-btn1').addEventListener('click', () => {
    const lengthCm = Number(document.getElementById('lvl2-q3-i1').value);
    const result = (lengthCm / 100).toFixed(2);

    document.getElementById('lvl2-q3-res').innerHTML = `<h3>${result} m</h3>`;
});

document.getElementById('lvl2-q3-btn2').addEventListener('click', () => {
    const lengthCm = Number(document.getElementById('lvl2-q3-i1').value);
    const result = (lengthCm / 1000).toFixed(2);

    document.getElementById('lvl2-q3-res').innerHTML = `<h3>${result} km</h3>`;
});


// 4.Write an algorithm to enter data in bytes and converts it in bit and gigabytes.
document.getElementById('lvl2-q4-btn1').addEventListener('click', () => {
    const bytes = Number(document.getElementById('lvl2-q4-i1').value);
    const bits = (bytes * 8);

    document.getElementById('lvl2-q4-res').innerHTML = `<h3>${bits} bits</h3>`;
});

document.getElementById('lvl2-q4-btn2').addEventListener('click', () => {
    const bytes = Number(document.getElementById('lvl2-q4-i1').value);
    const gigaBytes = (parseFloat(bytes) / (1024 * 1024 * 1024));

    document.getElementById('lvl2-q4-res').innerHTML = `<h3>${gigaBytes} giga bytes</h3>`;
});



// 5.Write an algorithm that calculates the time needed to upload a file given the upload speed and file size.

document.getElementById('lvl2-q5-btn').addEventListener('click', () => {
    const bytes = Number(document.getElementById('lvl2-q5-i1').value);

    const speed = Number(document.getElementById('lvl2-q5-i2').value);

    const result = (bytes / speed).toFixed(2);

    document.getElementById('lvl2-q5-res').innerHTML = `<h3>${result} s</h3>`;
});

// 6.Write an algorithm that calculates the time needed to upload a file in seconds given the upload speed in Mbps and file size in GB.
document.getElementById('lvl2-q6-btn').addEventListener('click', () => {
    const sizeGB = Number(document.getElementById('lvl2-q6-i1').value);

    const speedMbps = Number(document.getElementById('lvl2-q6-i2').value);

    const result = (sizeGB * 1024 * 1024 * 1024 * 8) / (speedMbps * 1000000);

    document.getElementById('lvl2-q6-res').innerHTML = `<h3>${result} s</h3>`;
});
// 7.Given the radius of circle, determine the area and circumference.
document.getElementById('lvl2-q7-btn1').addEventListener('click', () => {
    const raduis = Number(document.getElementById('lvl2-q7-i1').value);
    const result = (2 * Math.PI * raduis).toFixed(5);

    document.getElementById('lvl2-q7-res').innerHTML = `<h3>${result} m</h3>`;
});
document.getElementById('lvl2-q7-btn2').addEventListener('click', () => {
    const raduis = Number(document.getElementById('lvl2-q7-i1').value);
    const result = (Math.PI * raduis**2).toFixed(5);

    document.getElementById('lvl2-q7-res').innerHTML = `<h3>${result} m^2</h3>`;
});

// Lvl3:
// 1.Write an algorithm that takes as inputs two numbers and swaps their values.

// lvl3-q1-res
let input1;
let input2;
document.getElementById('lvl3-q1-i1').addEventListener('change', ()=>{
    input1 = Number(document.getElementById('lvl3-q1-i1').value);
    document.getElementById('lvl3-q1-res1').innerHTML = `<h3> Input1: ${input1}</h3>`
})
document.getElementById('lvl3-q1-i2').addEventListener('change', ()=>{
    input2 = Number(document.getElementById('lvl3-q1-i2').value);
    document.getElementById('lvl3-q1-res2').innerHTML = `<h3> Input2: ${input2}</h3>`
})


document.getElementById('lvl3-q1-btn').addEventListener('click', () => {
    
    [input1, input2] = [input2, input1];
    document.getElementById('lvl3-q1-res1').innerHTML = `<h3> Input1: ${input1}</h3>`;
     document.getElementById('lvl3-q1-res2').innerHTML = `<h3> Input2: ${input2}</h3>`;
});



