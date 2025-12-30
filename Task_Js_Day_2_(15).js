<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("Enter number"));
let prime = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}
if (prime && n > 1) alert("Prime number");
else alert("Not prime");
</script>
</body>
</html>