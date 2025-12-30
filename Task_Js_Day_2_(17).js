<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("Enter number"));
let c = 0;

while (n > 0) {
    c++;
    n = Math.floor(n / 10);
}
alert("Digits = " + c);
</script>
</body>
</html>