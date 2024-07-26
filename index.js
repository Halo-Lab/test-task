

document.addEventListener("DOMContentLoaded", function () {
  
  
  function changeStep(stepNumber) {
    
    const searchParams = new URLSearchParams(window.location.search);
    const activeStepNumber = searchParams.get('step') || 0;

    const steps = document.querySelectorAll('.step-swtich-button');
  
    // const activeStepNumber = [...steps].findIndex((stepButton) => stepButton.classList.contains('step-swtich-button-active'));

    const activeStep = steps[activeStepNumber];
    activeStep.classList.remove('step-swtich-button-active');

    const pressedStep = steps[stepNumber];
    pressedStep.classList.add('step-swtich-button-active');


    const images = document.querySelectorAll('.image-wrapper');
    const activeImage = images[activeStepNumber];
    activeImage.classList.remove('image-wrapper-active');

    const pressedImageStep = images[stepNumber];
    pressedImageStep.classList.add('image-wrapper-active');

    const url = new URL(window.location)
    url.searchParams.set("step", String(stepNumber))
    history.pushState(null, '', url);
    
  }
  
  function assignButtonHandlers() {
    const steps = document.querySelectorAll('.step-swtich-button');
    const searchParams = new URLSearchParams(window.location.search);
    const activeStepNumber = searchParams.get('step') || 0;
    const activeStepButton = steps[activeStepNumber];
    activeStepButton.classList.add('step-swtich-button-active');
    
    const images = document.querySelectorAll('.image-wrapper');
    const activeStepImage = images[activeStepNumber];
    activeStepImage.classList.add('image-wrapper-active');
    
    steps.forEach((button, idx) => {
      button.onclick = () => changeStep(idx)
    })
  }
  
  
  assignButtonHandlers()
});
