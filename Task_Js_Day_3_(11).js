<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("Enter limit"));
let c = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) c++;
}
alert("Odd count = " + c);
</script>
</body>
</html>