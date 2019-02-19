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
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };




    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem,ID;
            
            //create new ID
            if(data.allItems[type].length>0){
                ID = data.allItems[type][data.allItems[type].length-1].id+1;

            }else{
                ID= 0;
            }
            
            
            //create new item based on 'inc' or 'exp' type.
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);

            } else if (type == 'exp') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            
            return newItem;

        },
        
        testing:function(){
            console.log(data);
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
        var input, newItem;
        
        //TODO
        //1) Get the input data
         input = UICtrl.getInput();
        
        //2) add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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
