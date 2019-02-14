/*

TODO

Add event handler
Get input values
add the new items to our data structure
add the new item to the UI
Calculate the budget
update the UI



MODULES

UI MODULES =    Get input values, add the new item to the UI, update the UI

DATA MODULES =  Add the new new item to the data structure, calculate budget

CONTROLLER MODULES = Add even handler




*/

var budgetController = (function () {

    var x = 23;

    var add = function (a) {
        return x + a;
    }


    return {
        publicTest: function (b) {
           return add(b);
        }
    }

})();


var UIController = (function () {


    //some code



})();



var controller = (function (budgetCtrl, UICtrl) {

var z = budgetCtrl.publicTest(5);
    
    return {
        anotherPublic: function(){
            console.log(z);
        }
    }




})(budgetController, UIController);
