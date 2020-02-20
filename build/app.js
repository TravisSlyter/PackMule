// our iife
//(function() {
////// Define UI Variables ////////

// main_control variables
const main = document.querySelector('.main');
const createKitBtn = document.querySelector('.create_kit');
const createFoodBtn = document.querySelector('.create_food');
const listName = document.querySelector('.list_name');
const createListBtn = document.querySelector('.create_list');
const deleteListBtn = document.querySelector('.delete_btn');
const dialogBtnYes = document.querySelector('.ans-yes');
const dialogBtnNo = document.querySelector('.ans-no');
const dialogBox = document.querySelector('.dialog');
const modal = document.getElementById('kit-modal');
const gaugeOne = document.querySelector('.payload');
const calTotal = document.querySelector('.cal-total');
const prtTotal = document.querySelector('.prt-total');
const fatTotal = document.querySelector('.fat-total');

// login
const login = document.querySelector('#login');
const email = document.querySelector('#username');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');

// new account
const createLink = document.querySelector('#create-link');
const newAcctBox = document.querySelector('#create-acct');
const createAcct = document.querySelector('#cr-btn');
const newAcctCancel = document.querySelector('#cr-cancel');
const createEmail = document.querySelector('#create-username');
const createPassword = document.querySelector('#create-password');
const checkPassword = document.querySelector('#check-password');

//modal box
const btn = document.getElementById('nameEditBtn');
const input = document.getElementById('edit_input');

// variables for gaugeThree function
const calGauge = '.calories';
const prtGauge = '.protein';
const fatGauge = '.fat';

// variables for calculateGauge2 function
const dayBtn = document.querySelector('.day-btn');
const dayField = document.querySelector('.day-field');
const calDay =  document.querySelector('.cal-day');
const prtDay = document.querySelector('.prt-day');
const fatDay = document.querySelector('.fat-day');

//variables for gauge4 
const gauge4 = document.querySelector('.gauge4');
//const percent = document.querySelector('.percent');




// Load Main Event Listeners
loadEventListeners();

function loadEventListeners() {
    // login btn
    //loginBtn.addEventListener('click', checkEmail);
    // create new acct link
    createLink.addEventListener('click', openCreate);
    // create new acct btn
    //createAcct.addEventListener('click', checkCreds);
    // new acct cancel
    newAcctCancel.addEventListener('click', cancelNew);
    // create kit event
    createKitBtn.addEventListener('click', createKit);
    // create new Food Kit
    createFoodBtn.addEventListener('click', createFoodKit);
    // edit list name
    listName.addEventListener('click', editListName);
    // create list
    createListBtn.addEventListener('click', createList);
    // delete list
    deleteListBtn.addEventListener('click', dialogOpen);
    // dialog box yes
    dialogBtnYes.addEventListener('click', dialogYes);
    // dialog box no
    dialogBtnNo.addEventListener('click', dialogNo);
    // gauge2 set days
    dayBtn.addEventListener('click', getDays);
};



///// Create New Kit Clone ////////////////////////////////
/* i originally tried cloning the html kit card but could
   not find a way to attach event listeners to clone. also
   not sure what other issues might arise later.

function createKit() {
    const newKit = document.getElementById("kit_template");
    const cln = newKit.cloneNode(true);
    document.getElementById("main1").appendChild(cln);
    document.getElementById('main1').lastChild.removeAttribute("id");
*/ ///////////////////////////////////////////////////////////

// using javascript to create kit card
function createKit() {
    const kitCard = document.createElement('div');
    kitCard.className = 'kit_card';
    main.appendChild(kitCard);
    const head = document.createElement('div');
    head.className = ('kit_header');
    kitCard.appendChild(head);
    const name = document.createElement('span');
    name.className = 'kit_name';
    head.appendChild(name);
    const weight = document.createElement('span');
    weight.className = 'kit_weight';
    weight.innerHTML = '0 oz'
    head.appendChild(weight);
    const menu = document.createElement('div');
    menu.className = ('kit_edit');
    head.appendChild(menu);
    const line1 = document.createElement('div');
    line1.className = 'line';
    menu.appendChild(line1);
    const line2 = document.createElement('div');
    line2.className = 'line';
    menu.appendChild(line2);
    const line3 = document.createElement('div');
    line3.className = 'line';
    menu.appendChild(line3);
    const drop = document.createElement('div');
    drop.className = 'drop_down';
    menu.appendChild(drop);
    const editName = document.createElement('a');
    editName.className = 'link_one';
    editName.href = '#';
    editName.innerHTML = 'Name';
    drop.appendChild(editName);
    const saveKit = document.createElement('a');
    saveKit.className = 'link_two';
    saveKit.href = '#';
    saveKit.innerHTML = 'Save';
    drop.appendChild(saveKit);
    const deleteKit = document.createElement('a');
    deleteKit.className = 'link_three';
    deleteKit.href = '#';
    deleteKit.innerHTML = 'Delete';
    drop.appendChild(deleteKit);
    const body = document.createElement('div');
    body.className = ('kit_body');
    kitCard.appendChild(body);
    const collection = document.createElement('ul');
    collection.className = ('item_collect');
    body.appendChild(collection);
    const control = document.createElement('div');
    control.className = ('kit_control');
    kitCard.appendChild(control);
    const itemName = document.createElement('input');
    itemName.className = ('add_name');
    itemName.type = ('text');
    itemName.name = ('item_name');
    itemName.id = ('item_name');
    itemName.maxlength = ('22');
    itemName.size = ('4');
    itemName.placeholder = ('New Item');
    control.appendChild(itemName);
    const itemWeight = document.createElement('input');
    itemWeight.className = ('add_weight');
    itemWeight.type = ('number');
    itemWeight.name = ('item_weight');
    itemWeight.id = ('item_weight');
    itemWeight.size = ('2');
    itemWeight.maxlength = ('4');
    itemWeight.placeholder = ('ounces');
    control.appendChild(itemWeight);
    const addItemBtn = document.createElement('input');
    addItemBtn.className = ('add_item');
    addItemBtn.type = ('button');
    addItemBtn.value = ('Add Item');
    control.appendChild(addItemBtn);
    /////// gauge4 ////////
    const row = document.createElement('div');
    row.className = 'row';
    row.id = 'rowCurr';
    gauge4.appendChild(row);
    const gauge4Name = document.createElement('div');
    gauge4Name.className = 'gauge4name';
    row.appendChild(gauge4Name);
    const percCont = document.createElement('div');
    percCont.className = 'perc-container';
    row.appendChild(percCont);
    const percent = document.createElement('div');
    percent.className = 'percent';
    percent.style.width = '0%';
    percCont.appendChild(percent);

    const listWeights = document.querySelectorAll('.kit_weight');

    // array for kit item weights
    let kitArray = [];
   
// Load Kit Listeners
loadKitEventListeners();

function loadKitEventListeners() {
    //add item event
    addItemBtn.addEventListener('click', addItem);
    // edit name
    editName.addEventListener('click', edKit);
    // delete kit btn
    deleteKit.addEventListener('click', delKit);
    deleteKit.addEventListener('click', function() {
        delGauge4(gauge4, row); 
    }, false);
}


////// Edit Kit Name /////////
let btn = document.getElementById('nameEditBtn');
let input = document.getElementById('edit_input');

edKit();

function edKit() {
    modal.style.display = "block";

    input.focus();
   
    btn.onclick = function() {
        name.innerHTML = input.value;
        input.value = '';
        modal.style.display = "none";
        itemName.focus();
        gauge4Name.innerText = name.innerText;
    }
}


/////// Add Item to Kit ////////
function addItem(e) {
    if(itemName.value === '') {
        alert('Add an item please!');
    } else {
    //create li element
    const li = document.createElement('li');
    //add a class to new li
    li.className = 'kit-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(itemName.value));

    // create element for itemweight
    const span = document.createElement('span');
    // add a class to the span
    span.className = 'itemWt';
    // round input
    const spanWeight = Math.round(itemWeight.value);
    // create text node and append to span
    span.appendChild(document.createTextNode(spanWeight + ' oz'));
    // append to li
    li.appendChild(span);


    // create checkbox
    const check = document.createElement('input');
    // add type to checkbox
    check.type = 'checkbox';
    // add class to checkbox
    check.className = 'check-box';
    // append checkbox to li
    li.appendChild(check);

    // create delete element
    const removeLi = document.createElement('input');
    // add class to delete element
    removeLi.className = 'delete-item';
    // add type to button
    removeLi.type = 'button';
    // add value for button
    removeLi.value = 'X';
    // append delete element to li
    li.appendChild(removeLi);
    // add eventlistener to btn
    removeLi.addEventListener('click', deleteItem);

    // add li to item_collect
    collection.appendChild(li);
    // clear input field
    itemName.value = '';
    // clear input field
    itemWeight.value = '';
    // place focus on itemName input
    itemName.focus();


    e.preventDefault();


    ////////////////////////////////////////////////
    // sum weights of li's for kit head //
    // variables for parameters
    const oz = ' oz';
    const times = 1
    // call the function
    sumArray(spanWeight, oz, weight, kitArray, times);



    }// end addItem else

    weightGauge();
    calculateGauge4();
    //////////////////////////////////////////////////
    ////// delete item from kit ////////
    //tried making a public function, could not access previousSibling, moving on, come back later.
    function deleteItem(e) {
        // get weight of item from span
        const weightString = e.target.previousSibling.previousSibling.innerHTML;
        // convert item weight from string to number
        const newNum = parseInt(weightString, 10);

        // loop thru array
        for (let i = 0; i < kitArray.length; i++) {
            // find matching value of target
            if (kitArray[i] === newNum) {
                // delete match from array
                kitArray.splice(i, 1);
                // break loop after 1 match
                break;
            }
        }
        
        // recalculate weight for head
        if (kitArray.length > 1) {
                const add = (a, b) =>
                a + b;
                const sum = kitArray.reduce(add);
                weight.innerHTML = (sum + ' oz');
                
        } else if (kitArray.length === 1) {
            let numb = kitArray[0];
            weight.innerHTML = (numb + ' oz');
        } else {
            kitArray = [];
            weight.innerHTML = (0 + ' oz');
        }
                     
        // remove li
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);

        weightGauge();
        calculateGauge4();

       } // end of deleteItem function
    } // end of addItem function
  } //end of createKit function


///// Create New Food Kit //////////////////////////////////////////

///// Create New Food Kit Clone /////
/* i originally tried cloning the html food card but could
   not find a way to attach event listeners to clone. also
   not sure what other issues might arise later.

function createFood() {
    const newFoodKit = document.getElementById("food_template");
    const cln = newFoodKit.cloneNode(true);
    document.getElementById("main1").appendChild(cln);
    document.getElementById("main1").lastChild.removeAttribute("id");
}
*/

function createFoodKit() {
    //create element and descendants
    const foodCard = document.createElement('div');
    foodCard.className = ('food_card');
    main.appendChild(foodCard);
    const head = document.createElement('div');
    head.className = ('food_header');
    foodCard.appendChild(head);
    const name = document.createElement('div');
    name.className = ('food_name');
    name.innerHTML = '';
    head.appendChild(name);
    const weight = document.createElement('div');
    weight.className = ('kit_weight fd_head');
    weight.innerHTML = ('0 oz');
    head.appendChild(weight);
    const calories = document.createElement('div');
    calories.className = ('calories fd_head');
    calories.innerHTML = ('0 cal')
    head.appendChild(calories);
    const protein = document.createElement('div');
    protein.className = ('protein fd_head');
    protein.innerHTML = ('0 prt');
    head.appendChild(protein);
    const fat = document.createElement('div');
    fat.className = ('fat fd_head');
    fat.innerHTML = ('0 fat');
    head.appendChild(fat);
    const menu = document.createElement('div');
    menu.className = ('kit_edit');
    const line1 = document.createElement('div');
    line1.className = ('line');
    menu.appendChild(line1);
    const line2 = document.createElement('div');
    line2.className = ('line');
    menu.appendChild(line2);
    const line3 = document.createElement('div');
    line3.className = ('line');
    menu.appendChild(line3);
    head.appendChild(menu);

    const drop = document.createElement('div');
    drop.className = 'drop_down';
    menu.appendChild(drop);
    const editName = document.createElement('a');
    editName.className = 'link_one';
    editName.href = '#';
    editName.innerHTML = 'Name';
    drop.appendChild(editName);
    const saveKit = document.createElement('a');
    saveKit.className = 'link_two';
    saveKit.href = '#';
    saveKit.innerHTML = 'Save';
    drop.appendChild(saveKit);
    const deleteKit = document.createElement('a');
    deleteKit.className = 'link_three';
    deleteKit.href = '#';
    deleteKit.innerHTML = 'Delete';
    drop.appendChild(deleteKit);

    const foodBody = document.createElement('div');
    foodBody.className = ('food_body');
    const foodCollect = document.createElement('ul');
    foodCollect.className = ('food_collect');
    foodBody.appendChild(foodCollect);
    foodCard.appendChild(foodBody);
    const foodControl = document.createElement('div');
    foodControl.className = ('food_control');
    const itemName = document.createElement('input');
    itemName.className = ('add_food');
    itemName.type = ('text');
    itemName.placeholder = ('New Food Item');
    itemName.size = ('4');
    itemName.maxlength = ('22');
    foodControl.appendChild(itemName);
    const foodQty = document.createElement('input');
    foodQty.className = ('food_qty');
    foodQty.type = ('text');
    foodQty.placeholder = ('qty');
    foodQty.size = ('2');
    foodQty.maxlength = ('3');
    foodControl.appendChild(foodQty);
    const foodWgt = document.createElement('input');
    foodWgt.className = ('add_fdweight');
    foodWgt.type = ('number');
    foodWgt.placeholder = ('ounces');
    foodWgt.size = ('2');
    foodWgt.maxlength = ('3');
    foodControl.appendChild(foodWgt);
    const addCal = document.createElement('input');
    addCal.className = ('add_cal');
    addCal.type = ('text');
    addCal.placeholder = ('calories');
    addCal.size = ('2');
    addCal.maxlength = ('5');
    foodControl.appendChild(addCal);
    const addPrt = document.createElement('input');
    addPrt.className = ('add_protein');
    addPrt.type = ('text');
    addPrt.placeholder = ('protein');
    addPrt.size = ('2');
    addPrt.maxlength = ('3');
    foodControl.appendChild(addPrt);
    const addFat = document.createElement('input');
    addFat.className = ('add_fat');
    addFat.type = ('text');
    addFat.placeholder = ('fat');
    addFat.size = ('2');
    addFat.maxlength = ('3');
    foodControl.appendChild(addFat);
    const itemNameBtn = document.createElement('input');
    itemNameBtn.className = ('add_fditem');
    itemNameBtn.type = ('button');
    itemNameBtn.value = ('Add');
    foodControl.appendChild(itemNameBtn);
    foodCard.appendChild(foodControl);

    /////// gauge4 ////////
    const row = document.createElement('div');
    row.className = 'row';
    row.id = 'rowCurr';
    gauge4.appendChild(row);
    const gauge4Name = document.createElement('div');
    gauge4Name.className = 'gauge4name';
    row.appendChild(gauge4Name);
    const percCont = document.createElement('div');
    percCont.className = 'perc-container';
    row.appendChild(percCont);
    const percent = document.createElement('div');
    percent.className = 'percent';
    percent.style.width = '0%';
    percCont.appendChild(percent);
    

    itemName.focus();

    let ozArray = [];
    let calArray = [];
    let proArray = [];
    let fatArray = [];

    // load listener
    loadFoodListener();

    function loadFoodListener() {
    // add Food Item event
    itemNameBtn.addEventListener('click', addFdItem);
    // edit Name
    editName.addEventListener('click', edKit);
    // delete kit
    deleteKit.addEventListener('click', delKit);
    deleteKit.addEventListener('click', function() {
        delGauge4(gauge4, row); 
    }, false);

    }

    ////// Edit Kit Name //////
    edKit();

    function edKit() {
        modal.style.display = "block";
    
        let btn = document.getElementById('nameEditBtn');
        let input = document.getElementById('edit_input');
        input.focus();
       
        btn.onclick = function() {
            name.innerHTML = input.value;
            input.value = '';
            modal.style.display = "none";
            gauge4Name.innerText = name.innerText;
        }

    }
    

    ////// Add item to Food Kit ///////
    function addFdItem() {
    if(itemName.value === '') {
        alert('add an item please!');
    } else {
    ///// food item input /////
    // create li element for food item
    const liFd = document.createElement('li');
    // create class name for li
    liFd.className = 'food-item';
    // create text node and append to ul
    liFd.appendChild(document.createTextNode(itemName.value));

    ///// food qty input /////
    // create element for input
    const spanQty = document.createElement('span');
    // create class name
    spanQty.className = 'food-qty';
    // round input
    const qty = Math.round(foodQty.value);
    // create text node and append to span
    spanQty.appendChild(document.createTextNode(qty + ' ea'));
    // append to li
    liFd.appendChild(spanQty);

    ///// food oz input /////
    // create element for input
    const spanOz = document.createElement('span');
    // create class name
    spanOz.className = 'food-oz';
    // round input / head var
    const spanOunces = Math.round(foodWgt.value);
    // create text node and append to span
    spanOz.appendChild(document.createTextNode(spanOunces + ' oz'));
    // append span to li
    liFd.appendChild(spanOz);


    ///// Food calories input /////
    // create element for input
    const spanCal = document.createElement('span');
    // add class name
    spanCal.className = 'add-cal';
    // var for head and round input
    const spanCalories = Math.round(addCal.value);
    // create text node and append to span
    spanCal.appendChild(document.createTextNode(spanCalories + ' cal'));
    // append to li
    liFd.appendChild(spanCal);

    ///// Food protein input /////
    // create element for input
    const spanPrt = document.createElement('span');
    // add class name
    spanPrt.classname = 'add-protein';
    // var for head and round input
    const spanProtein = Math.round(addPrt.value);
    // create text node and append to span
    spanPrt.appendChild(document.createTextNode(spanProtein + ' prt'));
    // append span to li
    liFd.appendChild(spanPrt);

    ///// Food fat input /////
    // create element for fat input
    const spanFat = document.createElement('span');
    // add class name
    spanFat.className = 'add-fat';
    // var for head and round input
    const spanFatty = Math.round(addFat.value);
    // create text node and append to span
    spanFat.appendChild(document.createTextNode(spanFatty + ' fat'));
    // append to li
    liFd.appendChild(spanFat);


    // create checkbox
    const check = document.createElement('input');
    // add type to checkbox
    check.type = 'checkbox';
    // add class to checkbox
    check.className = 'check-box';
    // append checkbox to li
    liFd.appendChild(check);

    // create delete element
    const removeFood = document.createElement('input');
    // add class to delete element
    removeFood.className = 'delete-item';
    // add type to button
    removeFood.type = 'button';
    // add value for button
    removeFood.value = 'X';
    // append delete element to li
    liFd.appendChild(removeFood);
    // attach event listener
    // for some unknown reason on the first call of deleteItem it will not parseInt, so I put in an extra function. come back fix later.
    removeFood.addEventListener('click', function(e) {deleteItem(e, ozArray, weight, oz, ozString);deleteItem(e, ozArray, weight, oz, ozString);deleteItem(e, calArray, calories, cal, calorieString);deleteItem(e, proArray, protein, prt, proteinString);deleteItem(e, fatArray, fat, ft, fatString);deleteLi(e); false});
    
    // add li to ul
    foodCollect.appendChild(liFd);
    // clear item input
    itemName.value = '';
    // clear qty input
    foodQty.value = '';
    // clear oz input
    foodWgt.value = '';
    // clear calorie input
    addCal.value = '';
    // clear protien input
    addPrt.value = '';
    // clear fat input
    addFat.value = '';
    // focus
    itemName.focus();

    ////////////////////////////////////////////////////////
    // sum arrays for food kit header
    // variables for parameters
    const oz = ' oz';
    const cal = ' cal';
    const prt = ' prt';
    const ft = ' fat';
    // call the function
    sumArray(spanOunces, oz, weight, ozArray, qty);
    sumArray(spanCalories, cal, calories, calArray, qty);
    sumArray(spanProtein, prt, protein, proArray, qty);
    sumArray(spanFatty, ft, fat, fatArray, qty);

    weightGauge();
    calculateGauge3();
    calculateGauge4();

    }//end addFdItem else


        //////////////////////////////////////////
        //// delete food item from kit
        // variables needed for deleteItem function
        let ozString;
        let calorieString;
        let proteinString;
        let fatString;

        function deleteItem(e, array, head, abb, value) {
            const qty = e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
            ozString = e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
            calorieString = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
            proteinString = e.target.previousSibling.previousSibling.previousSibling.innerHTML;
            fatString = e.target.previousSibling.previousSibling.innerHTML;
            
            // var for quantity, convert string to number
            const mult = parseInt(qty, 10);
            // get innerHTML from span
            const string = value;
            // convert from string to number
            const newNum = parseInt(string, 10) * mult;

            //loop thru array
            for  (let i =0; i < array.length; i++) {
                //find matching value of target
                if (array[i] === newNum) {
                    //delete match from array
                    array.splice(i, 1);
                    // break loop after 1 match
                    break;
                }
            }

            // recalculate weight for head
            if (array.length > 1) {
                const add = (a, b) =>
                a + b;
                const sum = array.reduce(add);
                head.innerHTML = (sum + abb);
            } else if (array.length === 1) {
                let numb = array[0];
                head.innerHTML = (numb + abb);
            } else {
                array = [];
                head.innerHTML = (0 + abb);
            }

            weightGauge();
            calculateGauge3();
            calculateGauge4();
               
        }//end deleteItem function

        //remove li
        function deleteLi(e) {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }//end deleteLi function

      }//end addFdItem function

    }//end createFoodKit function
    
    /////////////////////////////////// Public Functions ////////////////////////
    // sum arrays for kit heads
    function sumArray(getWeight, abb, head, array, mult) {
        
        const num = getWeight;
        // convert string to number
        const x = Number(num) * mult;
        // add to array
        array.push(x);
        // add function
        const add = (a, b) =>
        a + b;
        const sum = array.reduce(add);
        head.innerHTML = (sum + abb);
        }

    // delete a kit
    function delKit(e) {
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.parentNode);

        weightGauge();
        calculateGauge3();
        calculateGauge4();

        }



    // add or edit List name
    function editListName() {
        // open modal
        modal.style.display = "block";
        
        input.focus();
           
        btn.onclick = function() {
            listName.innerHTML = input.value;
            input.value = '';
            modal.style.display = "none";
        }
    }


    function createList() {
        // name the new List
        editListName();
        // clear main
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
    }


    function dialogOpen() {
        //const dialogBox = document.querySelector('.dialog');
        dialogBox.style.display = 'block';
    }


    function dialogYes() {
        deleteList();
    }


    function dialogNo() {
        dialogBox.style.display = 'none';
    }

    
    function deleteList() {
        dialogBox.style.display = 'none';
        listName.innerHTML = '';
         while (main.firstChild) {
             main.removeChild(main.firstChild);
        }
    }


    function weightGauge() {
        const weights = document.querySelectorAll('.kit_weight');

        let totalWeights = [];
        let total;

        if (weights.length === 0) {
            gaugeOne.innerText = 0;
        } else {
        
        for (let i = 0; i < weights.length; i++) {
            const x = weights[i].innerHTML;
            const z = parseInt(x);
            totalWeights.push(z);

            const add = (a, b) =>
            a + b;
                
            total = totalWeights.reduce(add);
            gaugeOne.innerText = Math.round(total / 16);
                
            }
        }
    }


    function gaugeThree(gauge, ga) {
        const diet = document.querySelectorAll(gauge);
            
            let dietArray = [];
    
            if (diet.length === 0) {
                ga.innerText = 0;
            } else {
                
                for(let i = 0; i < diet.length; i++) {
                    const x = diet[i].innerHTML;
                    const z = parseInt(x);
                    dietArray.push(z);
    
                    const add = (a, b) =>
                    a + b;
    
                    ga.innerText = dietArray.reduce(add);
    
                }
            }
    }


    function calculateGauge3() {
        gaugeThree(calGauge, calTotal);
        gaugeThree(prtGauge, prtTotal);
        gaugeThree(fatGauge, fatTotal);
        calcGauges2();
    }


    function calculateGauge2(day, total) {
        const x = dayField.innerText;
        let y = parseInt(x);

        const a = total.innerText;
        const b = a / y;
        
        day.innerText = Math.round(b);
    }
    
    
    function calcGauges2() {
      calculateGauge2(calDay, calTotal);
      calculateGauge2(prtDay, prtTotal);
      calculateGauge2(fatDay, fatTotal);
    }
    

    function getDays() {
        //open modal
        modal.style.display = 'block';
        input.placeholder = 'How many days?';
        input.type = 'number';
        input.focus();

        btn.onclick = function() {
            dayField.innerText = input.value + ' Days';
            input.value = '';
            modal.style.display = 'none';
            input.placeholder = 'add / edit name';
            input.type = 'text';
            
            calcGauges2();
        }
    }


    function delGauge4(parent, child) {
        parent.removeChild(child);
        calculateGauge4();
    }


    function calculateGauge4() {
        const assort = document.querySelectorAll('.kit_weight');
        const g4 = document.querySelectorAll('.percent');
        let assortArray = [];
        let i, num, newNum, newestNum, finalNum;

        for (i = 0; i < assort.length; i++) {
            let x = assort[i].innerText;
            let y = parseInt(x);
            assortArray.push(y);
            num = assortArray[i] / (gaugeOne.innerText * 16);
            newNum = num * 100;
            newestNum = Math.round(newNum);
            finalNum = newestNum + '%';
            g4[i].innerText = finalNum;
            g4[i].style.width = finalNum;
        }
    }


///////// DUMMY USERS ACCOUNT FOR DEMONSTRATION //////////

    const usersArray = [
        { email: 'testuser1@gmail.com', password: 'Password123' },
        { email: 'testuser2@gmail.com', password: 'Password234' },
        { email: 'testuser3@gmail.com', password: 'Password345' }


    ]

    function checkEmail() {
        
        let ans = 'yes';
        for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email === createEmail.value) {
                alert('email already exists');
                ans = 'no';
            } 
        }
        if (ans === 'yes') {
            checkPswd();
        } 
    }

    // gets called onsubmit form html
    function validateEmail() {
        let ans = 'no';
        for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email === email.value && usersArray[i].password === password.value) {
                ans = 'yes';
                login.style.display = 'none';
                //console.log('match');
            } 
        }
        if (ans === 'no') {
            alert('invalid email or password');
        } 
        return false;
    }


    function checkPswd() {
        if (createPassword.value === checkPassword.value) {
             addUser();
        } else {
            alert('Passwords do not match');           
        }
    }
    


    function openCreate() {
        login.style.display = 'none';
        newAcctBox.style.display = 'grid';
    }


    function closeCreate() {
        login.style.display = 'grid';
        newAcctBox.style.display = 'none';

    }
    

    function cancelNew() {
        newAcctBox.style.display = 'none';
        login.style.display = 'grid';
    }


    function Users(email, password) {
        this.email = email;
        this.password = password;
    }


    // gets called onsubmit form html
    function checkCreds() {
        checkEmail();
        return false;
    }


    function addUser() {
        let x = createEmail.value;
        const y = createPassword.value;

        x = new Users(x, y);
        usersArray.push(x);
        document.getElementById('crt-form').reset();
        closeCreate();
        alert('Success! Your account has been created, you can now log in.');
    }

//}) ();

