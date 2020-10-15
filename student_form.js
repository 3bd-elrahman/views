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