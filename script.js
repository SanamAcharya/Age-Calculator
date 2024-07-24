let btnEl = document.getElementById("btn-el");
let dobEl = document.getElementById("dob-el");
let containerEl = document.getElementById("container-el");
let resultEl = document.getElementById("result-el");

btnEl.addEventListener("click", () => {
  if (dobEl.value === "") {
    alert("ENTER DATE OF BIRTH");
  } else {
    findAge();
  }
});

function findAge() {
  let dob = new Date(dobEl.value);
  let today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  let monthDiff = today.getMonth() - dob.getMonth();
  let dayDiff = today.getDate() - dob.getDate();

  if (dayDiff < 0) {
    monthDiff--;
    let prevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    dayDiff += prevMonth;
  }

  if (monthDiff < 0) {
    age--;
    monthDiff += 12;
  }

  let ageText = `You are ${age} years, ${monthDiff} ${
    monthDiff === 1 ? "month" : "months"
  }, and ${dayDiff} ${dayDiff === 1 ? "day" : "days"} old`;
  resultEl.textContent = ageText;
}

const today = new Date().toISOString().split("T")[0];
dobEl.setAttribute("max", today);
