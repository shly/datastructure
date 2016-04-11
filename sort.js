var arr = [03,13,19,20,23,26,03];
document.querySelector(".left").innerHTML = arr.toString();
function bubbleSort(arr){
	for (var i = arr.length - 1; i >= 1; i--) {
		for(var j= 0;j<i;j++){
			if(arr[j]>arr[j+1]){
				swap(arr,j,j+1);
			}
		}
	}

}
function swap(arr,i,j){
	var temp = arr[i];
	arr[i]=arr[j];
	arr[j] = temp;
}