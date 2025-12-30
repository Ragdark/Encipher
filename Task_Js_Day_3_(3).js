<!DOCTYPE html>
<html>
<body class="a">
<script>
let total = Number(prompt("Total classes"));
let attended = Number(prompt("Attended classes"));
let percent = (attended / total) * 100;

if (percent >= 75) alert("Eligible");
else alert("Not Eligible");
</script>
</body>
</html>