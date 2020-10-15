function getStudent(){
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if(this.readyState==4&& this.status==200){

let table = document.getElementById('table_of_students');
 let responses = JSON.parse(this.responseText);

 for (var i =0 ; i<responses.length;i++){
	var row = table.insertRow(i+1);
	row.id=responses[i].id
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);

cell1.innerHTML = responses[i].first_name;
cell2.innerHTML=responses[i].last_name;
cell3.innerHTML=responses[i].gender;
cell4.innerHTML=responses[i].mobile;
cell5.innerHTML = responses[i].first_name.split('').reverse().join('')+" "+responses[i].last_name.split('').reverse().join('');
 }
	}
};

xhttp.open("GET","http://localhost:3000/students",true);
xhttp.send();

}

getStudent();

///////////////////////////////////////////////////

////////////////////////////////////////////////////
function getclass(){
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState==4&& this.status==200){
	
	let box = document.getElementsByClassName('box');
	 let responses = JSON.parse(this.responseText);
	
	 for (var i =0 ; i<responses.length;i++){
		var option = document.createElement("option");
		option.text = responses[i].class_name;
		option.value = responses[i].id;
 box[0].appendChild(option);

	
	 }
		}
	};
	xhttp.open("GET","http://localhost:3000/student_classes",true);
	xhttp.send();
}

getclass();

//////////////////////////////////


