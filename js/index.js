function addNumbers(){
  const number_1 = Number(document.getElementById('number_1').value);
  const number_2 = Number(document.getElementById('number_2').value);
  const result = document.getElementById('result');

  result.innerHTML = number_1 + number_2;
}