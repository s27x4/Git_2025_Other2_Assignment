document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');
    const resultElement = document.getElementById('result');
    const correctAnswer = '2';
    submitButton.disabled = true;

    // 選択肢を選んだら解答ボタンを有効化する～
    document.querySelectorAll('input[name="quiz-choice"]').forEach(radio => {
        radio.addEventListener('change', function() {
            submitButton.disabled = !document.querySelector('input[name="quiz-choice"]:checked');
        });
    });

    submitButton.addEventListener('click', function() {
        const selectedChoice = document.querySelector('input[name="quiz-choice"]:checked');
        
        if (!selectedChoice) {
            resultElement.textContent = '選択肢を選んでください';
            return;
        }

        if (selectedChoice.value === correctAnswer) {
            resultElement.textContent = '正解！';
        } else {
            resultElement.textContent = '不正解！';
        }
    });
});