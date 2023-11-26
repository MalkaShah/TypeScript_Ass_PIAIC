buying_grocries();
tasktwo();
TaskThree();
// Function for Task 1st of the Assignment
function buying_grocries() {
    var vegtbl = ["Cucumber"]; //List of vegetables to be shown to the customer
    vegtbl[1] = "lady finger" + "  Price : " + 20;
    vegtbl[2] = "zuchini" + "  Price : " + 25;
    vegtbl[3] = "lemon" + "  Price : " + 2;
    vegtbl.push("chili" + "  Price : " + 26);
    vegtbl.push("tomato" + "  Price : " + 29);
    //List of Fruits to be shown to the customer with their prices using array
    var fruits = ["Pear"];
    fruits.push("Mango" + "  Price : " + 70);
    fruits.push("Apple" + "  Price : " + 20);
    fruits.push("Banana" + "  Price : " + 20);
    fruits.push("kiwi" + "  Price : " + 90);
    fruits.push("grapes" + "  Price : " + 30);
    fruits.push("oranges" + "  Price : " + 20);
    //List of Fruits to be shown to the customer with their prices using array
    var groc = ["grams"];
    groc.push("Oil" + "  Price : " + 20);
    groc.push("sugar" + "  Price : " + 40);
    groc.push("tea" + "  Price : " + 2);
    groc.push("coffe" + "  Price : " + 240);
    groc.push("oat" + "  Price : " + 20);
    groc.push("flour" + "  Price : " + 240);
    groc.push("spices" + "  Price : " + 230);
    // use promt syn to take input from the user about their choice of shopping
    var promttSync = require("prompt-sync")();
    var customerchoice = promttSync("What do you want to buy??");
    var total; // The Total amount to be paid bu customer for their shopping
    if (customerchoice == "veges") //condition to show the list of item based on the user input enter through prmmpt sync
     {
        console.log(vegtbl);
        // showing receipt to the customer at checkout by calculating the prices of all item added to the cart.
        console.log("your bill :  RS 54 \n", vegtbl[2], "\n", vegtbl[5], " \n Total ", total = 54);
        if (total > 100) // checking for applicability of any voucher if the shopping amount is above certain value
         {
            console.log("The Discount on your shopping is 5%\n The new total after discount is ", total - (0.05 * total));
        }
        var promptpayment = require("prompt-sync")(); // use promt syn to take input from the user about their choice of payment method
        var paymentmethod = promptpayment("how would like to pay the amount:  1. Cash 2. Card");
        if (paymentmethod == "cash" || paymentmethod == "card") //condition to chose payment of method based on the user input enter through prmmpt sync
         {
            if (paymentmethod == "card") {
                console.log("Please Give me your Card");
                console.log("You Paid RS", total, "\n THANK YOU!!!");
            }
            else {
                console.log("The amount is : RS", total, "\n THANK YOU!!!");
            }
        }
    }
    else if (customerchoice == "fruits") {
        console.log(fruits);
        // showing receipt to the customer at checkout by calculating the prices of all item added to the cart.
        console.log("your bill :  RS 120 \n", fruits[2], "\n", fruits[5], "\n", fruits[1], " \n Total ", total = 120);
        if (total > 100) // checking for applicability of any voucher if the shopping amount is above certain value
         {
            console.log("The Discount on your shopping is 5%\n The new total after discount is ", total - (0.05 * total));
        }
        var promptpayment = require("prompt-sync")();
        var paymentmethod = promptpayment("how would like to pay the amount:  1. Cash 2. Card"); // use promt syn to take input from the user about their choice of shopping
        if (paymentmethod == "cash" || paymentmethod == "card") //condition to chose payment of method based on the user input enter through prmmpt sync
         {
            if (paymentmethod == "card") {
                console.log("Please Give me your Card");
                console.log("You Paid RS", total, "\n THANK YOU!!!");
            }
            else {
                console.log("The amount is : RS", total, "\n THANK YOU!!!");
            }
        }
    }
    else if (customerchoice == "grocery") {
        console.log(groc);
        // showing receipt to the customer at checkout by calculating the prices of all item added to the cart.
        console.log("your bill :  RS 62 \n", groc[2], "\n", groc[5], "\n", groc[3], " \n Total ", total = 62);
        if (total > 100) // checking for applicability of any voucher if the shopping amount is above certain value
         {
            console.log("The Discount on your shopping is 5%\n The new total after discount is ", total - (0.05 * total));
        }
        var promptpayment = require("prompt-sync")();
        var paymentmethod = promptpayment("how would like to pay the amount:  1. Cash 2. Card"); // use promt syn to take input from the user about their choice of shopping
        if (paymentmethod == "cash" || paymentmethod == "card") //condition to chose payment of method based on the user input enter through prmmpt sync
         {
            if (paymentmethod == "card") {
                console.log("Please Give me your Card");
                console.log("You Paid RS", total, "\n THANK YOU!!!"); // final checkout
            }
            else {
                console.log("The amount is : RS", total, "\n THANK YOU!!!");
            }
        }
    }
}
function tasktwo() {
    console.log("\nThe sum of two number is x=3 and y=3 is ", add(3, 3)); //calling sum function
    console.log("\nis 55 odd or even ? ", checkEvenOrOdd(55)); //calling function
    console.log("\nThe Area of the rectangle with Lenght: 10 and Width : 5 is ", calculatearea(10, 5));
    console.log("\nThe reverse of the Name Alina is : ", reversestring("Alina"));
    console.log("\nThe 25 degree celsius temprature is", convertCelsiusToFahrenheit(25), " in Fahrenheit");
    function add(x, y) {
        return x + y;
    }
    function checkEvenOrOdd(x) {
        if (x / 2 == 0) {
            return "The Number is Even";
        }
        else {
            return "The Number is Odd";
        }
    }
    function calculatearea(length, width) {
        return length * width;
    }
    function reversestring(name) {
        var revesed_name = "";
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var char = name_1[_i];
            revesed_name = char + revesed_name;
        }
        return revesed_name;
    }
    function convertCelsiusToFahrenheit(tempp) {
        return ((tempp) * ((9 / 5) + 32));
    }
}
function TaskThree() {
    var namearray = ["Malka", "Wania", "Alina", "Zainab", "Gul Afsha"];
    //printing original array
    console.log("\n", namearray);
    // adding element to array using push function
    namearray.push("Resham");
    console.log("\n", namearray);
    // removing element from the array using pop function
    namearray.pop();
    //printing array after removing last element
    console.log("\n", namearray);
    // Removing first element from the array
    namearray.shift();
    console.log("\n", namearray);
    //adding element to the start of the array
    namearray.unshift("Malka Shah");
    console.log("\n", namearray);
    // replacing zainab with shaista using splice function
    var newarr = namearray.splice(3, 1, "Shaista");
    console.log("The new list after replacing zainab \n", namearray);
    // use of slice function to get first half of the list
    var half_members = namearray.slice(0, 3);
    console.log("The new list \n", half_members);
}
