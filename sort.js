var arr = [10,9,19,8,23,7,3];
document.querySelector(".left").innerHTML = arr.toString();
function bubbleSort(){
	for (var i = arr.length - 1; i >= 1; i--) {
		for(var j= 0;j<i;j++){
			if(arr[j]>arr[j+1]){
				swap(arr,j,j+1);
			}
		}
	}
	document.querySelector(".right").innerHTML = arr.toString();
}
function swap(arr,i,j){
	var temp = arr[i];
	arr[i]=arr[j];
	arr[j] = temp;
}
EventUtil.addEvent(document.querySelector(".bubbleSort"),"click",bubbleSort);