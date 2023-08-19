const bmiForm = document.getElementById('bmiForm');
const bmiResult = document.getElementById('bmiResult');


bmiForm.addEventListener('submit', calculateBMI);

function calculateBMI(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters

    if (isNaN(weight) || isNaN(height)) {
        bmiResult.textContent = 'Please enter valid weight and height.';
        return;
    }

    const bmi = weight / (height * height);
    bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        bmiResult.style.color = 'blue';
        bmiPlan.style.color = 'blue';
        topRef.setAttribute("href","https://www.lybrate.com/topic/diet-for-underweight");
        topRef.setAttribute("target","_blank");

    } else if (bmi >= 18.5 && bmi < 25) {
        bmiResult.style.color = 'green';
        bmiPlan.style.color = 'green';
        topRef.setAttribute("href","https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet");
        topRef.setAttribute("target","_blank");


    } else if (bmi >= 25 && bmi < 30) {
        bmiResult.style.color = 'orange';
        bmiPlan.style.color = 'orange';
        topRef.setAttribute("href","https://www.lybrate.com/topic/obesity-diet-chart");
        topRef.setAttribute("target","_blank");

    } else {
        bmiResult.style.color = 'red';
        bmiPlan.style.color = 'red';
        topRef.setAttribute("href","https://www.mfine.co/guides/indian-obesity-diet-chart");
        topRef.setAttribute("target","_blank");

    }    
}