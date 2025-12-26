<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Java Script Practice</title>
</head>
<body>

<script>
    let a = "10";
    let b = 5;

    let addition = Number(a) + Number(b);
    let concat = a + b;

    console.log(addition);
    console.log(typeof addition);

    console.log(concat);
    console.log(typeof concat);


    
    let x = 10;
    let y = "10";

    console.log(x == y);  
    console.log(x === y);  


 
    let num = 15;

    if (num > 0) {
        console.log("positive");
    } else if (num < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }


    
    let p = 10;
    let q = 20;
    let r = "30";

    let s = p + q + r;
    console.log(s);
    console.log(typeof s);


   
    let value = true;
    let res = Number(value) + 5;

    console.log(res);
    console.log(typeof res);


    
    let d = 7;
    let e = 3;

    console.log(d > e);
    console.log(d - e > 0);
    console.log(d / e > 1);


  
    let marks = "85";
    let pass = Number(marks) >= 40;

    console.log(pass);


    
    let age = 20;
    let hasID = false;

    let enter = age >= 18 && hasID === true;
    console.log(enter);



    let count;

    console.log(count);
    console.log(typeof count);

    count = 10;
    console.log(count);
    console.log(typeof count);


 
    let num1 = "5";
    let num2 = "2";

    let con = num1 + num2;
    let add = Number(num1) + Number(num2);
    let sub = num1 - num2;
    let mul = num1 * num2;

    console.log(con, typeof con);
    console.log(add, typeof add);
    console.log(sub, typeof sub);
    console.log(mul, typeof mul);
</script>

</body>
</html>