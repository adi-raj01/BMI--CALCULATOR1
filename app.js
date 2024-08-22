// script.js
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get weight and height values from input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert height to meters

    if (!weight || !height) {
        alert('Please enter valid weight and height.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Calculate ideal weight range
    const minIdealWeight = 18.5 * (height * height);
    const maxIdealWeight = 24.9 * (height * height);

    // Display results
    document.getElementById('bmi-value').textContent = `Your BMI: ${bmi.toFixed(2)}`;
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
    document.getElementById('ideal-weight').textContent = `Ideal weight range: ${minIdealWeight.toFixed(1)} kg - ${maxIdealWeight.toFixed(1)} kg`;
});
