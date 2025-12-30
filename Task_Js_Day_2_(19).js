<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("Enter limit"));
let e = 0, o = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) e += i;
    else o += i;
}
alert("Even sum = " + e + "\nOdd sum = " + o);
</script>
</body>
</html>