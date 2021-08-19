const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  // 일반적으로 String만 포함된 변수는 대문자로 표기하고 String을 저장하고 싶을 때 사용한다.

// const link = document.querySelector("a");


function onLoginSubmit (event) {
   // const username = loginInput.value;
   // console.log(username);

   event.preventDefault(); // 어떤 event의 기본 행동이 발생되지 않도록 막음 -- 여기서는 form을 submit할경우 새로고침을 막아줌 
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   // greeting.innerText = "Hello " + username;
   greeting.innerText = `Hello  ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);



    // if(username === ""){
    //     alert("Please write your name");
    // }else if (username.length >  15) {
    //     alert("Your name is too long.");
    // }

    // console.log("Hello", loginInput.value)
}

// function handleLinkClick (event) {
//     event.preventDefault(); // 브라우저가 이동하는것을 막음
    
// }


loginForm.addEventListener("submit", onLoginSubmit);

// link.addEventListener("click",handleLinkClick);