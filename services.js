const form = document.querySelector("#order-form");
const confirmation = document.querySelector("#confirmation");

const takeOrder = () => {
  const randomNumber = Math.floor(10000 + Math.random() * 99999);
  confirmation.innerHTML = `Thank you for your order! Your confirmation number is #00${randomNumber}. We will be in touch soon to schedule pickup and delivery!`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
  takeOrder();
});
