const inputs = document.getElementById('frm1');
const scores = document.getElementsByClassName('score');
const totals = document.getElementsByClassName('total');
const percentages = document.getElementsByClassName('percentage');

const output = document.getElementById('output');
const button = document.getElementById('submit');

const classScore = document.getElementById('output_score');

button.addEventListener('click', handleClick)

function handleClick() {
    let sumScore = 0;
    let sumTotal = 0;
    let count = 0;
    let average;

    for (let i = 0; i < scores.length ;i++) {

        if (scores[i].value !== '' && totals[i].value !== '') {
            sumScore += Number(scores[i].value)
            sumTotal += Number(totals[i].value)
            count++
        }
 
        average = (sumScore/sumTotal)* 100;
    }

    output.innerHTML = average.toFixed(2) + '%';


    // percentage
    for (let i = 0; i < scores.length; i++) {

        if (totals[i].value !== '') {
            percentages[i].innerHTML = Math.round((Number(scores[i].value) / Number(totals[i].value) * 100)*100)/100 + '%'
        }
    
    }

    // output
    classScore.innerHTML = average.toFixed(2) + '%'
}
