<!DOCTYPE html>
<html>
<head>
<title>JavaScript Events Practice</title>

<style>
.a{
    width:120px;
    height:120px;
    background:red;
    margin:10px;
}
.b{
    height:150px;
    border:1px solid black;
    margin:10px;
}
.c{
    display:none;
    background:black;
    color:white;
    padding:5px;
}
</style>
</head>

<body>

// Button Click Alert
<button onclick="alert('Button Clicked')">Click Me</button>

// Page Load Message
<p>Open Console</p>

// Change Background Color
<button onclick="document.body.style.background='lightblue'">Change Color</button>

// Show Hide Paragraph
<p id="p1">Hello World</p>
<button onclick="p1.style.display='block'">Show</button>
<button onclick="p1.style.display='none'">Hide</button>

// Double Click Text Change
<div ondblclick="this.innerText='Text Changed'">Double Click Me</div>

// Double Click Font Size
<p id="p2" ondblclick="p2.style.fontSize='30px'">Double Click Me</p>

// Mouse Enter Leave Color
<div id="box1" class="a"></div>

// Tooltip Hover
<button id="btn1">Hover</button>
<p id="tip" class="c">Tooltip Message</p>

// Mouse X Y
<div id="area1" class="b"></div>

// Mouse Move Color
<div id="area2" class="b"></div>

// Right Click Disable
<p>Right Click Disabled</p>

// Key Press Display
<p>Press any key</p>

// Input Keyup Color
<input id="inp1">

// Form Validation
<form onsubmit="return checkForm()">
<input id="inp2">
<button>Submit</button>
</form>

// Dropdown Value
<select onchange="alert(this.value)">
<option>Apple</option>
<option>Orange</option>
</select>

// Dropdown Background
<select onchange="document.body.style.background=this.value">
<option value="white">White</option>
<option value="pink">Pink</option>
<option value="lightgreen">Green</option>
</select>

// Focus Blur
<input id="inp3">
<p id="msg"></p>

// Real Time Text
<input id="inp4">
<p id="out1"></p>

// Character Count
<input id="inp5">
<p id="out2"></p>

// Event Type Target
<button onclick="showEvent(event)">Click Event</button>

// Identify Button
<button onclick="identify(this)">One</button>
<button onclick="identify(this)">Two</button>

// Event Bubbling
<div onclick="alert('Parent Clicked')" style="padding:20px;border:1px solid">
<button onclick="alert('Child Clicked')">Child</button>
</div>

// Stop Bubbling
<div onclick="alert('Parent')" style="padding:20px;border:1px solid">
<button onclick="stopBubble(event)">Stop</button>
</div>

<script>

// Page Load
window.onload = function(){
    console.log("Page Loaded");
};

// Mouse Enter Leave
box1.onmouseenter = () => box1.style.background="green";
box1.onmouseleave = () => box1.style.background="red";

// Tooltip
btn1.onmouseover = () => tip.style.display="block";
btn1.onmouseout = () => tip.style.display="none";

// Mouse X Y
area1.onmousemove = function(e){
    console.log(e.clientX, e.clientY);
};

// Mouse Move Color
area2.onmousemove = () => {
    area2.style.background="rgb("+Math.random()*255+",100,150)";
};

// Disable Right Click
document.oncontextmenu = function(){
    alert("Right Click Disabled");
    return false;
};

// Key Press
document.onkeydown = function(e){
    console.log("Key Pressed:", e.key);
};

// Input Keyup
inp1.onkeyup = () => inp1.style.color="red";

// Form Check
function checkForm(){
    if(inp2.value==""){
        alert("Empty Input");
        return false;
    }
}

// Focus Blur
inp3.onfocus = () => {
    inp3.style.background="yellow";
    msg.innerText="Focused";
};
inp3.onblur = () => {
    inp3.style.background="white";
    msg.innerText="";
};

// Real Time Text
inp4.oninput = () => out1.innerText = inp4.value;

// Character Count
inp5.oninput = () => out2.innerText = inp5.value.length;

// Event Type Target
function showEvent(e){
    alert(e.type + " " + e.target.tagName);
}

// Identify Button
function identify(btn){
    alert(btn.innerText);
}

// Stop Bubbling
function stopBubble(e){
    e.stopPropagation();
    alert("Child Clicked Only");
}

</script>

</body>
</html>