const clock = () => {
    let time = new Date();

    let hrs = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    let mins = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    let secs = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

    console.log(`${hrs}:${mins}:${secs}`);
};

setInterval(clock, 1000);