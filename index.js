//Q1
const q1SubmitBtn = document.getElementById('q1-btn');

q1SubmitBtn.addEventListener('click', () => {
    const q1Input1Val = Number(document.getElementById('q1-i1').value);

    const q1Input2Val = Number(document.getElementById('q1-i2').value);

    const result = q1Input1Val + q1Input2Val;

    document.getElementById('q1-res').innerHTML = `<h3>${result}</h3>`;
});



