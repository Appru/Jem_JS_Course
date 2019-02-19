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

//BUDGET CONTROLLER
var budgetController = (function () {


    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    
   
    
    var data = {
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        }
    }

})();



// UI CONTROLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {

            return {

                //will be either inc or exp
                type: document.querySelector(DOMstrings.inputType).value,

                description: document.querySelector(DOMstrings.inputDescription).value,

                value: document.querySelector(DOMstrings.inputValue).value
            };


        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    };



})();



//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);



        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {

                ctrlAddItem();
            }
        })

    };



    var ctrlAddItem = function () {
        //TODO
        //1) Get the input data
        var input = UICtrl.getInput();
        console.log(input);

        //2) add the item to the budget controller

        //3) add the new item to the user interface

        //4) calulate the budget

        //5) display the the budget on the UI
        console.log('It Works!!!!');

    }

    return {
        init: function () {
            console.log('App has started');
            setupEventListeners();
        }
    };


})(budgetController, UIController);


controller.init();
