export const timecount = () => {
  const currentTime = new Date().toLocaleTimeString().split(":");
  const hoursEl = document.querySelector(".time-count__hours .time-count__val");
  const minutesEl = document.querySelector(".time-count__minutes .time-count__val");
  const secondsEl = document.querySelector(".time-count__seconds .time-count__val");

  const hoursText = document.querySelector(".time-count__hours .time-count__val");
  const minutesText = document.querySelector(".time-count__minutes .time-count__val");
  const secondsText = document.querySelector(".time-count__seconds .time-count__val");

  let leftHours = 24 - currentTime[0] - 1;
  let leftMinutes = 60 - currentTime[1];
  let leftSeconds = 60 - currentTime.at(-1);

  const setValues = () => {
    hoursEl.textContent = leftHours;
    minutesEl.textContent = leftMinutes;
    secondsEl.textContent = leftSeconds;

    hoursText.textContent = leftHours;
    minutesText.textContent = leftMinutes;
    secondsText.textContent = leftSeconds;
  };

  const changeDates = () => {
    leftSeconds--;

    if (leftSeconds === 0) {
      if (leftMinutes === 0) {
        leftMinutes = 60;
        leftHours--;
      }

      leftSeconds = 60;
      leftMinutes--;
    }

    setValues();
  };

  setValues();
  setInterval(() => {
    changeDates();
  }, 1000);  
}