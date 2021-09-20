const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password');
var first, second, third, fourth = false;

fName.addEventListener('blur', validate);
lName.addEventListener('blur', validate);
password.addEventListener('blur', validate);
email.addEventListener('keyup', validateemail);

function validate() {
    if (fName.value.trim() == "") {
        fName.nextElementSibling.classList.remove('empty');
        fName.classList.add('warning');
        //first=false;
    }
    else if (!fName.nextElementSibling.classList.contains('empty')) {
        fName.nextElementSibling.classList.add('empty');
        fName.classList.remove('warning');
        first = true;
    }

    if (lName.value.trim() == "") {
        lName.nextElementSibling.classList.remove('empty');
        lName.classList.add('warning');
        //second=false;
    }
    else if (!lName.nextElementSibling.classList.contains('empty')) {
        lName.nextElementSibling.classList.add('empty');
        lName.classList.remove('warning');
        second = true;
    }

    if (password.value.trim() == "") {
        password.nextElementSibling.classList.remove('empty');
        password.classList.add('warning');
        //fourth=false;
    }
    else if (!password.nextElementSibling.classList.contains('empty')) {
        password.nextElementSibling.classList.add('empty');
        password.classList.remove('warning');
        fourth = true;
    }

    //    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

function validateemail() {
    let emailtext = email.value.trim();
    // let mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    if (emailtext.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        email.nextElementSibling.classList.add('empty');
        email.classList.remove('warning');
        third = true;

    }
    // else if(!email.nextElementSibling.classList.contains('empty')) {
    else {
        email.nextElementSibling.classList.remove('empty');
        email.classList.add('warning');
        //third=false;

    }

}

function submit() {
    if (first, second, third, fourth) {
        console.log('sucess');
        return false;
    }
    else {
        console.log('Not all fields are populated');
        return false;
    }
}