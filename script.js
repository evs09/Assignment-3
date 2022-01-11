//#1
document.getElementById("container");
//#2
document.querySelector("section");
//#3
document.getElementsByClassName("second");
//#4
document.querySelector("ol > .third");
//#5
document.getElementById("container").innerHTML = "<p>Hello!</p>";
//#6
document.getElementsByClassName("footer").className += "main";
//#7
document.getElementsByClassName("main").className = "";
//#8
let liNode = document.createElement("li");
//#9
let text = document.createTextNode("four");
liNode.appendChild(text);
//#10
document.querySelector("ul").appendChild(liNode);

//#11
let list = document.querySelector("ul");
let items = list.getElementsByTagName("li");
for(let i = 0; i < items.length; i++){
	items[i].style.backgroundColor = "green";
}

//#12
let rem = document.getElementsByClassName("footer")
rem[0].remove();

//Assignment 4 script
//#1
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let fightp = document.getElementById("fight-text");

btn1.addEventListener("click", function(){
	fightp.innerHTML = "I'm right";

});

btn2.addEventListener("click", function(){
	fightp.innerHTML = "No, I'm right";

});


//#2
let el = document.getElementById("hoverp");

el.addEventListener("mouseover", function(){
	alert("Hey, I told you not to hover over me!");

});

//#3
let submit = document.getElementById("submit-btn");

submit.addEventListener("click", function(){
	let pw = document.getElementById("pw").value;
	if(pw == "12345678"){
		document.getElementById("formText").innerHTML = "Logged In";
	}
	else{
		alert("Incorrect Password");
	}
})