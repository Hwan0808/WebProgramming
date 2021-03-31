function warning() {
	alert("검색어를 입력해주세요!");
}

function down() {
	this.style.backgroundColor="blue";
}

function timer(){
 
 var now = new Date();
 
 var year = now.getFullYear(); 
 var month = now.getMonth();
 var day = now.getDay(); 
 var hour = now.getHours(); 
 var minute = now.getMinutes(); 
 var second = now.getSeconds(); 
 
 document.getElementById("clock").innerHTML = year+"년 "+ month+"월 "+day+"일 "+hour+":"+minute+":"+second
 
 setTimeout("timer()", 1000);

}
