// variables
const submitBtn = document.querySelector(".submit-btn");
const resetBtn = document.querySelector(".reset-btn");

// submit the form and show alert
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  alert("اطلاعات فرم شما ثبت شد!");
});

// reset the form fields
resetBtn.addEventListener("click", () => {
  const form = document.querySelector(".form");

  form.reset();
});
