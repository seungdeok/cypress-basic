export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const onIncrement = () => {
    const input = document.querySelector(".count-display");
    const currentValue = parseInt(input.value, 10);
    if (currentValue === 12) return;
    input.value = currentValue + 1;
  };

  const onDecrement = () => {
    const input = document.querySelector(".count-display");
    const currentValue = parseInt(input.value, 10);
    if (currentValue === 8) return;
    input.value = currentValue - 1;
  };

  const init = () => {
    render();

    const plusBtn = document.querySelector(".plus-button");
    const minusBtn = document.querySelector(".minus-button");

    plusBtn.addEventListener("click", onIncrement);

    minusBtn.addEventListener("click", onDecrement);

    return () => {
      plusBtn.removeEventListener("click", onIncrement);

      minusBtn.removeEventListener("click", onDecrement);
    };
  };

  init();
}
