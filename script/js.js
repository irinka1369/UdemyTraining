let money = +prompt('What is your month budget?', '');
let time = prompt('Please enter date in this format YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
           },
    optionalExpenses: {},
    income: [],
    savings: false
};
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

appData.moneyPerDay = appData.budget / 30;

alert( 'Everyday budget: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('It is minimun budget per day' );
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('It is medium budget per day');
} else if (appData.moneyPerDay > 2000) {
console.log('It is high budget per day');
}else {
    console.log('There is some mistake');
}