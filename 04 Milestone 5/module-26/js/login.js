// step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step -2 get the email address inside the email input fields
    // always remember to use .value to get text from an input fieldv
    const emailField = document.getElementById('user-email');
    const email =  emailField.value;
    // console.log(email)
    // step-3 get password  
        // 3.a: set id on the html element
        // 3.b: get the element
        // 3.c: get the value from the element
        const userPassword = document.getElementById('user-password');
        const password = userPassword.value;
        console.log(email, password)

        // Danger: DO NOT VERIFY email password on the client side
        // step-4 verify email and password
        if(email === 'amir@gmail.com' && password === 'amir') {
            window.location.href = 'bank.html';
        }
        else{
            console.log('invalid user')
        }
})