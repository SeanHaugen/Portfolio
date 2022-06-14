function randomImg(width, height) {
    document.getElementById('img-container').innerHTML = '<img src="https://source.unsplash.com/random/' + width + 'x' + height + '">';;
}


//button script begin here

const rippleButton = document.querySelector('.ripple-button');


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