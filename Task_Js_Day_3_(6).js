<!DOCTYPE html>
<html>
<body class="a">
<script>
let s = prompt("Enter string");
let c = 0;

for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u")
        c++;
}
alert("Vowels = " + c);
</script>
</body>
</html>