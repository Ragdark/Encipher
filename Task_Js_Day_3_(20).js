<!DOCTYPE html>
<html>
<body class="a">
<script>
let u = "admin";
let p = "1234";
let success = false;

for (let i = 1; i <= 3; i++) {
    let u1 = prompt("Username");
    let p1 = prompt("Password");

    if (u1 == u && p1 == p) {
        alert("Login Successful");
        success = true;
        break;
    }
}
if (!success) alert("Account Locked");
</script>
</body>
</html>