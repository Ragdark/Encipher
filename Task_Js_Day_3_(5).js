<!DOCTYPE html>
<html>
<body class="a">
<script>
let ch = prompt("1.C to F  2.F to C");
let t = Number(prompt("Enter temperature"));

if (ch == "1") alert((t * 9/5) + 32);
else alert((t - 32) * 5/9);
</script>
</body>
</html>