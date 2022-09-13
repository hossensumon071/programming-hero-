console.log("prompte connected");

const showAlert = () => {
    const num = Math.random() * 10; 
    console.log(num);
    if (num < 5) {
        alert("ki khobor dusto");
    }
    
}

const askSomthing = () => {
    const decision = confirm("are you coming to the picnic?");
    console.log(decision);
    if (decision === true) {
        alert("dosto 500 taka bekash");
    }
    else{
        console.log("DGM - Dure giya mor")
    }
}


const getUserInfo = () => {
    prompt(" tell us your name? ")
}