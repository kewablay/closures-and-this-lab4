function handleClick() {
  console.log(this.id);
  console.log(this.textContent);

  //   just to show output on the ui
  const outputConsole = document.querySelector(".console");
  outputConsole.innerHTML = `
    <p>Id: <span class="font-medium ml-2 text-sm px-2   bg-gray-300">${this.id}</span></p>
    <p>Text Content: <span class="font-medium ml-2 text-sm px-2  bg-gray-300">${this.textContent}</span></p>
    `;
}

const button = document.querySelector("#button");
button.addEventListener("click", handleClick);



const buttonWithArrowFunc = document.querySelector("#buttonWithArrowFunc");
buttonWithArrowFunc.addEventListener("click", () => {
  console.log(this.id);
  console.log(this.textContent);

  //   just to show output on the ui
  const outputConsole = document.querySelector(".console2");
  outputConsole.innerHTML = `
    <p>Id: <span class="font-medium ml-2 text-sm px-2   bg-gray-300">${this.id}</span></p>
    <p>Text Content: <span class="font-medium ml-2 text-sm px-2  bg-gray-300">${this.textContent}</span></p>
    `;
});
