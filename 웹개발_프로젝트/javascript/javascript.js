function warning() {
	alert("검색어를 입력해주세요!");
}

function down() {
	this.style.backgroundColor="blue";
}

function timer(){
 
 var now = new Date();
 
 var year = now.getFullYear(); 
 var month = now.getMonth() + 1;
 var day = now.getDate(); 
 var hour = now.getHours(); 
 var minute = now.getMinutes(); 
 var second = now.getSeconds(); 
 
 document.getElementById("clock").innerHTML = year+"년 "+ month+"월 "+day+"일 "+hour+":"+minute+":"+second
 
 setTimeout("timer()", 1000);

}
