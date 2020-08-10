const file1 = require('./src/color_util');

var runApp = true;
var user_choice = -1;
var balance = -1;
var pin = -1;
var accCreated = false;
var transactions = [];
var transactionMenuActive = true;
while(runApp){
	
	console.log(file1.blue('DOLLARSBANK ATM Welcomes You!!'));
	const prompt = require('prompt-sync')();
	user_choice = prompt(file1.blue('Enter a valid choice (1 > Transaction 2 > Open New Account 3 > Exit): ') +"\u001b[36m");
	user_choice = Number(user_choice);

	if(isNaN(user_choice)){
		console.log(file1.red("Invalid Input! Try Again!"));
	}
	else{
		if(user_choice == 1){
			if(accCreated){
				if(transactionMenuActive == false){
					transactionMenuActive = true;
				}
				while(transactionMenuActive){
					console.log(file1.blue("Transaction  Menu:"));
					console.log(file1.blue("Enter 1 : Account Balance Check"));
					console.log(file1.blue("Enter 2 : Print Transactions"));
					console.log(file1.blue("Enter 3 : Update PIN"));
					console.log(file1.blue("Enter 4 : Withdraw Amount"));
					console.log(file1.blue("Enter 5 : Deposit Amount"));
					console.log(file1.blue("----------------------------------"));
					var transactionChoice = prompt(file1.blue('Enter a choice between 1-5: ') +"\u001b[36m");
					transactionChoice = Number(transactionChoice);
					if(isNaN(transactionChoice)){
						console.log(file1.red("Invalid Input! Try Again!"));
					}
					else if(transactionChoice<1 || transactionChoice>5){
						console.log(file1.red("Invalid Input! Your choice is out of range!"));
					}
					else if(transactionChoice==1){ //Acc Balance Check
						console.log(file1.green("You current balance is $"+balance));
						while(true){
							var anotherTransaction = prompt(file1.blue('Would you like to perform another transaction (y/n)?: ') +"\u001b[36m");
							if(anotherTransaction=="y"){
								break;
							}
							else if(anotherTransaction=="n"){
								transactionMenuActive = false;
								break;
							}
							else{
								console.log(file1.red("Invalid Input! Try Again!"));
							}
						}
					}
					else if(transactionChoice == 2){//print transactions
						console.log(file1.green("Transactions List: "));
						for(var i=0;i<transactions.length;i++){
							console.log(file1.green(transactions[i]));
						}
						while(true){
							var anotherTransaction = prompt(file1.blue('Would you like to perform another transaction (y/n)?: ') +"\u001b[36m");
							if(anotherTransaction=="y"){
								break;
							}
							else if(anotherTransaction=="n"){
								transactionMenuActive = false;
								break;
							}
							else{
								console.log(file1.red("Invalid Input! Try Again!"));
							}
						}
					}
					else if(transactionChoice == 3){//change pin
						while(true){
							var newpin =  prompt("\u001B[34m"+'Enter A NEW 4 Digit Number To Act As Your Secure Pin: '+"\u001b[36m");
							newpin = Number(newpin);
							if(!isNaN(newpin)&& newpin>999 && newpin<=9999 && newpin !=pin){
								while(true){
									let verify_pin = prompt("\u001B[34m"+'Re-enter new Pin: '+"\u001b[36m");
									verify_pin = Number(verify_pin);
									if(newpin === verify_pin){
										pin = newpin;
										console.log("\u001B[32m"+"Your new pin is: " + `${pin}`+"\u001B[0m" );
										break;
									}
									else{
										console.log(file1.red("Pin does not match! Try Again!"));
									}
								}
								break;
							}
							else{
								console.log(file1.red("Pin does not meet requirements! Try Again!"));
							}	
						}

						while(true){
							var anotherTransaction = prompt(file1.blue('Would you like to perform another transaction (y/n)?: ') +"\u001b[36m");
							if(anotherTransaction=="y"){
								break;
							}
							else if(anotherTransaction=="n"){
								transactionMenuActive = false;
								break;
							}
							else{
								console.log(file1.red("Invalid Input! Try Again!"));
							}
						}
					}
					else if(transactionChoice == 4){//withdraw
						while(true){
							var takeAmt = prompt(file1.blue('Enter Amount to Withdraw: ') +"\u001b[36m");
							takeAmt = Number(takeAmt);
							if(isNaN(takeAmt)){
								console.log(file1.red("Invalid Input! Try Again!"));
							}
							else if(takeAmt<=0){
								console.log(file1.red("Invalid Input! Withdrawal Amount cannot be less than or equal to 0!"));
							}
							else if(takeAmt>balance){
								console.log(file1.red("Invalid Input! Withdraw Amount is greater than current balance!"));
								console.log(file1.green("Current Balance is : $"+ balance));
							}
							else{
								balance-=takeAmt;
								console.log(file1.green("Withdrawal Successful! Current Balance is : $"+ balance));
								transactions.push("Withdrawal of : $" + takeAmt +" --- Current Balance is : $"+ balance);
								break;
							}
						}

						while(true){
							var anotherTransaction = prompt(file1.blue('Would you like to perform another transaction (y/n)?: ') +"\u001b[36m");
							if(anotherTransaction=="y"){
								break;
							}
							else if(anotherTransaction=="n"){
								transactionMenuActive = false;
								break;
							}
							else{
								console.log(file1.red("Invalid Input! Try Again!"));
							}
						}
					}
					else if(transactionChoice == 5){//deposit
						while(true){
							var depAmt = prompt(file1.blue('Enter Amount to Deposit: ') +"\u001b[36m");
							depAmt = Number(depAmt);
							if(isNaN(depAmt)){
								console.log(file1.red("Invalid Input! Try Again!"));
							}
							else if(depAmt<=0){
								console.log(file1.red("Invalid Input! Deposit Amount cannot be less than or equal to 0!"));
							}
							else{
								balance+= depAmt;
								console.log(file1.green("Deposit Successful! Current Balance is : $"+ balance));
								transactions.push("Deposit of : $" + depAmt +" --- Current Balance is : $"+ balance);
								break;
							}
						}

						while(true){
							var anotherTransaction = prompt(file1.blue('Would you like to perform another transaction (y/n)?: ') +"\u001b[36m");
							if(anotherTransaction=="y"){
								break;
							}
							else if(anotherTransaction=="n"){
								transactionMenuActive = false;
								break;
							}
							else{
								console.log(file1.red("Invalid Input! Try Again!"));
							}
						}
						
					}

					//runApp = false;
				}
				
			}
			else{
				console.log(file1.red("You must create an account before conducting transactions!"));
			}
			
		}
		else if(user_choice==2){
			if(accCreated){
				console.log(file1.red("You have already created an account!"));
			}
			else{
				while(true){
					balance = prompt("\u001B[34m"+'Enter Initial Deposit: '+"\u001b[36m");
					var temp = balance;
					balance = Number(balance);
					if(!isNaN(balance) && balance > 0){
						while(true){
							pin =  prompt("\u001B[34m"+'Enter A 4 Digit Number To Act As Your Secure Pin: '+"\u001b[36m");
							pin = Number(pin);
							if(!isNaN(pin)&& pin>999 && pin<=9999){
								while(true){
									let verify_pin = prompt("\u001B[34m"+'Re-enter Secure Pin: '+"\u001b[36m");
									verify_pin = Number(verify_pin);
									if(pin === verify_pin){
										console.log(file1.green("Thank You For Creating An Account!"));
										transactions.push("Initial Deposit of : $" + temp +" --- Current Balance is : $"+ temp);
										accCreated = true;
										break;
									}
									else{
										console.log(file1.red("Pin does not match! Try Again!"));
									}
								}
								break;
							}
							else{
								console.log(file1.red("Pin does not meet requirements! Try Again!"));
							}	
						}
						break;
				
					}
					else{
						console.log(file1.red("Invalid Initial Deposit! Try Again!"));
					}
				}
				console.log("\u001B[32m"+"Your balance is: $"+`${balance}` + " and your pin is: " + `${pin}`+"\u001B[0m" );
			}	
			
		}
		else if(user_choice==3){
			console.log(file1.green("Thank You for using the DOLLARSBANK ATM! Goodbye!"));
			runApp = false;
		}
		else{
			console.log(file1.red("Invalid Input! Try Again!"))
		}
	}
}