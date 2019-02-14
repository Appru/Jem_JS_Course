////Function constructor 
//
//var john = {
//    name: 'john',
//    yob: 1990,
//    job: 'teacher'
//};
//
//
//
//var Person = function (name, yob, job) {
//    this.name = name;
//    this.yob = yob;
//    this.job = job;
//
//
//
//
//}
//
//Person.prototype.lastName = 'appru';
//
//
//Person.prototype.calculateAge =
//    function () {
//        console.log(2016 - this.yob);
//    };
//
//var john2 = new Person('John', 1990, 'teacher');
//
//
//var jane = new Person('jane', 1892, 'dumb');
//var mark = new Person('mark', 1972, 'monkey trainer');
//
//console.log (john2.lastName);
//console.log(mark.lastName);




//object.create



//var personProto = {
//    calculateAge: function(){
//        console.log(2016 - this.yob);
//    }
//};
//
//
//var john = Object.create(personProto,
//{
//    name: {value:'John'},
//    yob:{value:1969},
//    job:{value:'momkey trainer'}  
//    
//});


///
///////Passing functions as arguments


//var years = [1990, 1965, 1901, 2011, 1997];
//
//function arrayCalc(arr, fn) {
//
//    var arrRes = [];
//
//    for (var i = 0; i < arr.length; i++) {
//
//        arrRes.push(fn(arr[i]));
//    }
//
//    return arrRes;
//
//}
//
//
//
//function calculateAge(el) {
//    return 2018 - el;
//}
//
//function isFullAge(el) {
//    return el >= 18;
//}
//
//function maxHeartRate(el) {
//    if(el >= 18 && el<= 81){
//         return Math.round(206.9 - (0.67 * el));
//    }else{
//        return -1;
//    }
//    
//   
//}
//
//
//var ages = arrayCalc(years, calculateAge);
//var fullages = arrayCalc(ages, isFullAge);
//var rates = arrayCalc(ages,maxHeartRate);
//
//console.log(ages);
//console.log(fullages);
//console.log(rates);









//FUNCTIONS RETURNING FUNCTIONS

//
//function interviewQuestion(job) {
//
//    if (job == 'Moneky trainer') {
//        return function (name) {
//            console.log(name + ', can you please tell me waht a a monkey likes to eat')
//        }
//
//    } else if (job == 'fireman') {
//        return function (name) {
//            console.log(name + ' whats a fire?? hot shot')
//
//        }
//    } else {
//        return function (name) {
//            console.log('hello ' + name + 'what u do???')
//        }
//    }
//}
//
//
// var MTQuestion=
//     interviewQuestion('Moneky trainer');
//var firemanQuestion = interviewQuestion('fireman');
//
//MTQuestion('mike');
//firemanQuestion('johhnnyyy')








//IIFE



//function game(){
//    
//    var score = Math.random() * 10;
//    console.log(score>=5);
//    
//}
//
//game();
//
//(function(){
//      var score = Math.random() * 10;
//    console.log(score>=5);
//}
//)();





//CLOSURES!!


//function retirement(retirementAge) {
//    var a = ' years left until returemnt';
//
//    return function (yearOfBirth) {
//        var age = 2016 - yearOfBirth;
//        console.log((retirementAge - age) + a);
//    }
//}
//
//
//
//
//
//var retirementUS = retirement(66);
//
//retirementUS(1990);
//
//
//
//
//function interviewQuestion(job){
//    return function(name){
//        if(job=='teacher'){
//            
//        
//        console.log('so...'+name + ' whats it like to be dumbass teacher')
//        }
//        else if(job=='estate agent'){
//            console.log('soo....'+name+' whats it like to be a dumbass agent')
//        }
//        
//        else{
//            console.log(name+ ' whats ur dumbass job??');
//        }
//    }
//}
//
//
//interviewQuestion()('pfhil');








//BINS, CALL AND APPLY




//var john = {
//    name: 'John',
//    age: 26,
//    job: 'teacher',
//    presentation: function (stlye, timeOfDay) {
//
//        if (stlye == 'formal') {
//            console.log('top of the ' + timeOfDay + '  and germs my name is ' + this.name + ' I am ' + this.age+ ' years old and I am a  ' + this.job);
//        } else if (stlye == 'friendly') {
//            console.log('was up my dudeeees, this time is! ' + timeOfDay + ' my epic and cool name is ' + this.name + '  I am ' + this.age +' years yonug and I am a  ' + this.job);
//        }
//    }
//}
//
//
//
//var donny = {
//    name: 'Donny',
//    age: 45,
//    job: 'dumbass'
//};
//
//
//
//
//
//
////method borrowing
//john.presentation.call(donny,'formal','afternoon');
//
//
//john.presentation('friendly','evening');
//
//
//
//
//var johnFriendly = john.presentation.bind(john, 'friendly');
//
//johnFriendly('morning!!');
//
//var donnyFormal = john.presentation.bind(donny,'formal');
//donnyFormal('afftenton');






/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/









var Questions = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correct = correctAnswer;



}

var Q1 = new Questions('whats the day?', [' epic sauce', ' happy', ' soy face'], 1);
var Q2 = new Questions('best movie?', [' jaws', ' Avatar 2', ' ice age?', ], 1);
var Q3 = new Questions('best song?', [' armodilla', ' the rock singing', ' happy days theme song', ], 1);

Questions.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}



Questions.prototype.checkAnswers = function (ans) {

    if (ans === this.correct) {

        return true;
    } else {


        return false;
    }
}

var counter = 0;
 var allQuestions = [Q1, Q2, Q3];

function isTrue() {


   

    var n = Math.floor(Math.random() * allQuestions.length);

    allQuestions[n].displayQuestion();


    var input = parseInt(prompt('Please choose ya answer'));

    allQuestions[n].checkAnswers(input);

    if (allQuestions[n].checkAnswers(input) == true) {
        console.log('CORRECT-A-MUNDO!');
        counter++;
        console.log('total-score ' + counter);
        isTrue();

    } else {
        console.log('WRONG!!');
        console.log('Your final Score is '+counter)
    }


}



isTrue();



//console.log(q);
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
