const users = [
    {
      name: "Salvio",
      incomes: [115.3, 48.7, 98.3, 14.5],
      outlay: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      incomes: [24.6, 214.3, 45.3],
      outlay: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      incomes: [9.8, 120.3, 340.2, 45.3],
      outlay: [450.2, 29.9]
    }
  ];

function calculateBalance (incomes, outlay){
    const sumIncomes = sumNumbers (incomes);
    const sumOutlay = sumNumbers (outlay);

    return sumIncomes - sumOutlay;
}

function sumNumbers (numbers){
    let sum = 0;

    for (let number of numbers){
        sum = sum + number
    }

    return sum;
}

for (let user of users){
    const balance = calculateBalance (user.incomes, user.outlay)

    if (balance > 0){
        console.log (`${user.name} has a POSITIVE balance of ${balance.toFixed(2)}`);
    } else{
        console.log (`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}`);
    }
}