<!DOCTYPE html>
<html>
<head>
    <title>JavaScript String Programs</title>
</head>
<body>

<script>

// 1. Username Formatter
let name = prompt("Enter username");
let formatted = name.trim().toLowerCase();
console.log("Formatted Username:", formatted);


// 2. Email Validation (Basic)
let email = prompt("Enter email");
if (email.includes("@") && email.includes(".")) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}


// 3. Character Count (excluding spaces)
let s1 = prompt("Enter sentence");
let charCount = 0;
for (let i = 0; i < s1.length; i++) {
    if (s1[i] != " ") {
        charCount++;
    }
}
console.log("Characters (no spaces):", charCount);


// 4. Word Counter
let para = prompt("Enter paragraph");
let words = para.trim().split(" ");
console.log("Word Count:", words.length);


// 5. First and Last Character Finder
let s2 = prompt("Enter string");
if (s2.length > 0) {
    console.log("First:", s2[0]);
    console.log("Last:", s2[s2.length - 1]);
}


// 6. Replace Word in Sentence
let sen1 = prompt("Enter sentence");
let oldWord = prompt("Word to replace");
let newWord = prompt("New word");
console.log(sen1.replace(oldWord, newWord));


// 7. String Length Validator
let txt = prompt("Enter text");
if (txt.length < 5 || txt.length > 20) {
    console.log("Invalid Length");
} else {
    console.log("Accepted");
}


// 8. Count Uppercase Letters
let s3 = prompt("Enter string");
let upperCount = 0;
for (let i = 0; i < s3.length; i++) {
    if (s3[i] >= "A" && s3[i] <= "Z") {
        upperCount++;
    }
}
console.log("Uppercase Count:", upperCount);


// 9. Remove Special Characters
let s4 = prompt("Enter string");
let clean = "";
for (let i = 0; i < s4.length; i++) {
    if (
        (s4[i] >= "a" && s4[i] <= "z") ||
        (s4[i] >= "A" && s4[i] <= "Z") ||
        (s4[i] >= "0" && s4[i] <= "9")
    ) {
        clean += s4[i];
    }
}
console.log("Clean String:", clean);


// 10. Check Starts With / Ends With
let s5 = prompt("Enter string");
console.log("Starts with Hello:", s5.startsWith("Hello"));
console.log("Ends with World:", s5.endsWith("World"));


// 11. Find Longest Word
let sen2 = prompt("Enter sentence");
let arr1 = sen2.split(" ");
let longest = "";
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length > longest.length) {
        longest = arr1[i];
    }
}
console.log("Longest Word:", longest);


// 12. Convert Sentence to Title Case
let s6 = prompt("Enter sentence");
let arr2 = s6.toLowerCase().split(" ");
let title = "";
for (let i = 0; i < arr2.length; i++) {
    title += arr2[i][0].toUpperCase() + arr2[i].slice(1) + " ";
}
console.log("Title Case:", title.trim());


// 13. Mask Mobile Number
let mobile = prompt("Enter mobile number");
console.log("Masked Number:", "XXXXXX" + mobile.slice(-4));


// 14. Find Repeated Characters
let s7 = prompt("Enter string");
let repeated = "";
for (let i = 0; i < s7.length; i++) {
    for (let j = i + 1; j < s7.length; j++) {
        if (s7[i] == s7[j] && !repeated.includes(s7[i])) {
            repeated += s7[i] + " ";
        }
    }
}
console.log("Repeated Characters:", repeated);


// 15. Count Vowels and Consonants
let s8 = prompt("Enter string").toLowerCase();
let v = 0;
let c = 0;
for (let i = 0; i < s8.length; i++) {
    if (s8[i] >= "a" && s8[i] <= "z") {
        if ("aeiou".includes(s8[i])) {
            v++;
        } else {
            c++;
        }
    }
}
console.log("Vowels:", v);
console.log("Consonants:", c);


// 16. Remove Duplicate Words
let sen3 = prompt("Enter sentence");
let arr3 = sen3.split(" ");
let unique = [];
for (let i = 0; i < arr3.length; i++) {
    if (!unique.includes(arr3[i])) {
        unique.push(arr3[i]);
    }
}
console.log("Without Duplicates:", unique.join(" "));


// 17. Check Anagram (Basic)
let a1 = prompt("Enter first string").split("").sort().join("");
let a2 = prompt("Enter second string").split("").sort().join("");
if (a1 == a2) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}


// 18. Trim and Compare Strings
let t1 = prompt("Enter first string").trim();
let t2 = prompt("Enter second string").trim();
console.log("Equal:", t1 == t2);


// 19. Extract Numbers from String
let mix = prompt("Enter mixed string");
let nums = "";
for (let i = 0; i < mix.length; i++) {
    if (mix[i] >= "0" && mix[i] <= "9") {
        nums += mix[i];
    }
}
console.log("Extracted Numbers:", nums);


// 20. Password Strength Checker
let pass = prompt("Enter password");
let hasUpper = false;
let hasNum = false;

for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= "A" && pass[i] <= "Z") {
        hasUpper = true;
    }
    if (pass[i] >= "0" && pass[i] <= "9") {
        hasNum = true;
    }
}

if (pass.length >= 8 && hasUpper && hasNum) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}

</script>

</body>
</html>