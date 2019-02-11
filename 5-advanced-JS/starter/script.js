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








function Question(question,answers,correctAnswer){
    
    this.question = question;
    this.answers = [];
    this.correctAnswers = correctAnswer;
    
    }





var Q1 = new Question('what is cool?',[],'correct answer');
var Q2 = new Question('what is cash money?',['cash?','money?'],' the correct answer?');

var xz = Q1.answers = ['water','teeth'];

var completeQuestions = [];
completeQuestions.push(Q1,Q2);

function chooseQuestion(arr){
    var rand =  Math.floor(Math.random() * 2);
    
    console.log( arr[rand]);
    
}


chooseQuestion(completeQuestions);


console.log(completeQuestions);














































