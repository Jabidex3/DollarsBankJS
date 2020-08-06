var runApp = true;
var user_choice = -1;
var balance = -1;
var pin = -1;
while(runApp){
	
	console.log('DOLLARSBANK ATM Welcomes You!!');
	const prompt = require('prompt-sync')();
	user_choice = prompt('Enter a valid choice (1 > Transaction 2 > Open New Account 3 > Exit): ');
	user_choice = Number(user_choice);

	if(isNaN(user_choice)){
		console.log("Invalid Input! Try Again!")
	}
	else{
		if(user_choice == 1){
			console.log(`You chose ${user_choice}`);
			runApp = false;
		}
		else if(user_choice==2){
			while(true){
				balance = prompt('Enter Initial Deposit: ');
				balance = Number(balance);
				if(!isNaN(balance) && balance > 0){
					while(true){
						pin =  prompt('Enter A 4 digit number to act as you secure pin: ');
						pin = Number(pin);
						if(!isNaN(pin)&& pin>999 && pin<=9999){
							while(true){
								let verify_pin = prompt('verify pin: ');
								verify_pin = Number(verify_pin);
								if(pin === verify_pin){
									console.log("Thank You for creating an account!")
									break;
								}
								else{
									console.log("Pin does not match! Try Again!")
								}
							}
							break;
						}
						else{
							console.log("Pin does not meet requirements! Try Again!")
						}	
					}
					break;
			
				}
				else{
					console.log("Invalid Initial Deposit! Try Again!")
				}
			}
			
			console.log(`${balance}` + " " + `${pin}` );
			
		}
		else if(user_choice==3){
			console.log("Thank You for using the DOLLARSBANK ATM");
			runApp = false;
		}
		else{
			console.log("Invalid Input! Try Again!")
		}
	}
}