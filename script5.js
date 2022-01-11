//to match existing columns w rows
let colCount = 0;

//Add rows
let rowBtn = document.getElementById("row-btn");
tbl = document.getElementById("tble");

rowBtn.addEventListener("click", function(){
	let rowNode = document.createElement("tr");
	rowNode.className = "row-5";
	tbl.appendChild(rowNode);

	if(colCount > 0){
		for(let i = 0; i < colCount; i++){
			let colNode = document.createElement("td");
			colNode.className = "col-5";
			rowNode.appendChild(colNode);
		}
	}


})

//Add columns
let colBtn = document.getElementById("col-btn");
colBtn.addEventListener("click", function(){
	let rws = document.getElementsByTagName("tr");

	for(let i = 0; i < rws.length; i++){
		let colNode = document.createElement("td");
		colNode.className = "col-5";

		rws[i].appendChild(colNode);

	}

	colCount++;
})