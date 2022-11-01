const loginBox = document.querySelector('.login-box');
const loginBtn = document.querySelector('.login-button');
const loginId = document.querySelector('.login-id');
const loginPw = document.querySelector('.login-pw');

let validId;
let validPw;

const checkIdPw = () => {

    validId = loginId.value;
    validPw = loginPw.value;

    validId.includes("@", ".") && validPw.length >= 8 ?
    loginBtn.disabled = false : loginBtn.disabled = true;
}

loginId.addEventListener('keyup', checkIdPw);
loginPw.addEventListener('keyup', checkIdPw);

const loginSuccess = (validId, validPw) => {
    alert("환영합니다.")

    console.log(validId);
    console.log(validPw);

    fetch("http://localhost:8080/users/login",{
    method : "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body : JSON.stringify({
            email: validId,
            password: validPw
        })
    })
    .then(res => res.json())
    .then(res => console.log(res)
    
    )
}
 
const clickButton = () => {
    loginBtn.addEventListener('click', (e) => {
        loginSuccess(validId, validPw);
    })
}

clickButton();