const form = document.querySelector("#order-form");
const confirmation = document.querySelector("#confirmation");
const customerName = document.querySelector("#firstname");

const takeOrder = () => {
  const randomNumber = Math.floor(10000 + Math.random() * 99999);
  confirmation.innerHTML = `Thank you for your order, ${customerName.value}! Your confirmation number is #00${randomNumber}. We will be in touch soon to schedule pickup and delivery!`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  takeOrder();
  form.reset();
});
