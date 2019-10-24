let startBtn = document.getElementById("start"),
  budget = document.getElementsByClassName("budget-value")[0],
  dayBudget = document.getElementsByClassName("daybudget-value")[0],
  level = document.getElementsByClassName("level-value")[0],
  expenses = document.getElementsByClassName("expenses-value")[0],
  optionalExpenses = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  income = document.getElementsByClassName("income-value")[0],
  monthsavings = document.getElementsByClassName("monthsavings-value")[0],
  yearsavings = document.getElementsByClassName("yearsavings-value")[0],
  year = document.querySelector(".year-value"),
  month = document.querySelector(".month-value"),
  day = document.querySelector(".day-value"),
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector(".choose-income"),
  checkbox = document.querySelector("#savings"),
  chooseSum = document.querySelector(".choose-sum"),
  choosePercent = document.querySelector(".choose-percent"),
  buttons = document.getElementsByTagName("button");

let money, time;

buttons.disabled = true;

startBtn.addEventListener("click", function() {
  buttons.disabled = false;

  time = prompt("Введіть, будь - ласка, дату в такому форматі YYYY-MM-DD", "");
  money = +prompt("Який у вас місячний бюджет?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Який у вас місячний бюджет?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budget.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener("click", function() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("Done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = i - 1;
    }
  }
  expenses.textContent = sum;
  appData.expensesSum = sum;
});

optionalExpensesBtn.addEventListener("click", function() {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    if (
      typeof opt === "string" &&
      typeof opt != null &&
      opt != "" &&
      opt.length < 50
    ) {
      appData.optionalExpenses[i] = opt;
      optionalExpenses.textContent += appData.optionalExpenses[i] + " ";
    }
  }
});

countBtn.addEventListener("click", function() {
  let necessaryExp = appData.expensesSum;

  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - necessaryExp) / 30).toFixed();

    dayBudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 200) {
      level.textContent = "Це мінімальний рівень бюджету на день";
    } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 500) {
      level.textContent = "Це середній рівень бюджету на день";
    } else if (appData.moneyPerDay > 2000) {
      level.textContent = "Це високий рівень бюджету на день";
    } else {
      level.textContent = "Сталася помилка";
    }
  } else {
    dayBudget.textContent = "Сталася помилка";
  }
});

incomeItem.addEventListener("input", function() {
  let items = incomeItem.value;

  if (
    typeof items === "string" &&
    typeof items != null &&
    items != "" &&
    items.length < 50
  ) {
    appData.income = items.split(", ");

    income.textContent = appData.income;
  }
});

checkbox.addEventListener("click", function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavings.textContent = appData.monthIncome.toFixed(1);
    yearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavings.textContent = appData.monthIncome.toFixed(1);
    yearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
