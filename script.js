var timerelement = document.getElementById("timeremaining")
var startbutton = document.getElementById("startbutton")
var mainarea = document.getElementById("mainarea")
var questiontext = document.getElementById("question")
var intervel; 
var timeremaining; 
var currentquestion = 0
var score = 0
var questions = [
{
    question: "Did Steve Jobs write code?",
    answer: "False"
},
{
    question: "Did Steve Jobs choose to sell the first Macintosh computer for $666. 66 because of the repeating numbers?",
    answer: "True"
},
{
    question: "When using a computers Terminal are you directly commanding the computer instead of using a graphic?",
    answer: "True"
},
{
    question: "Is CSS used to give the content from HTML style?",
    answer: "True"
}
]
function gameover (){
    questiontext.textContent = `FINAL SCORE ${score}`
}
function next(event){
    console.log(event)
    if (event.target.textContent == questions[currentquestion].answer){
        score++
    } else {
        
    }
    currentquestion++
    questiontext.textContent = questions[currentquestion].question
}
function starttimer(){
    timeremaining=15
    intervel=setInterval(function(){
        timeremaining--
        timerelement.textContent=`TIME REMAINING ${timeremaining}`
        if (timeremaining <= 0 || currentquestion >= questions.length){
            clearInterval (intervel)
            localStorage.setItem("high score" , score)
            gameover()
            }
    },1000) 
}
startbutton.addEventListener("click",function(){
    starttimer()
startbutton.style.display="none"
var truebutton = document.createElement ("button")
var falsebutton = document.createElement ("button")
truebutton.setAttribute("id","true")
falsebutton.setAttribute("id","false")
mainarea.appendChild(truebutton)
mainarea.appendChild(falsebutton)
truebutton.textContent="true"
falsebutton.textContent="false"
questiontext.textContent=questions[0].question
truebutton.addEventListener("click",next)
falsebutton.addEventListener("click",next)
})
