const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password');
var first, second, third, fourth = false;

fName.addEventListener('blur', validate);
lName.addEventListener('blur', validate);
// password.addEventListener('blur', validate);
password.addEventListener('keyup', validatepassword);
email.addEventListener('keyup', validateemail);

function validate() {
    if (fName.value.trim() == "") {
        fName.nextElementSibling.classList.remove('empty');
        fName.classList.add('is-invalid');

    }
    else {
        if (!fName.nextElementSibling.classList.contains('empty')) {
            fName.nextElementSibling.classList.add('empty');
        }

        fName.classList.remove('is-invalid');
        fName.classList.add('is-valid');
        enableCTA();

    }



    if (lName.value.trim() == "") {
        lName.nextElementSibling.classList.remove('empty');
        lName.classList.add('is-invalid');

    }
    else {
        if (!lName.nextElementSibling.classList.contains('empty')) {
            lName.nextElementSibling.classList.add('empty');
        }

        lName.classList.remove('is-invalid');
        lName.classList.add('is-valid');
        enableCTA();
    }

    if (password.value.trim() == "") {
        password.nextElementSibling.classList.remove('empty');
        password.nextElementSibling.nextElementSibling.classList.remove('empty');
        password.classList.add('is-invalid');

    }
    else validatepassword();

}
function validatepassword() {
    // if (password.value.trim() == "") {
    //     password.nextElementSibling.classList.remove('empty');
    //     password.nextElementSibling.nextElementSibling.classList.remove('empty');
    //     password.classList.add('is-invalid');

    // }
    // else {
    const regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (password.value.trim().match(regexp)) {
        // if (!password.nextElementSibling.classList.contains('empty') && !password.nextElementSibling.nextElementSibling.classList.contains('empty') && password.value.length>8) {
        password.nextElementSibling.classList.add('empty');
        password.nextElementSibling.nextElementSibling.classList.add('empty');
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        enableCTA();
        // }


        // }
    }
    else console.log('ne slaze se')
}
//    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function validateemail() {
    let emailtext = email.value.trim();
    // let mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    if (emailtext.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        email.nextElementSibling.classList.add('empty');
        email.classList.remove('warning');
        email.classList.add('is-valid');
        enableCTA();

    }
    // else if(!email.nextElementSibling.classList.contains('empty')) {
    else {
        email.nextElementSibling.classList.remove('empty');
        email.classList.add('warning');
        //third=false;

    }

}
var flag = false;
function submit() {
    if (flag) alert('Sucess!');
    return false;
}

function enableCTA() {
    let button = document.getElementsByClassName('btn btn-lg btn-primary')[0]
    if (fName.classList.contains('is-valid'))
        if (lName.classList.contains('is-valid'))
            if (email.classList.contains('is-valid'))
                if (password.classList.contains('is-valid')) {
                    button.disabled = false;
                    flag = true;
                }
}
