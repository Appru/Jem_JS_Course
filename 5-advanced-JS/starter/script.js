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


function interviewQuestion(job) {

    if (job == 'Moneky trainer') {
        return function (name) {
            console.log(name + ', can you please tell me waht a a monkey likes to eat')
        }

    } else if (job == 'fireman') {
        return function (name) {
            console.log(name + ' whats a fire?? hot shot')

        }
    } else {
        return function (name) {
            console.log('hello ' + name + 'what u do???')
        }
    }
}


 var MTQuestion=
     interviewQuestion('Moneky trainer');
var firemanQuestion = interviewQuestion('fireman');

MTQuestion('mike');
firemanQuestion('johhnnyyy')













