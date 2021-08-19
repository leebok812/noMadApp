const clock = document.querySelector("h2#clock");

function getClock () {
    const date = new Date();

    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock(); // 이게 없으면 1초 뒤에 실행됨
setInterval(getClock, 1000);