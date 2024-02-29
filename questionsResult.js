document.addEventListener('DOMContentLoaded', function() {
    const result = localStorage.getItem('boxResult');
    const resultMessage = document.querySelector('.questionsText2');
    // Update the main message to reflect the user's choice
    if (result) {
        resultMessage.innerHTML = `<strong>You got a ${result} box!</strong>`;
    } else {
        resultMessage.innerHTML = '<strong>Please complete the questionnaire to see your result.</strong>';
    }

    const firstChoiceLabel = document.querySelector('label[for="sweet"]'); // Assuming 'sweet' is the first choice
    const secondChoiceLabel = document.querySelector('label[for="salty"]'); // Assuming 'salty' is the second choice

    // Update labels based on the result
    if (result) {
        switch (result) {
            case 'Sweet':
                firstChoiceLabel.innerHTML = "<strong>Salty</strong>";
                secondChoiceLabel.innerHTML = "<strong>Savory</strong>";
                break;
            case 'Salty':
                firstChoiceLabel.innerHTML = "<strong>Sweet</strong>";
                secondChoiceLabel.innerHTML = "<strong>Savory</strong>";
                break;
            case 'Savory':
                firstChoiceLabel.innerHTML = "<strong>Sweet</strong>";
                secondChoiceLabel.innerHTML = "<strong>Salty</strong>";
                break;
            default:
                // Handle unexpected result
                console.log("Unexpected result:", result);
                break;
        }
    }
});
