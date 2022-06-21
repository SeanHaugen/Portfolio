
//button script begin here

let rippleButton = document.querySelector('.ripple-button1');


function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + "px");
    element.style.setProperty('--y', posY + "px");
}

rippleButton.addEventListener('mousedown', (e) => {
    mousePositionToCustomProp(e, rippleButton)
    rippleButton.classList.add("pulse");
    rippleButton.addEventListener(
      "animationend",
      () => {
        rippleButton.classList.remove("pulse");
      },
      { once: true }
  );
})


const rippleButton2 = document.querySelector('.ripple-button2');


function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + "px");
    element.style.setProperty('--y', posY + "px");
}

rippleButton2.addEventListener('mousedown', (e) => {
    mousePositionToCustomProp(e, rippleButton2)
    rippleButton2.classList.add("pulse");
    rippleButton2.addEventListener(
      "animationend",
      () => {
        rippleButton2.classList.remove("pulse");
      },
      { once: true }
  );
})


const rippleButton3 = document.querySelector('.ripple-button3');


function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + "px");
    element.style.setProperty('--y', posY + "px");
}

rippleButton3.addEventListener('mousedown', (e) => {
    mousePositionToCustomProp(e, rippleButton3)
    rippleButton3.classList.add("pulse");
    rippleButton3.addEventListener(
      "animationend",
      () => {
        rippleButton3.classList.remove("pulse");
      },
      { once: true }
  );
})

let reveal = () => {
  let x = document.querySelector(".img-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

