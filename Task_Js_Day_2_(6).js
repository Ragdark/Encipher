<!DOCTYPE html>
<html>
<body class="a">
<script>
function sum() {
    let n = Number(prompt("Enter limit"));
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s = s + i;
    }
    alert("Sum = " + s);
}
sum();
</script>
</body>
</html>