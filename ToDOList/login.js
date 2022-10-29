const loginBox = document.querySelector('.login-box');
const loginBtn = document.querySelector('.login-button');
const loginId = document.querySelector('.login-id');
const loginPw = document.querySelector('.login-pw');

loginBox.addEventListener("keydown", (e) => {
    let validId = loginId.value;
    let validPw = loginPw.value;

        if (!(validId.includes("@", "."))) {
            loginBtn.disabled = true;
        }
        else if (!(validPw.length >= 8)){
            loginBtn.disabled = true;

        }
        else {
            loginBtn.disabled = false;
        }
});

const loginSuccess = () => {
    alert("환영합니다.")

    fetch("http://localhost:8080//users/login",{
	method : "POST",
    headers: {
        "Content-Type": "application/json",
    },
   	body : JSON.stringify({
            email: string,
            password: string
        })
    })
    .then(res => res.json())
    .then(res => console.log(res))
}