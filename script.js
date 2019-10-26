let diamonds;
let item_name;
let chosen_item;
let carrots = [5,1];
let fireworks = [12,2];
let pistons = [4,4];

//Load diamonds on start
function start(){
    diamonds = 32;
    document.getElementById("diamonds").innerText = diamonds;
}

// diaplay text and btn_buy in div amount
function amountInnerHtml(array_name) {
    document.getElementById("amount").innerHTML = "</br></br>"+item_name+":</br>Current number of stacks: "+array_name[0]+"</br>The price for 1 stack: "+array_name[1]+
                        " diamond/s</br><button id="+"btn_buy"+" onclick='buy()'>Buy</button>";
    chosen_item = array_name;
}

//Choose item
function choose(){
    item_name = prompt("What item would you like to buy?");
    switch (item_name){
        case "carrots":
            amountInnerHtml(carrots);
            break;
        case "fireworks":
            amountInnerHtml(fireworks);
            break;
        case "pistons":
            amountInnerHtml(pistons);
            break;
        default:
            alert("Wrong item name");
    }
}

//Buy item
function buy(){
    let item_amount = prompt("How many stacks?");
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
        amountInnerHtml(chosen_item);
    }
    else if(item_amount * chosen_item[1] > diamonds){
        alert("Sorry, you do not have enough money");
    }
}