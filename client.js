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

function bonusPercentageFunction(array) {
  let employeeBonusInfo = [];
  let bonusPercentage = 0;


  for (let employee of array) {
    if (employee.reviewRating <= 2) {
      bonusPercentage += 0;
    } else if (employee.reviewRating === 3) {
      bonusPercentage += 4;
    } else if (employee.reviewRating === 4) {
      bonusPercentage += 6;
    } else if (employee.reviewRating === 5) {
      bonusPercentage += 10;
    } if (employee.employeeNumber.length === 4) {
      bonusPercentage += 5;
    } if (employee.annualSalary > 65000) {
      bonusPercentage -= 1;
    } if (bonusPercentage > 13) {
      bonusPercentage = 13;
    } if (bonusPercentage < 0) {
      bonusPercentage = 0;
    }
  
  let actualBonusPercentage = bonusPercentage / 100;
  console.log(actualBonusPercentage);

  let bonusTotal = (employee.annualSalary * actualBonusPercentage);
  console.log('Total Bonus', bonusTotal);
  let totalCompensation = bonusTotal + employee.annualSalary;
  console.log('total comp', totalCompensation);

  employeeBonusInfo.push({
    name: employees.name,
    bonusPercentage: actualBonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: bonusTotal
    }) // object add 
  } //for loop end
  return employeeBonusInfo
} //end function

console.log(bonusPercentageFunction(employees));




