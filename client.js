const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
//let firstEmployee = employees[2]
//console.log(firstEmployee);

function bonusPercentageFunction(object) {
  let employeeBonusInfo = [];
  let bonusPercentage = 0;
  

  for (let employee of object ) {
  if (object.reviewRating <= 2) {
    bonusPercentage += 0;
  } else if (object.reviewRating === 3) {
    bonusPercentage += 4 ;
  } else if (object.reviewRating === 4) {
   bonusPercentage += 6  ;
  } else if (object.reviewRating === 5) {
    bonusPercentage += 10  ;
  } if (object.employeeNumber.length === 4){
    bonusPercentage += 5 ;
  } if (object.annualSalary > 65000) {
    bonusPercentage -= 1 ;
  } if (bonusPercentage > 13) {
    bonusPercentage = 13;
  } if (bonusPercentage < 0){
    bonusPercentage = 0 ;
  }
}
  let actualBonusPercentage = bonusPercentage/100;
  console.log(actualBonusPercentage);

  let bonusTotal = (object.annualSalary * actualBonusPercentage);
  console.log('Total Bonus', bonusTotal);
  let totalCompensation = bonusTotal + Number(object.annualSalary);
  console.log('total comp', totalCompensation);
  
  return {
     name: object.name,
     bonusPercentage: actualBonusPercentage,
     totalCompensation: totalCompensation,
     totalBonus: bonusTotal
  }
  
}

console.log(bonusPercentageFunction(employees));




console.log(employees);
