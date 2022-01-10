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