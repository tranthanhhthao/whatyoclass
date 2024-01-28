const inputs = document.getElementById('frm1');
const scores = document.getElementsByClassName('score');
const totals = document.getElementsByClassName('total');
const percentages = document.getElementsByClassName('percentage');

const buttonSubmit = document.getElementById('submit');

const classGrade = document.getElementById('output_grade');
const classScore = document.getElementById('output_score');
const classCurrentSum = document.getElementById('output_currentSum');
const classCurrentTotal = document.getElementById('output_currentTotal')

buttonSubmit.addEventListener('click', handleClick())

function handleClick() {
    let sumScore = 0;
    let sumCurrent = 0;
    let currentTotal = 0;
    let count = 0;
    let average;

    for (let i = 0; i < scores.length ;i++) {

        if (scores[i].value !== '' && totals[i].value !== '') {
            sumScore += Number(scores[i].value)
            sumCurrent += Number(totals[i].value)
            count++

            classScore.innerHTML = sumScore;
            classCurrentSum.innerHTML = sumCurrent
        }

        if (totals[i].value !== '') {
            currentTotal += Number(totals[i].value)

            classCurrentTotal.innerHTML = currentTotal
        }
 
        average = (sumScore/sumCurrent)* 100;
    }

    classGrade.innerHTML = average.toFixed(2) + '%';


    // percentage
    for (let i = 0; i < scores.length; i++) {

        if (totals[i].value !== '' && scores[i].value !== '') {
            percentages[i].innerHTML = Math.round((Number(scores[i].value) / Number(totals[i].value) * 100)*100)/100 + '%'
        }
    
    }

    // output
    classGrade.innerHTML = average.toFixed(2) + '%'

}
