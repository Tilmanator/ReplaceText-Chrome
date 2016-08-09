
var prev = localStorage.words;

// Case-sensitivity
// Empty string is evaluated to false, since storage stores anything as strings this is used
if(localStorage.sensitive==undefined)
	{localStorage.sensitive="";}
if(document.getElementById('case')!=null){
	document.getElementById('case').checked = localStorage.sensitive;
	document.getElementById('case').addEventListener('change', clicked);
}

// The array of words
if(prev==undefined){
	prev=[];}
else{
	prev=prev.split(",");
}

if(document.getElementById("previous")!=null){
	display();
}

if(document.getElementById('save')!=null){
document.getElementById('save').addEventListener('click',
    save_words);}

function display(){
	document.getElementById("previous").innerHTML ="";
	for(var i=0;i<prev.length;i+=2){
		var element = document.createElement("div");
		element.setAttribute("style", "display:inline;");
		element.innerHTML="<b>"+prev[i] + "</b> being replaced with&nbsp<b>"+prev[i+1]+"</b> ";
		document.getElementById("previous").appendChild(element);
		ele = document.createElement("input");
		ele.setAttribute("type", "button");
		ele.setAttribute("value", "Remove");
		ele.setAttribute("name", prev[i]);
		document.getElementById("previous").appendChild(ele);
		var txt = document.createElement("h");
		txt.setAttribute("style", "display:block;");
		document.getElementById("previous").appendChild(txt);

		ele.addEventListener('click', function(){var index = prev.indexOf(this.getAttribute("name"));prev.splice(index,2); console.log(prev);display();localStorage.words=prev;	
		});
	}
}

function clicked(){
	if(document.getElementById('case').checked)
		localStorage.sensitive="t";
	else
		localStorage.sensitive="";
}

function save_words(){
	var s = document.getElementById('search').value;
	var r = document.getElementById('replaced').value;

	prev.push(s,r);
	localStorage.words=prev;
	display();
}

function add_button(word, n){
	var element = document.createElement("input");
    element.setAttribute("type", "button");
    //element.setAttribute("value", "Remove");
    element.setAttribute("name", "remove");
    element.innerHTML = "<br>";
    var index = prev.indexOf(word);
    element.addEventListener('onclick', rem(index));
    document.getElementById("previous").appendChild(element);
  	console.log("WTFFFF");
}