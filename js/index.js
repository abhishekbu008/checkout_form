const inputs = document.querySelectorAll("input");
const submit = document.querySelector(".btn");

const quantityAdd = document.querySelectorAll(".quantity__add");
const quantitySubtract = document.querySelectorAll(".quantity__subtract");
const quantityInput = document.querySelectorAll(".quantity__text");

const addQuantity = (elem, index) => {
  elem.addEventListener("click", () => {
    quantityInput[index].value = +quantityInput[index].value + 1;
  });
};

const removeQuantity = (elem, index) => {
  elem.addEventListener("click", () => {
    const value = +quantityInput[index].value;
    if (value <= 0) {
      quantityInput[index].value = 0;
    } else {
      quantityInput[index].value = +quantityInput[index].value - 1;
    }
  });
};

quantityAdd.forEach((elem, index) => addQuantity(elem, index));
quantitySubtract.forEach((elem, index) => removeQuantity(elem, index));

submit.addEventListener("click", () => {
  let valid = true;
  inputs.forEach((elem) => {
    if (elem.value.trim() === "") {
      valid = false && valid;
    }
  });
  if (valid) alert("Successful");
  else alert("Please fill out all fields");
});
