const loginBox = document.querySelector('.login-box');
const loginBtn = document.querySelector('.login-button');
const loginId = document.querySelector('.login-id');
const loginPw = document.querySelector('.login-pw');

let validId;
let validPw;

const signUp = () => {
    
    loginBox.addEventListener("keydown", (e) => {

        validId = loginId.value;
        validPw = loginPw.value;

            if (!(validId.includes("@", "."))) {
                loginBtn.disabled = true;
            }
            else if (!(validPw.length >= 8)){
                loginBtn.disabled = true;
    
            }
            else {
                loginBtn.disabled = false;
                if (loginBtn.disabled = false) {
                    loginBtn.addEventListener("click", loginSuccess);
                }
            }
    });

}

const loginSuccess = (validId, validPw) => {
    alert("환영합니다.")

    console.log(validId);
    console.log(validPw);

    fetch("http://localhost:8080/users/create",{
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

signUp();

// loginBox.addEventListener("keydown", (e) => {
//     let validId = loginId.value;
//     let validPw = loginPw.value;

//         if (!(validId.includes("@", "."))) {
//             loginBtn.disabled = true;
//         }
//         else if (!(validPw.length >= 8)){
//             loginBtn.disabled = true;

//         }
//         else {
//             loginBtn.disabled = false;
//             if (loginBtn.disabled = false) {
//                 loginBtn.addEventListener("click", loginSuccess);
//             }
//         }
// });



loginBtn.addEventListener("click", loginSuccess);

// const signUp = () => {
//     const loginBox = document.querySelector('.login-box');
//     const loginBtn = document.querySelector('.login-button');
//     const loginId = document.querySelector('.login-id');
//     const loginPw = document.querySelector('.login-pw');

//     let validId = loginId.value;
//     let validPw = loginPw.value;

//     if ((validId.includes("@")) && validId.includes(".")) {
//         loginBtn.disabled = false;
//         if (validPw.length >= 8) {
//             alert("환영합니다.");
//             loginBtn.disabled = false;
//         }
//         else{
//             alert("패스워드가 8자리 이상이어야 합니다.")
//             loginBtn.disabled = true;
//         }
//     } else {
//         alert("이메일 형식에 맞게 작성해주세요.");
//         loginBtn.disabled = true;
//     }
// }

// loginBtn.addEventListener("click", signUp);


// loginBox.addEventListener("keydown", (e) => {
//     let validId = loginId.value;
//     let validPw = loginPw.value;
//     const loginSuccess = (validId, validPw) => {
//         alert("환영합니다.")

//         fetch("http://localhost:8080/users/create",{
// 	    method : "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     	body : JSON.stringify({
//                 email: validId,
//                 password: validPw
//             })
//         })
//         .then(res => res.json())
//         .then(res => console.log(res)
        
//         )
//     }

//         if (!(validId.includes("@") && validId.includes("."))) {
//                 if (!(validPw.length >= 8)) {
//                     loginBtn.disabled = true;
//                 }
//                 else{
//                     loginBtn.disabled = true;
//                 }
//         }
//         else {
//                 loginBtn.disabled = false;
//         }
//         if (loginBtn.disabled = false) {
//             loginBtn.addEventListener("click", loginSuccess);
//         }
// });