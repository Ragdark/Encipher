<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("Enter limit"));
let count = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) count++;
}
alert("Even count = " + count);
</script>
</body>
</html>