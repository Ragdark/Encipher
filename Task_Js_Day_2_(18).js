<!DOCTYPE html>
<html>
<body class="a">
<script>
let ch = prompt("1.Add 2.Sub 3.Mul");
let a = Number(prompt("Enter a"));
let b = Number(prompt("Enter b"));

switch (ch) {
    case "1": alert(a + b); break;
    case "2": alert(a - b); break;
    case "3": alert(a * b); break;
    default: alert("Invalid");
}
</script>
</body>
</html>