let diamonds;
let item_name;
let chosen_item;
let item_amount;
let carrots = [5,1];
let fireworks = [12,2];
let pistons = [4,4];

//Load diamonds on start
function start(){
    diamonds = 32;
    document.getElementById("diamonds").innerText = diamonds;
}

//Choose item
function choose(){
    item_name = prompt("What item would you like to buy?");
    switch (item_name){
        case "carrots":
            document.getElementById("amount").innerHTML = "</br></br>"+item_name+":</br>Current number of stacks: "+carrots[0]+"</br>The price for 1 stack: "+carrots[1]+
                                                        " diamond/s</br><button id="+"btn_buy"+" onclick='buy("+item_name+")'>Buy</button>";
            break;
        case "fireworks":
            document.getElementById("amount").innerHTML = "</br></br>"+item_name+":</br>Current number of stacks: "+fireworks[0]+"</br>The price for 1 stack: "+fireworks[1]+
                                                        " diamond/s</br><button id="+"btn_buy"+" onclick='buy("+item_name+")'>Buy</button>";
            break;
        case "pistons":
            document.getElementById("amount").innerHTML = "</br></br>"+item_name+":</br>Current number of stacks: "+pistons[0]+"</br>The price for 1 stack: "+pistons[1]+
                                                        " diamond/s</br><button id="+"btn_buy"+" onclick='buy("+item_name+")'>Buy</button>";
            break;
        default:
            alert("Wrong item name");
    }
}

//Buy item
function buy(chosen_item){
    item_amount = prompt("How many stacks?");
    switch (chosen_item){
        case "carrots":
            chosen_item = carrots;
            break;
        case "fireworks":
            chosen_item = fireworks;
            break;
        case "pistons":
            chosen_item = pistons;
            break;
    }
    if(item_amount <= 0){
        alert("There's no way you thought that would work");
    }
    else if(item_amount > chosen_item[0]){
        alert("Sorry, we do not have this amount at the moment");
    }
    else if(item_amount * chosen_item[1] <= diamonds){
        diamonds -= item_amount * chosen_item[1];
        document.getElementById("diamonds").innerText = diamonds;
        chosen_item[0] -= item_amount;
        document.getElementById("amount").innerHTML = "</br></br>"+item_name+":</br>Current number of stacks: "+chosen_item[0]+"</br>The price for 1 stack: "+chosen_item[1]+
                                                        " diamond/s</br><button id="+"btn_buy"+" onclick='buy("+item_name+")'>Buy</button>";
             

    }
    else if(item_amount * chosen_item[1] > diamonds){
        alert("Sorry, you do not have enough money");
    }
}