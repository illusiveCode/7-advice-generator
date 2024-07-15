const adviceNumber = document.getElementById("adviceNumber");
const advice = document.getElementById("advice");
const adviceGenButton = document.getElementById("dice");

const getAdviceData = async () => {
  const url = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    adviceNumber.textContent = `${data.slip.id}`;
    advice.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error(error.message);
  }
};

const handleClick = () => {
  adviceGenButton.disabled = true;
  adviceGenButton.style.opacity = "15%";

  getAdviceData();

  setTimeout(() => {
    adviceGenButton.disabled = false;
    adviceGenButton.style.opacity = "100%";
  }, 2000);
};

adviceGenButton.addEventListener("click", handleClick);

adviceGenButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleClick();
  }
});
