function createTimer(duration, elementId) {
    let remainingTime = duration;
    let element = document.getElementById(elementId);
  
    function updateTimer() {
      if (remainingTime > 0) {
        element.textContent = remainingTime;
        remainingTime--;
      } else {
        clearInterval(timerId);
        console.log('Timer finished');
      }
    }
  
    let timerId = setInterval(updateTimer, 1000);
  }
  
  
  createTimer(10, 'timerElement');
  