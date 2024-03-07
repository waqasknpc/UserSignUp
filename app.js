var userNames = []
var signUp = prompt("Do You Want To SignUp? (yes/no)")
if(signUp.toLowerCase()=="yes"){
    var personName = prompt("Please Enter Your Name")
    userNames.push(personName)
    alert("Thankyou.. signed up successfully!")
    console.log(userNames)
} else if(signUp.toLowerCase()=="no"){
    console.log("No sign up performed.");
    alert("No sign up performed.");
} else{
    alert("Please Enter Only (yes/no)")
}