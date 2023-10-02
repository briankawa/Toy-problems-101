let basicSalary = 80000; // Replace with the desired basic salary
const personalRelief = 2400; // Replace with the desired personal relief

function getUserInput(){
    basicSalary = prompt("Enter your basic salary: ");

    // Check if input is valid
    if (isNaN(basicSalary) || isNaN(personalRelief) || basicSalary < 0 || personalRelief < 0) {
      throw new Error("Invalid input. Please enter valid numeric values.");
    }
}    
function calculateSalary(basicSalary, personalRelief) {
  const nssfRate = 0.06;
  const taxableIncome = basicSalary + personalRelief;
  const payeAmount = calculatePaye(basicSalary) * taxableIncome;
  const nhifAmount = calculateNHIFDeductions(basicSalary);
  const nssfAmount = basicSalary * nssfRate;
  const netSalary = basicSalary + personalRelief - (payeAmount + nhifAmount + nssfAmount);

  console.log(`Gross Salary: ${basicSalary}`);
  console.log(`Personal Relief: ${personalRelief}`);
  console.log(`PAYE Deduction: ${payeAmount}`);
  console.log(`NHIF Deduction: ${nhifAmount}`);
  console.log(`NSSF Deduction: ${nssfAmount}`);
  console.log(`Net Salary: ${netSalary}`);
}

function calculateNHIFDeductions(basicSalary) {
  // NHIF calculation logic here
  // specify NHIF rates and ranges as needed
  let nhiftax;
  if (basicSalary <= 5999) {
    nhiftax = 150;
  } else if (basicSalary >= 6000 &&  basicSalary <= 7999) {
    nhiftax = 300;
  } else if (basicSalary >= 8000 &&  basicSalary <= 11999) {
    nhiftax = 400;
  } else if (basicSalary >= 12000 && basicSalary <= 14999) {
    nhiftax = 500;
  } else if (basicSalary >= 15000 && basicSalary <= 19999) {
    nhiftax = 600;
  } else if (basicSalary >= 20000 && basicSalary <= 24999) {
    nhiftax = 750;
  } else if (basicSalary >= 25000 && basicSalary <= 29999) {
    nhiftax = 850;
  } else if (basicSalary >= 30000 && basicSalary <= 34999) {
    nhiftax = 900;
  } else if (basicSalary >= 35000 && basicSalary <= 39999) {
    nhiftax = 950;
  } else if (basicSalary >= 40000 && basicSalary <= 44999) {
    nhiftax = 1000;
  } else if (basicSalary >= 45000 && basicSalary <= 49999) {
    nhiftax = 1100;
  } else if (basicSalary >= 50000 && basicSalary <= 59999) {
    nhiftax = 1200;
  } else if (basicSalary >= 60000 && basicSalary <= 69999) {
    nhiftax = 1300;
  } else if (basicSalary >= 70000 && basicSalary <= 79999) {
    nhiftax = 1400;
  } else if (basicSalary >= 80000 && basicSalary <= 89999) {
    nhiftax = 1500;
  } else if (basicSalary >= 90000 && basicSalary <= 99999) {
    nhiftax = 1600;
  } else {
    nhiftax = 1700;
  }
  return nhiftax;

}

function calculatePaye(basicSalary) {
  // PAYE calculation logic here
  // specify PAYE rates and ranges as needed
  let payeRate;
  if (basicSalary <= 24000) {
    payeRate = 0.1;
  } else if (basicSalary >= 24001 && basicSalary <= 32333) {
    payeRate = 0.25;
  } else if (basicSalary >= 32334) {
    payeRate = 0.3;
  }
  return payeRate;
}

// Example usage:
calculateSalary(basicSalary, personalRelief);