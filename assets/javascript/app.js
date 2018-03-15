window.onload = (function() {
$('#submit').on('click',function(){
    //console.log("click")
    console.log($("input[name=q1]:checked").val())
    userAnswers.push($("input[name=q1]:checked").val())
    userAnswers.push($("input[name=q2]:checked").val())
    userAnswers.push($("input[name=q3]:checked").val())
    console.log(userAnswers)
    for (var i = 0; i < correctAnswers.length; i++) { 
        if (correctAnswers[i] === userAnswers[i]){
        correct++
        console.log(correct)
        }
        else if (userAnswers[i]==undefined){
            unanswer++
            console.log(unanswer)
        }
        else{
            incorrect++
            console.log(incorrect)
        }
    }

})
var correctAnswers = ["trump","gold","71"]
var incorrect = 0 
var userAnswers = []
var correct = 0
var unanswer = 0

})

//timers, showing the users score, done!
