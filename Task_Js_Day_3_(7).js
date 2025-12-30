<!DOCTYPE html>
<html>
<body class="a">
<script>
let n = Number(prompt("Enter number"));
for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}
</script>
</body>
</html>