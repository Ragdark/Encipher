<!DOCTYPE html>
<html>
<body class="a">
<script>
let m1 = Number(prompt("Mark 1"));
let m2 = Number(prompt("Mark 2"));
let m3 = Number(prompt("Mark 3"));

let total = m1 + m2 + m3;
let avg = total / 3;

alert("Total = " + total);
alert("Average = " + avg);

if (avg >= 40) alert("Pass");
else alert("Fail");
</script>
</body>
</html>