let timer = 0;

const timerFunc = () => {
    timer++;
    console.log(timer)
    setTimeout(timerFunc, 1000);
};
timerFunc()