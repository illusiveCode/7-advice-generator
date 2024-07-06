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

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
};

adviceGenButton.addEventListener("click", getAdviceData);

//TODO Make a timeout
//TODO function to change the advice number and advice itself
