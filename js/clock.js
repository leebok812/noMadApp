const clock = document.querySelector("h2#clock");

function getClock () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds =  String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 이게 없으면 1초 뒤에 실행됨
setInterval(getClock, 1000);