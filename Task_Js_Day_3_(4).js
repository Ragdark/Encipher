<!DOCTYPE html>
<html>
<body class="a">
<script>
let limit = Number(prompt("How many numbers?"));
let max = Number(prompt("Enter number"));

for (let i = 2; i <= limit; i++) {
    let n = Number(prompt("Enter number"));
    if (n > max) max = n;
}
alert("Largest number = " + max);
</script>
</body>
</html>