const form = document.querySelector("form");
const confirmation = document.querySelector("#confirmation");

const takeOrder = () => {
  const randomNumber = Math.floor(100000 + Math.random() * 999999);
  confirmation.innerHTML = `Thank you for your order! Your confirmation number is #${randomNumber}. We will be in touch soon to schedule delivery and pickup!`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  takeOrder();
});
