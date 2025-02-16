const nextBtn = document.getElementById('next-btn');
const optionBtns = document.querySelectorAll('.answer-btn');

document.addEventListener('DOMContentLoaded', () => {

    displayQuestion(0);

    nextBtn?.addEventListener('click', () => {
        if (nextBtn.innerText === 'Submit') {
            displayResult();
        }
        else if (quiz1.currentIndex < quiz1.questionArray.length - 1) {
            displayQuestion(quiz1.currentIndex + 1);
        }
    })

    optionBtns?.forEach((btn) => {
        btn.addEventListener('click', handleOptionButtons);
    });
})

interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

class Quiz {
    questionArray: Question[];
    currentIndex: number;
    userAnswer: string;
    score?: number;

    constructor(questionArray: Question[]) {
        this.questionArray = questionArray;
        this.currentIndex = 0;
        this.userAnswer = "";
        this.score = 0;
    }
}

const q1: Question = {
    question: "Which of the following is used to define a type alias in TypeScript?",
    choices: ["type", "interface", "class", "enum"],
    correctAnswer: "type"
};
const q2: Question = {
    question: "What is the purpose of the 'never' type in TypeScript?",
    choices: ["Indicates a variable can hold any value", "Indicates a function never returns", "Indicates a variable may not be assigned a value", "Indicates a function always returns a value"],
    correctAnswer: "Indicates a function never returns"
};

const q3: Question = {
    question: "Which keyword is used to explicitly specify that a variable should not change its value in TypeScript?",
    choices: ["var", "let", "const", "final"],
    correctAnswer: "const"
};

const q4: Question = {
    question: "What does the 'extends' keyword indicate when used in a TypeScript class?",
    choices: ["Implements an interface", "Creates a new type alias", "Inherits properties and methods from another class", "Specifies a module"],
    correctAnswer: "Inherits properties and methods from another class"
};

const q5: Question = {
    question: "Which of the following is NOT a valid access modifier in TypeScript?",
    choices: ["private", "public", "protected", "default"],
    correctAnswer: "default"
};

const quiz1 = new Quiz([q1, q2, q3, q4, q5]);

const displayQuestion = (index: number): void => {
    const scoreDisplay = document.getElementById('score') as HTMLElement;
    scoreDisplay.style.display = 'none';
    quiz1.currentIndex = index;
    const question = quiz1.questionArray[quiz1.currentIndex];
    document.getElementById('question')!.innerHTML = `Q. ${question.question}`;

    document.getElementById('choice1')!.innerHTML = `Option 1. ${question.choices[0]}`;
    document.getElementById('choice2')!.innerHTML = `Option 2. ${question.choices[1]}`;
    document.getElementById('choice3')!.innerHTML = `Option 3. ${question.choices[2]}`;
    document.getElementById('choice4')!.innerHTML = `Option 4. ${question.choices[3]}`;

    if (nextBtn) {
        nextBtn.innerText = (quiz1.currentIndex === quiz1.questionArray.length - 1) ? 'Submit' : 'Next';
    }
}

const handleOptionButtons = (event: Event): void => {
    const optionBtn = event.target as HTMLButtonElement;
    if (optionBtn.textContent?.split('. ')[1] === quiz1.questionArray[quiz1.currentIndex].correctAnswer) {
        quiz1.score++;
        console.log("Correct answer");
    }
    else {
        console.log("incorrect answer");
    }
    goToNextQuestion();
}

const goToNextQuestion = (): void => {
    if (quiz1.currentIndex < quiz1.questionArray.length - 1) {
        quiz1.currentIndex += 1;
        displayQuestion(quiz1.currentIndex)
    }
    else {
        displayResult();
    }
}

const displayResult = (): void => {
    const displayDiv = document.querySelector('.display') as HTMLElement;
    const displayResultDiv = document.querySelector('.display-result') as HTMLElement;
    if (displayDiv && displayResultDiv) {
        displayDiv.style.display = 'none';
        displayResultDiv.style.display = 'block';
        displayResultDiv.innerHTML = `
                            <div class = "result-container">
                                <h2 class="result-title">Quiz result</h2>
                                <h1 class="result-score"> your final score is : ${quiz1.score}/${quiz1.questionArray.length}</h1>
                                <button class = "restart-btn" id = "restart-btn">Restart</button>
                            </div`;
        const scoreDisplay = document.getElementById('score') as HTMLElement;
        scoreDisplay.style.display = 'Block';
        const restartBtn = document.getElementById('restart-btn');
        restartBtn?.addEventListener('click', () => {
            quiz1.currentIndex = 0;
            quiz1.score = 0;
            displayResultDiv.style.display = 'none';
            displayDiv.style.display = 'block';
            displayQuestion(quiz1.currentIndex);
        });
    }
}