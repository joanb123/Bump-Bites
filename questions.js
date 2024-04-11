document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.qBtn');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const checkedOptions = document.querySelectorAll('input[type="radio"]:checked');

        // Check if no options are selected
        if (checkedOptions.length === 0) {
            alert('Please make a selection before submitting.');
            return; // Exit the function early
        }

        let sweetCount = 0;
        let saltyCount = 0;
        let savoryCount = 0;

        const sweetAnswers = ['chocolate', 'caramel', 'popcorn', 'gummies', 'sweet', 'sweet2'];
        const saltyAnswers = ['pretzels', 'saltedPeanuts', 'seaChips', 'mixedNuts', 'salty', 'salty2'];
        const savoryAnswers = ['potato', 'tortilla', 'beefJerky', 'cheesePuffs', 'biscuits', 'vegetableChips', 'bbqChips', 'cheez', 'savory', 'savory2'];

        checkedOptions.forEach(option => {
            if (sweetAnswers.includes(option.value)) {
                sweetCount++;
            } else if (saltyAnswers.includes(option.value)) {
                saltyCount++;
            } else if (savoryAnswers.includes(option.value)) {
                savoryCount++;
            }
        });

        let result = '';
        // Prioritize tastes in case of a tie: sweet > salty > savory
        if (sweetCount >= saltyCount && sweetCount >= savoryCount) {
            result = 'Sweet';
        } else if (saltyCount >= sweetCount && saltyCount >= savoryCount) {
            result = 'Salty';
        } else {
            result = 'Savory';
        }

        localStorage.setItem('boxResult', result);
        window.location.href = 'questionsResult.html';
    });
});
