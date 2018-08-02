var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/audio/godfatherthemesong.mp3");
       

var mytimer

document.querySelector(".start").addEventListener("click",function(){

    document.querySelector(".main-container").classList.remove("hide")
    document.querySelector(".start").classList.add("hide")

    var time = 90
    document.querySelector(".timer").innerHTML=time
    mytimer = setInterval(function(){
    time -- 
    document.querySelector(".timer").innerHTML=time
    if (time==0){
        check()
        clearInterval(mytimer)
    }
    },1000)
})

function check(){
    clearInterval(mytimer)  
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0;

if (question1 == ("Chicago")) {
    correct++;
}

if (question2 == ("5")) {
    correct++;
}

if (question3 == ("Albert Anastasia")) {
    correct++;
}

if (question4 == ("Liquor")) {
    correct++;
}

if (question5 == ("Frank Cosetello")) {
    correct++;
}

if (question6 == ("Las Vegas")) {
    correct++;
}

if (question7 == ("Teflon Don")) {
    correct++;
}


if (question8 == ("Bonanno")) {
    correct++;
}


if (question9 == ("All the above")) {
    correct++;
}

if (question10 == ("Vincent Gigante")) {
    correct++;
}

console.log (correct)

if (correct > 7) {
 audioElement.play()
 document.querySelector(".stop-music").classList.remove("hide")
 document.querySelector(".stop-music").addEventListener("click",function(){
     audioElement.pause()
 })
}

else {
    setTimeout(function(){
        alert ("You're going to sleep with the fishes")
    },500)
    
}


document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct. ";
}












