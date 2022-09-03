const questions = [
    {
        "que" : "Which one is a markup language?",
        "a" : "HTML",
        "b" : "CSS",
        "c" : "Javascript",
        "d" : "Python",
        "correct" : "a"
    },
    {
        "que" : "What is CSS?",
        "a" : "Hyper text transer prtocol",
        "b" : "Cascading style sheet",
        "c" : "Programming Language",
        "d" : "Scripting Language",
        "correct" : "b"
    },
    {
        "que" : "What is javascript?",
        "a" : "Cascading style sheet",
        "b" : "Hyper text transer prtocol",
        "c" : "Programming Language",
        "d" : "Scripting Language",
        "correct" : "d"
    },
    {
        "que" : "Javascript is a?",
        "a" : "V8 engine",
        "b" : "Multi threated language",
        "c" : "Single thereated language",
        "d" : "Programming Language",
        "correct" : "c"
    }
];

let index = 0;

let total = questions.length;
let right = 0, 
    wrong = 0

const questionText = document.getElementById('question');
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    questionText.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer();
    if(ans === data.correct){
        right++
    }
    else{
        wrong++
    };
    index++;
    loadQuestion();
    return;
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach( (input) => {
        if(input.checked){
            answer = input.value;
        }
    })
    return answer;
};

const reset = () => {
    optionInputs.forEach( (input) => {
        return input.checked = false;
    })
};

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
        <h3>Congratulations! You finished the Quiz</h3>
        <h2>${right}/${total} are correct</h2>
    `
}


loadQuestion();