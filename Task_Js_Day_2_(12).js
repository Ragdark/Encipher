<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("Enter number"));
let r = 0;

while (n > 0) {
    r = r * 10 + (n % 10);
    n = Math.floor(n / 10);
}
alert("Reverse = " + r);
</script>
</body>
</html>