<!DOCTYPE html>
<html>
<body class="a">
<script>
function greet() {
    let h = prompt("Enter current hour (0-23)");
    if (h < 12) alert("Good Morning");
    else if (h < 18) alert("Good Afternoon");
    else alert("Good Evening");
}
greet();
</script>
</body>
</html>