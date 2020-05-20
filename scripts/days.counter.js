const countPara = document.getElementById('counter');
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const dayStart = new Date('2020-02-12T00:00:00');
const day100 = dayStart.getTime() + 100 * 86400 * 1000;
const date100 = new Date(day100);


const count = () => {  
    let now = Date.now();
    countDaysInLove(now);
}

const countDaysInLove = (timenow) => {
    let milliOffset = timenow - dayStart;
    let secOffset = Math.floor(milliOffset / 1000);
    
    let days = Math.floor(secOffset / 86400);
    let leftSecOfDay = Math.abs(secOffset - (days * 86400));
    let hours = Math.floor(leftSecOfDay / 3600);
    let lefSecOfHour = Math.abs(leftSecOfDay - (hours * 3600));
    let minutes = Math.floor(lefSecOfHour / 60);
    
    let seconds = Math.abs(lefSecOfHour - (minutes * 60));
    day.innerHTML = days+1;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}


setInterval(count, 1000);