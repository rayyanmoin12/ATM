#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 25000;
let myPin = 1234;
let while_condition = true;

let pinCode = await inquirer.prompt([{
    type: "number",
    name: "pin",
    message: "Enter your PIN code:"
}]);

if (pinCode.pin === myPin){
    console.log("Correct PIN code!");

while (while_condition === true) {
    let ans = await inquirer.prompt([{
        type:"list",
        name:"operation",
        choices: ["Deposit", "Withdraw", "Fast_cash", "Balance inquiry"]
    }]);

    if (ans.operation === "Deposit"){
        let ans = await inquirer.prompt([{
            type:"number",
            name:"deposit",
            message:"How much would you like to deposit?"
        }]);

        if (ans.deposit > 0){
            console.log(`You have successfully deposited $${ans.deposit} into your account!`);
            myBalance += ans.deposit
            console.log(`\nYour new balance is $${myBalance}.`);

        }
        else {
            console.log("Invalid amount entered!");
        }
    }

    else if (ans.operation === "Withdraw"){
        let ans = await inquirer.prompt([{
            type:"number",
            name:"withdraw",
            message:"How much would you like to withdraw?"
        }]);

        if (ans.withdraw <= myBalance){
            console.log(`You have successfully withdrawn $${ans.withdraw} from you bank account.`);
            myBalance -= ans.withdraw
            console.log(`\nYour new balance is $${myBalance}.`);
        } else {
            console.log("Sorry! We cannot procced with this transaction!");
        }
    }

    else if (ans.operation === "Fast_cash"){
        let ans = await inquirer.prompt([{
            type:"list",
            name:"fast_cash",
            message:"Please, choose an option.",
            choices: ["500", "1000", "2000", "5000"]
        }])

        if (ans.fast_cash === "500"){
            myBalance -= ans.fast_cash
            console.log(`You have succesfully withdrawn $${ans.fast_cash} from your bank account.`);
                        console.log(`\nYour new balance is $${myBalance}.`);

        } else if (ans.fast_cash === "1000"){
            myBalance -= ans.fast_cash
            console.log(`You have succesfully withdrawn $${ans.fast_cash} from your bank account.`);
                        console.log(`\nYour new balance is $${myBalance}.`);
        } else if (ans.fast_cash === "2000"){
            myBalance -= ans.fast_cash
            console.log(`You have succesfully withdrawn $${ans.fast_cash} from your bank account.`);
                        console.log(`\nYour new balance is $${myBalance}.`);
        } else if (ans.fast_cash === "5000"){
            myBalance -= ans.fast_cash
            console.log(`You have succesfully withdrawn $${ans.fast_cash} from your bank account.`);
                        console.log(`\nYour new balance is $${myBalance}.`);
        } 
    }

    else if (ans.operation === "Balance inquiry"){
        console.log(`Your current Balance is: $${myBalance}`);
    }

    let while_ans = await inquirer.prompt([{
        type: "confirm",
        name: "condition",
        message: "Do you want to continue?"
    }])

    if (while_ans.condition === false){
        while_condition = false
    }

}
} else {
    console.log("Invalid PIN code!")
}
