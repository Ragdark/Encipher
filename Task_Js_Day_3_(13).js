<!DOCTYPE html>
<html>
<body class="a">
<script>
let b = Number(prompt("Enter base"));
let e = Number(prompt("Enter exponent"));
let p = 1;

for (let i = 1; i <= e; i++) {
    p = p * b;
}
alert("Power = " + p);
</script>
</body>
</html>