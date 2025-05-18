const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progressSteps = document.querySelectorAll(".step");
const first = document.querySelector(".first");

let currentStep = 0;

nextBtns.addEventListener("click", ()=>{
  first.textContent = "✔"
})

function updateStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  progressSteps.forEach((circle, index) => {
    circle.classList.toggle("active", index <= currentStep);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const inputs = formSteps[currentStep].querySelectorAll("input");
    for (let input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
    }
    currentStep++;
    updateStep();
  });
  
});


prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep--;
    updateStep();

  });
});

document.getElementById("multiStepForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Form submitted successfully!");
});


