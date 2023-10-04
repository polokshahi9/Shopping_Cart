const caseMain = document.getElementById('case_increased');
caseMain.addEventListener('click', () => {
  const caseInput = document.getElementById('case_input_field');
  const caseNumber = parseInt(caseInput.value);
  const casenewCount = caseNumber + 1;
  caseInput.value = casenewCount;
  const phonePrice = document.getElementById('phone_total');
  phonePrice.innerHTML = casenewCount * 1219;


  

})

document.getElementById('case_decreased').addEventListener('click', () => {
  const inputField = document.getElementById('case_input_field');
  const caseCount = parseInt(inputField.value);
  const casenewCount = caseCount - 1;
  inputField.value = casenewCount;
  const priceDecreament = document.getElementById('phone_total');
  priceDecreament.innerHTML = casenewCount * 1219;

})





const caseTotal = document.getElementById('case_increase');
caseTotal.addEventListener('click', () => {
  const caseInput = document.getElementById('case_count');
  const caseNumber = parseInt(caseInput.value);
  const casenewCount = caseNumber + 1;
  caseInput.value = casenewCount;
  const phonePrice = document.getElementById('case_total');
  phonePrice.innerHTML = casenewCount * 59;


  

})

document.getElementById('case_decrease').addEventListener('click', () => {
  const inputField = document.getElementById('case_count');
  const caseCount = parseInt(inputField.value);
  const casenewCount = caseCount - 1;
  inputField.value = casenewCount;
  const priceDecreament = document.getElementById('case_total');
  priceDecreament.innerHTML = casenewCount * 59;

})