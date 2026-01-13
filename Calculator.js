<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Calculator</title>

<style>
.bgX {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center; 
  align-items: center;     
  background: linear-gradient(to bottom, #6a11cb, #2575fc);
}

.boxY {
  background: #fff8e7;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  width: 320px;
}

.gridZ {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 12px;                           
  margin-top: 20px;
}

.btnA {
  border: none;
  border-radius: 8px;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
  background: #1f3c88;
  color: white;
}

.btnA:hover {
  background: #162f6a;
}

.dangerB {
  background-color: #ff9800;
  color: white;
}

.equalC {
  width: 90px;
  background-color: #4caf50;
  color: white;
  border-radius: 8px;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
}

#display2{
  width: 300px;
  height: 40px;
  text-align: right;
  font-size: 18px;
  padding-right: 10px;
}
</style>
</head>

<body class="bgX">
  <div class="boxY">
    <input type="text" id="display2">

    <div class="gridZ">
      <button class="btnA" onclick="append('+')">+</button>
      <button class="btnA" onclick="append('-')">-</button>
      <button class="btnA" onclick="append('*')">*</button>
      <button class="btnA" onclick="append('/')">/</button>

      <button class="btnA" onclick="append('7')">7</button>
      <button class="btnA" onclick="append('8')">8</button>
      <button class="btnA" onclick="append('9')">9</button>

      <button class="btnA" onclick="append('4')">4</button>
      <button class="btnA" onclick="append('5')">5</button>
      <button class="btnA" onclick="append('6')">6</button>

      <button class="btnA" onclick="append('1')">1</button>
      <button class="btnA" onclick="append('2')">2</button>
      <button class="btnA" onclick="append('3')">3</button>

      <button class="btnA" onclick="append('0')">0</button>
      <button class="btnA" onclick="append('.')">.</button>

      <button class="btnA dangerB" onclick="clearInput()">C</button>
      <button class="equalC" onclick="calculate()">=</button>
    </div>
  </div>

<script>
const a = document.getElementById("display2");

function append(input){
  a.value += input;
}

function clearInput(){
  a.value = "";
}

function calculate() {
  const value = a.value;
  if(!/\d/.test(value)){
    a.value = "Error";
    return;
  }
  try{
    a.value = eval(a.value);
  }
  catch(e){
    a.value = "Error";
  }
}
</script>

</body>
</html>