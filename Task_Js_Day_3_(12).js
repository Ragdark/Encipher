<!DOCTYPE html>
<html>
<body class="a">
<script>
let s = prompt("Enter value");
let r = "";

for (let i = s.length - 1; i >= 0; i--) {
    r += s[i];
}
if (s == r) alert("Palindrome");
else alert("Not Palindrome");
</script>
</body>
</html>