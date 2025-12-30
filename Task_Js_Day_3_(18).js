<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("How many numbers?"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += Number(prompt("Enter number"));
}
alert("Average = " + (sum / n));
</script>
</body>
</html>