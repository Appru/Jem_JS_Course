//Function constructor 

var john = {
    name: 'john',
    yob: 1990,
    job: 'teacher'
};



var Person = function (name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;




}


Person.prototype.calculateAge =
    function () {
        console.log(2016 - this.yob);
    };

var john2 = new Person('John', 1990, 'teacher');


var jane = new Person('jane', 1892, 'dumb');
var mark new Person('mark', 1972, 'monkey trainer');
