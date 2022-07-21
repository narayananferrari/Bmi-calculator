let app = `
<div class="box">
<h1>BMI Calculator</h1>
<div class="form">
    <div class="height">
        <label for="height" class="label">Height</label>
        <div class="search-body">
            <input type="number" id="height" name="height" class="enter" placeholder="cm">
            <span class="span">cm</span>
        </div>
    </div>
    <div class="weight">

        <label for="weight" class="label">Weight</label>
        <div class="search-body">
            <input type="number" id="weight" name="weight" class="enter" placeholder="kg">
            <span class="span">kg</span>
        </div>
    </div>


    <button onclick="bmiCalc()" class="calc">Calculate BMI</button>
    <button onclick="erase()" class="calc"> Refresh BMI</button>
    <meter id="meter" class="meter"></meter>
</div>
<p id="show"></p>
`;

//function that first gets evolved when you visit the site;
window.onload = () => {
  generateApp(app);
};

//this function will generate the app
let generateApp = (x) => {
  document.getElementById("container").innerHTML = x;
};

//this function will calculate the bmi.
let bmiCalc = () => {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let bmi = findBmi(height, weight);
  showData(bmi);
};
//checks the bmi
let findBmi = (height, weight) => {
  return weight / height;
};
//shows data to clients
let showData = (bmi) => {
  let show = document.getElementById("show");
  show.innerHTML = `Your bmi is ${bmi}`;
  stageOfemi(bmi);
};
//this is meter that shows percentage
let stageOfemi = (bmi) => {
  let meter = document.getElementById("meter");
  if (bmi < 50) {
    meter.value = 0.2;
  } else if (bmi > 50) {
    meter.value = 0.7;
    meter.style.optimum = "red";
  }
};
//refreshes the content
let erase = () => {
  show.innerHTML = ``;
};
