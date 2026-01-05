function checkAnswer(isCorrect, element) {
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden');

    if (isCorrect) {
        element.classList.add('correct-patti');
        feedback.innerHTML = "✅ Sahi Jawab! Bahut badhiya.";
        feedback.style.color = "green";
    } else {
        element.classList.add('wrong-patti');
        feedback.innerHTML = "❌ Galat Jawab! Koshish karte rahein.";
        feedback.style.color = "red";
        
        // Vibration Logic (300ms)
        if (navigator.vibrate) {
            navigator.vibrate(300);
        }
    }
}
