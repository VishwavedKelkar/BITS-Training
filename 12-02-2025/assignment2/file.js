var nextBtn = document.getElementById('next-btn');
var optionBtns = document.querySelectorAll('.answer-btn');
document.addEventListener('DOMContentLoaded', function () {
    displayQuestion(0);
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', function () {
        if (nextBtn.innerText === 'Submit') {
            displayResult();
        }
        else if (quiz1.currentIndex < quiz1.questionArray.length - 1) {
            displayQuestion(quiz1.currentIndex + 1);
        }
    });
    optionBtns === null || optionBtns === void 0 ? void 0 : optionBtns.forEach(function (btn) {
        btn.addEventListener('click', handleOptionButtons);
    });
});
var Quiz = /** @class */ (function () {
    function Quiz(questionArray) {
        this.questionArray = questionArray;
        this.currentIndex = 0;
        this.userAnswer = "";
        this.score = 0;
    }
    return Quiz;
}());
var q1 = {
    question: "Which of the following is used to define a type alias in TypeScript?",
    choices: ["type", "interface", "class", "enum"],
    correctAnswer: "type"
};
var q2 = {
    question: "What is the purpose of the 'never' type in TypeScript?",
    choices: ["Indicates a variable can hold any value", "Indicates a function never returns", "Indicates a variable may not be assigned a value", "Indicates a function always returns a value"],
    correctAnswer: "Indicates a function never returns"
};
var q3 = {
    question: "Which keyword is used to explicitly specify that a variable should not change its value in TypeScript?",
    choices: ["var", "let", "const", "final"],
    correctAnswer: "const"
};
var q4 = {
    question: "What does the 'extends' keyword indicate when used in a TypeScript class?",
    choices: ["Implements an interface", "Creates a new type alias", "Inherits properties and methods from another class", "Specifies a module"],
    correctAnswer: "Inherits properties and methods from another class"
};
var q5 = {
    question: "Which of the following is NOT a valid access modifier in TypeScript?",
    choices: ["private", "public", "protected", "default"],
    correctAnswer: "default"
};
var quiz1 = new Quiz([q1, q2, q3, q4, q5]);
var displayQuestion = function (index) {
    var scoreDisplay = document.getElementById('score');
    scoreDisplay.style.display = 'none';
    quiz1.currentIndex = index;
    var question = quiz1.questionArray[quiz1.currentIndex];
    document.getElementById('question').innerHTML = "Q. ".concat(question.question);
    document.getElementById('choice1').innerHTML = "Option 1. ".concat(question.choices[0]);
    document.getElementById('choice2').innerHTML = "Option 2. ".concat(question.choices[1]);
    document.getElementById('choice3').innerHTML = "Option 3. ".concat(question.choices[2]);
    document.getElementById('choice4').innerHTML = "Option 4. ".concat(question.choices[3]);
    if (nextBtn) {
        nextBtn.innerText = (quiz1.currentIndex === quiz1.questionArray.length - 1) ? 'Submit' : 'Next';
    }
};
var handleOptionButtons = function (event) {
    var _a;
    var optionBtn = event.target;
    if (((_a = optionBtn.textContent) === null || _a === void 0 ? void 0 : _a.split('. ')[1]) === quiz1.questionArray[quiz1.currentIndex].correctAnswer) {
        quiz1.score++;
        console.log("Correct answer");
    }
    else {
        console.log("incorrect answer");
    }
    goToNextQuestion();
};
var goToNextQuestion = function () {
    if (quiz1.currentIndex < quiz1.questionArray.length - 1) {
        quiz1.currentIndex += 1;
        displayQuestion(quiz1.currentIndex);
    }
    else {
        displayResult();
    }
};
var displayResult = function () {
    var displayDiv = document.querySelector('.display');
    var displayResultDiv = document.querySelector('.display-result');
    if (displayDiv && displayResultDiv) {
        displayDiv.style.display = 'none';
        displayResultDiv.style.display = 'block';
        displayResultDiv.innerHTML = "\n                            <div class = \"result-container\">\n                                <h2 class=\"result-title\">Quiz result</h2>\n                                <h1 class=\"result-score\"> your final score is : ".concat(quiz1.score, "/").concat(quiz1.questionArray.length, "</h1>\n                                <button class = \"restart-btn\" id = \"restart-btn\">Restart</button>\n                            </div");
        var scoreDisplay = document.getElementById('score');
        scoreDisplay.style.display = 'Block';
        var restartBtn = document.getElementById('restart-btn');
        restartBtn === null || restartBtn === void 0 ? void 0 : restartBtn.addEventListener('click', function () {
            quiz1.currentIndex = 0;
            quiz1.score = 0;
            displayResultDiv.style.display = 'none';
            displayDiv.style.display = 'block';
            displayQuestion(quiz1.currentIndex);
        });
    }
};
