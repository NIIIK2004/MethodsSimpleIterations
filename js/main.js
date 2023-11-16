function runIteration() {
    document.getElementById('output').innerHTML = '';

    const A = [
        [+document.getElementById('a00').value, +document.getElementById('a01').value, + document.getElementById('a02').value, + document.getElementById('a03').value],
        [+document.getElementById('a10').value, +document.getElementById('a11').value, + document.getElementById('a12').value, + document.getElementById('a13').value],
        [+document.getElementById('a20').value, +document.getElementById('a21').value, + document.getElementById('a22').value, + document.getElementById('a23').value],
        [+document.getElementById('a30').value, +document.getElementById('a31').value, + document.getElementById('a32').value, + document.getElementById('a33').value],
    ];

    const b = [+document.getElementById('b0').value, + document.getElementById('b1').value, +document.getElementById('b2').value, +document.getElementById('b3').value];
    // Ввод начального приближения
    const x0 = [0, 0, 0, 0];
    const iterations = +document.getElementById('iterations').value || 5;
    const result = simpleIterationMethod(A, b, x0, iterations);


}

function simpleIterationMethod(A, b, x0, iterations) {
    const n = A.length;
    let x = new Array(n);

    for (let k = 0; k < iterations; k++) {
        for (let i = 0; i < n; i++) {
            let sum = 0.0;
            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    sum += A[i][j] * x0[j];
                }
            }
            x[i] = (b[i] - sum) / A[i][i];
        }

        x0 = [...x];

        const outputElement = document.getElementById('output');
        const iterationText = `<p style="color:#8e8e8e; font-size: 29px;">Итерация</p> <p>(${k + 1}): {${x.join(', ')}}</p>`;
        const lineDivider = `<div class="line"></div>`;

        outputElement.innerHTML += `<div class="fade-in">${iterationText}${lineDivider}</div>`;
    }

}

function clearOutput() {
    document.getElementById('output').innerHTML = '';
}
