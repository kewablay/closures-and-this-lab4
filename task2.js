function handleClick() {
  console.log(this.id);
  console.log(this.textContent);

  // show output on the ui
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

  //  we get  undefined for this.id and this.textContent because arrow functions do not have their own this context. 
//   Rather, they inherit the this value from the enclosing lexical context. in this case "this" refers to the window object

  // show output on the ui
  const outputConsole = document.querySelector(".console2");
  outputConsole.innerHTML = `
    <p>Id: <span class="font-medium ml-2 text-sm px-2   bg-gray-300">${this.id}</span></p>
    <p>Text Content: <span class="font-medium ml-2 text-sm px-2  bg-gray-300">${this.textContent}</span></p>
    <p class="text-red-500 mt-4 text-sm">we get  undefined for this.id and this.textContent because arrow functions do not have their own this context.Rather, they inherit the this value from the enclosing lexical context. in this case "this" refers to the window object. </p>
    `;
});
