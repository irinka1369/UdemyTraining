let money, time;
function start() {
  money = +prompt('What is your month budget?', '');
  time = prompt('Please enter date in this format YYYY-MM-DD', '');
   
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('What is your month budget?', '');
  }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {
           },
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses () {
     for (let i=0; i<2;i++) {
        let a = prompt('Please write necessary expenses in this month', ''),
            b = prompt('How much it will cost?', '');
    if( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null)&& a !="" && b != "" && a.length < 50)
     {
         console.log('Done');
        appData.expenses[a] = b;
    } else {
            i = i-1;
    }
           
    }
}
chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert( 'Everyday budget: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel () {
    if(appData.moneyPerDay < 100) {
        console.log('It is minimun budget per day' );
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('It is medium budget per day');
    } else if (appData.moneyPerDay > 2000) {
    console.log('It is high budget per day');
    }else {
        console.log('There is some mistake');
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('What is your amount of savings?'),
            percent = +prompt('What is your percent rate?');

            appData.monthIncome = save/100/12*percent;
    alert('Your month income from deposit is: ' + appData.monthIncome);
    }
    
}
checkSavings();

function chooseOptExpenses() {
    for (let i=0; i<3;i++) {
    let opt = prompt('What are your unnecessary expenses this month?', '');
    appData.optionalExpenses[i] = opt;
} 

}
chooseOptExpenses();