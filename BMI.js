
let calculateBtn = document.getElementById('calculate');

    calculateBtn.addEventListener('click', calculateBMI);

function calculateBMI() {

  let weight = parseFloat(document.getElementById('weight').value)
  let height_cm = parseFloat(document.getElementById('height').value)
  let age = parseInt(document.getElementById('age').value);
  let gender = document.querySelector('input[name="gender"]:checked');

// check that all inputs is filled

  if (
     isNaN(weight) ||
     isNaN(height_cm) ||
     isNaN(age) ||
     weight <= 0 ||
     height_cm <= 0 ||
     age <= 0 ||
     !gender
   )
        {
            alert("Please enter valid values for all fields.");
            return;
   }

// conver height_cm to height_m

  let height_m = height_cm / 100;

// find bmi

  let bmi = weight / (height_m ** 2);

  // create variable and find bmi value

  let catogry;
  if (bmi < 18.5) {
                catogry = "You are underweight.";
            }
  else if (bmi >= 18.5 && bmi < 24.9) {
                catogry = "You have a normal weight.";
            }
  else if (bmi >= 25 && bmi < 29.9) {
                catogry = "You are overweight.";
            }
  else    {
                catogry = "You are obese.";
            }

    // create paragraph of bmi value

    let displayBMI = document.querySelector('.displayBMI');

    let bmiParagraph = document.createElement('p');
    bmiParagraph.classList.add('ans');
    bmiParagraph.innerHTML = bmi.toFixed(2) ;

    displayBMI.innerHTML = '';

    displayBMI.appendChild(bmiParagraph);

    // create paragraph of catogray of bmi

    let displayCatg = document.querySelector('.disCat');

    let catogray = document.createElement('p');
    catogray.classList.add('answer');
    catogray.innerHTML = catogry;

     displayCatg.innerHTML = '';
    displayCatg.appendChild(catogray);



}
