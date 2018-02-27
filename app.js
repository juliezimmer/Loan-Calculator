// Calculate button functionality - adding n listener to the submit button/
// querySelector could also be used
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calculateResults() function
function calculateResults(e) {
   console.log("Calculating...");
   // variables for calculating interest - form fields
   const loanAmount = document.getElementById('amount');
   const interest = document.getElementById('interest');
   const loanTerm = document.getElementById('years');
   const monthlyPayment = document.getElementById('monthly-payment');
   const totalPayment = document.getElementById('total-payment'); 
   const totalInterest = document.getElementById('total-interest');
   
   // calculations for loan
   // parseFloat makes the number into a decimal
   const principal = parseFloat(loanAmount.value);
   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
   const calculatedPayments = parseFloat(loanTerm.value) * 12;

   //  Computer monthly payments
   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
   const monthly = (principal * x * calculatedInterest)/(x - 1);

   //  validation: check to see if monthly is a finite number
   if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2); // toFixed(2) adds 2 decimals to the monthlyPayment
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)- principal) .toFixed(2);
   } else {
      showError('Please check numbers');
   }
   e.preventDefault();
}

// Show Error
function showError(error) {
   //create a div
   const error = document.createElement('div');

   // Get elements
   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');

   // Add danger bootstrap class
   error.className = 'alert alert-danger';

   // Add/create/append text node to div
   error.appendChild(document.createTextNode(error));

   // Insert error above heading
   // insertBefore takes in two parameters: what element to insert (error) and what it is inserted before. 
   card.insertBefore(error, heading);

   // clear error after 3 seconds
   setTimeout(clearError, 3000);

}

// clearError function
function ClearError() {
   document.querySelector('.alert').remove();
}