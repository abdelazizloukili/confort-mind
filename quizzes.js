document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navbarNav = document.getElementById('navbarNav');

    menuButton.addEventListener('click', () => {
        navbarNav.classList.toggle('show');
    });

    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const ariaExpanded = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', !ariaExpanded);
            content.style.display = ariaExpanded ? 'none' : 'block';
        });
    });
});












function calculateResults(quizType) {
    let score = 0;
    const quizForm = document.getElementById(`${quizType}-quiz`);
    const resultDiv = document.getElementById(`${quizType}-result`);

    // Calculate score based on selected values
    const formData = new FormData(quizForm);
    for (let [key, value] of formData.entries()) {
        score += parseInt(value);
    }

    // Display result based on score
    let resultText = "";
    switch (quizType) {
        case 'depression':
            if (score <= 3) resultText = "Your depression level is low,Your mental health seems to be in a good place!";
            else if (score <= 6) resultText = "Your depression level is moderate.";
            else resultText = "Your depression level is high,ou may be experiencing severe mental health issues. Consider seeking professional help.";
            break;
        case 'anxiety':
            if (score <= 3) resultText = "Your anxiety level is low,Your mental health seems to be in a good place!";
            else if (score <= 6) resultText = "Your anxiety level is moderate.";
            else resultText = "Your anxiety level is high,ou may be experiencing severe mental health issues. Consider seeking professional help.";
            break;
        case 'stress':
            if (score <= 3) resultText = "Your stress level is low,Your mental health seems to be in a good place!";
            else if (score <= 6) resultText = "Your stress level is moderate.";
            else resultText = "Your stress level is high,ou may be experiencing severe mental health issues. Consider seeking professional help.";
            break;
        case 'bipolar':
            if (score <= 3) resultText = "Your symptoms of bipolar disorder are low,Your mental health seems to be in a good place!";
            else if (score <= 6) resultText = "Your symptoms of bipolar disorder are moderate.";
            else resultText = "Your symptoms of bipolar disorder are high,ou may be experiencing severe mental health issues. Consider seeking professional help.";
            break;
        case 'insomnia':
            if (score <= 3) resultText = "Your insomnia level is low,Your mental health seems to be in a good place!";
            else if (score <= 6) resultText = "Your insomnia level is moderate.";
            else resultText = "Your insomnia level is high,ou may be experiencing severe mental health issues. Consider seeking professional help.";
            break;
        case 'eating':
            if (score <= 3) resultText = "Your symptoms of eating disorder are low,Your mental health seems to be in a good place!";
            else if (score <= 6) resultText = "Your symptoms of eating disorder are moderate.";
            else resultText = "Your symptoms of eating disorder are high,ou may be experiencing severe mental health issues. Consider seeking professional help.";
            break;
        case 'children':
            if (score <= 3) resultText = "Your child's mental health concerns are low,Your mental health seems to be in a good place!";
            else if (score <= 6) resultText = "Your child's mental health concerns are moderate.";
            else resultText = "Your child's mental health concerns are high,ou may be experiencing severe mental health issues. Consider seeking professional help.";
            break;
        case 'postpartum':
            if (score <= 3) resultText = "Your postpartum depression symptoms are low,Your mental health seems to be in a good place!";
            else if (score <= 6) resultText = "Your postpartum depression symptoms are moderate.";
            else resultText = "Your postpartum depression symptoms are high,ou may be experiencing severe mental health issues. Consider seeking professional help.";
            break;
    }

    resultDiv.textContent = resultText;
}
