<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("Enter number"));
let s = 0;

while (n > 0) {
    s += n % 10;
    n = Math.floor(n / 10);
}
alert("Sum of digits = " + s);
</script>
</body>
</html>