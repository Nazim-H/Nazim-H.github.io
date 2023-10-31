function generateProblem() {
    var num1 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    var num2 = Math.floor(Math.random() * 10) + 1; // Generate another random number between 1 and 10
    var operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]; // Choose a random operator (+, -, *, /)

    var problem = num1 + ' ' + operator + ' ' + num2;
    var answer = eval(problem); // Evaluate the math problem to get the answer

    document.getElementById('problem').innerHTML = problem + ' = <input type="number" id="userAnswer"> <button onclick="checkAnswer(' + answer + ')">Check</button>';
}

function checkAnswer(correctAnswer) {
    var userAnswer = document.getElementById('userAnswer').value;
    if (userAnswer == correctAnswer) {
        alert('Correct! Well done!');
    } else {
        alert('Incorrect. Try again!');
    }
}
