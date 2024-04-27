window.onload = function () {
  BMIRECHNUNG();
  agerounded();
  tillbirthday();
  colorchange();
  ipgetter();
};

function ipgetter() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("ip").textContent = data.ip;
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });
}

function colorchange() {
  let statusElements = document.getElementsByClassName("status");

  for (let element of statusElements) {
    let statusText = element.textContent;

    switch (statusText) {
      case "Watched":
        element.style.color = "green";
        break;
      case "Watching":
        element.style.color = "yellow";
        break;
      case "Listed":
        element.style.color = "blue";
        break;
      case "pause":
        element.style.color = "red";
        break;
      default:
        break;
    }
  }
}

function tillbirthday() {
  const targetDate = new Date("2024-06-12T00:00:00");
  const currentDate = new Date();
  const difference =
    (targetDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24);
  document.getElementById("bday").textContent =
    Math.round(difference) + " Days";
}

function BMIRECHNUNG() {
  const height = 1.85; // in Metern
  const weight = 100; // in Kilogramm
  const BMI = weight / (height * height);
  document.getElementById("bmitxt").textContent = "BMI: " + BMI.toFixed(2);
}

function agerounded() {
  const age = 16;
  const maxAge = 78.3;
  const years = maxAge - age;
  const months = years * 12;
  document.getElementById("yearstolife").textContent =
    Math.round(years) + " Jahre zu leben";
  document.getElementById("monthstolife").textContent =
    " und " + Math.round(months) + " Monate zu leben";
}
