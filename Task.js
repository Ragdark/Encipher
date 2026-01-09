<!DOCTYPE html>
<html>
<head>
<title>JavaScript Timer & Events</title>

<style>
#box{
    height:1500px;
}
#topBtn{
    position:fixed;
    bottom:20px;
    right:20px;
    display:none;
}
li{
    cursor:pointer;
}
</style>
</head>

<body>

<h2>1. Hello after 3 seconds</h2>

<h2>2. Change background after 5 seconds</h2>
<button id="btn1">Change Color</button>

<h2>3. Current time every second</h2>

<h2>4. Counter every second</h2>
<p id="count">0</p>

<h2>5. Alert after 10 seconds (Cancel)</h2>
<button id="cancel1">Cancel Alert</button>

<h2>6. Message after 5 seconds unless Cancel</h2>
<button id="cancel2">Cancel Message</button>
<p id="msg"></p>

<h2>7. Print numbers every second (Stop after 10)</h2>

<h2>8. Start / Stop Timer</h2>
<button id="start">Start</button>
<button id="stop">Stop</button>
<p id="run">0</p>

<h2>9. Click only selected li</h2>
<ul>
<li>Apple</li>
<li>Orange</li>
<li>Mango</li>
</ul>

<h2>10. Window Resize</h2>
<p id="view"></p>

<h2>11. Window Width & Height</h2>
<div id="size"></div>

<h2>12. Back to Top Button</h2>
<div id="box"></div>
<button id="topBtn" onclick="window.scrollTo(0,0)">Top</button>

<h2>13. Change text after DOM loaded</h2>
<p id="text">Loading...</p>

<h2>14. Alert after images loaded</h2>
<img src="https://via.placeholder.com/150">
<img src="https://via.placeholder.com/150">

<script>

// 1. Hello after 3 seconds
setTimeout(function(){
    alert("Hello after 3 seconds");
},3000);


// 2. Button changes background after 5 seconds
btn1.onclick = function(){
    setTimeout(function(){
        document.body.style.background = "lightblue";
    },5000);
};


// 3. Print current time every second
setInterval(function(){
    console.log(new Date().toLocaleTimeString());
},1000);


// 4. Counter increment every second
let c = 0;
setInterval(function(){
    c++;
    count.innerText = c;
},1000);


// 5. Alert after 10 seconds and cancel
let t1 = setTimeout(function(){
    alert("10 Seconds Passed");
},10000);

cancel1.onclick = function(){
    clearTimeout(t1);
};


// 6. Message after 5 seconds unless cancelled
let t2 = setTimeout(function(){
    msg.innerText = "Message Displayed";
},5000);

cancel2.onclick = function(){
    clearTimeout(t2);
};


// 7. Print numbers every second and stop after 10 seconds
let n = 1;
let t3 = setInterval(function(){
    console.log(n);
    n++;
    if(n > 10){
        clearInterval(t3);
    }
},1000);


// 8. Start and Stop Buttons
let num = 0;
let timer;

start.onclick = function(){
    timer = setInterval(function(){
        num++;
        run.innerText = num;
    },1000);
};

stop.onclick = function(){
    clearInterval(timer);
};


// 9. Change only clicked li color
let items = document.querySelectorAll("li");
items.forEach(function(i){
    i.onclick = function(){
        this.style.background = "yellow";
    };
});


// 10. Detect window resize
window.onresize = function(){
    if(window.innerWidth < 600){
        view.innerText = "Mobile View";
    } else {
        view.innerText = "Desktop View";
    }
};


// 11. Show window width and height
setInterval(function(){
    size.innerText = "Width: " + window.innerWidth + " Height: " + window.innerHeight;
},500);


// 12. Back to Top button
window.onscroll = function(){
    if(window.scrollY > 200){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};


// 13. Change text after DOM loaded
document.addEventListener("DOMContentLoaded", function(){
    text.innerText = "DOM Loaded Successfully";
});


// 14. Alert after all images loaded
window.onload = function(){
    alert("All Images Loaded");
};

</script>

</body>
</html>