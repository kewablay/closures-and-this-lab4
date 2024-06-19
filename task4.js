function createTimer(duration, elementId) {
  let remainingTime = duration;
  let element = document.getElementById(elementId);

  function updateTimer() {
    if (remainingTime >= 0) {
      element.innerHTML = `<h1 class="p-10 mb-2 bg-slate-100 rounded-lg w-32 flex justify-center items-center text-4xl font-bold">${remainingTime}</h1>`;
      // element.textContent = remainingTime;
      remainingTime--;
    } else {
      clearInterval(timerId);
      let status = document.createElement("p");
      status.textContent = "Timer finished";
      status.style.color = "green";
      element.appendChild(status);
      console.log("Timer finished");
    }
  }

  let timerId = setInterval(updateTimer, 1000);
}

let timerInputForm = document.getElementById("timer-input-form");
timerInputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let number = document.getElementById("number").value;
  createTimer(number, "timer-container");
});

// createTimer(10, "timer-container");
