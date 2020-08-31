const loanForm = document.getElementById('loan-form');

loanForm.addEventListener('submit', function(e){ 
  // hide loader
  document.getElementById('loading').style.display = 'block';

  // show results
  document.getElementById('results').style.display = 'none';

  setTimeout(calculate, 1000);
  e.preventDefault();
});

function calculate() {
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  // Compute Monthly Payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal * x * calculateInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
      // hide loader
  // hide loader
  document.getElementById('loading').style.display = 'none';

  // show results
  document.getElementById('results').style.display = 'block';
  } else {
   showError('Please Enter Correct Numbers!')
  }
  
}

function showError(error){

    // hide loader
    document.getElementById('loading').style.display = 'none';

    // hide results
    document.getElementById('results').style.display = 'none';

   const errorDiv = document.createElement('div');
   errorDiv.className = 'alert alert-danger';
   errorDiv.appendChild(document.createTextNode(error));

   const card = document.querySelector('.card')
   const heading = document.querySelector('.heading');
   card.insertBefore(errorDiv, heading);
    
   setTimeout(clearError, 3000)
}

function clearError(){
   document.querySelector('.alert').remove();
}

