var questionsArray = [
    {
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];



function startQuiz(){
    window.location.href = "quiz.html";
}

var questionCount = 0;
var score = 0;
var currentAns = "";

function renderQuestion(x){
    var questionElement = document.getElementById("divQuestion");
    questionElement.innerHTML = "Q"+(x+1)+". "+questionsArray[x].question;
    var optionsElement = document.getElementsByClassName("divOption");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].innerHTML = questionsArray[x].options[i].toUpperCase();
    }
}

function putActiveClass(x){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
    optionsElement[x].classList.add("active");
}

function removeActiveClass(){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
}

function checkAnswer(x){
    var userAns = document.getElementsByClassName("active");
    if(userAns[0].innerHTML.toLocaleLowerCase() == questionsArray[x].answer){
        score += 10;
    }
}   

function showNextQuestion(){
    
    checkAnswer(questionCount);
    questionCount++;
    if(questionCount <= questionsArray.length-1){
        renderQuestion(questionCount);
    }
    removeActiveClass();
    if(questionCount == questionsArray.length){
        document.write("<h1 class='class=text-center my-4'>Result</h1>");
        document.write("You scored "+score+" out of 50");
        document.write("<br>Reload the page to start over");
    }
    console.log(questionCount)
}
renderQuestion(questionCount);