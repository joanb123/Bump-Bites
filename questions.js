document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.qBtn');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        let sweetCount = 0;
        let saltyCount = 0;
        let savoryCount = 0;

        const sweetAnswers = ['chocolate', 'caramel', 'popcorn', 'gummies', 'sweet', 'sweet2'];
        const saltyAnswers = ['pretzels', 'saltedPeanuts', 'seaChips', 'mixedNuts', 'salty', 'salty2'];
        const savoryAnswers = ['potato', 'tortilla', 'beefJerky', 'cheesePuffs', 'biscuits', 'vegetableChips', 'bbqChips', 'cheez', 'savory', 'savory2'];

        const checkedOptions = document.querySelectorAll('input[type="radio"]:checked');

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
        if (sweetCount > saltyCount && sweetCount > savoryCount) {
            result = 'Sweet';
        } else if (saltyCount > sweetCount && saltyCount > savoryCount) {
            result = 'Salty';
        } else if (savoryCount > sweetCount && savoryCount > saltyCount) {
            result = 'Savory';
        } else {
            result = 'mix of all'; // Handle ties or no selection
        }

        localStorage.setItem('boxResult', result);
        window.location.href = 'questionsResult.html';
    });
});
