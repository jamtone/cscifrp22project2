document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');
  
    questions.forEach(function(question, index) {
      const answer = answers[index];
  
      question.addEventListener('click', function() {
        if (answer.style.display === 'none') {
          answer.style.display = 'block';
        } else {
          answer.style.display = 'none';
        }
      });
    });
  });