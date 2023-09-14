const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // console.log('1 second');
    const actualDate = new Date();
    // console.log(actualDate);

    // seconds
    const seconds = actualDate.getSeconds();
    // console.log(seconds);
    const secondsDegrees = (seconds * 6) + 90;
    // console.log(secondsDegrees);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds);

    // minutes
    const minutes = actualDate.getMinutes();
    const minutesDegrees = (minutes * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // hours
    const hours = actualDate.getHours();
    const hoursDegrees = (hours * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);