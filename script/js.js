let money = prompt('What is your month budget?');
let time = prompt('Please enter date in this format YYYY-MM-DD');
let question1 = prompt('Please write necessary expenses in this month');
let question2 = prompt('How much it will cost?');
let AppData = {
    budget: money,
    timeData: time,
    expenses: {
        question1:  question2  
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
alert( money/30);
