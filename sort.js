var arr = [10,9,19,8,23,7,3];
document.querySelector(".left").innerHTML = arr.toString();
function bubbleSort(){
	for (var i = arr.length-1; i > 0; i--) {
		for(var j= 0;j<i;j++){
			if(arr[j]>arr[j+1]){
				swap(arr,j,j+1);
			}
		}
	}
	document.querySelector(".right").innerHTML = "冒泡排序结果： "+arr.toString();
}
function selectSort(){
	for (var i = 0; i < arr.length; i++) {
		var min = i;
		for(var j= i+1;j<arr.length;j++){
			if(arr[min]>arr[j]){
				min = j;
			}
		}
		swap(arr,i,min);
	}
	document.querySelector(".right").innerHTML = "选择排序结果： "+arr.toString();
}
function insertSort(){
	for (var i = 1; i < arr.length; i++) {
		var j = i;
		var temp = arr[i];
		while(j>0&&temp<arr[j-1]){
			arr[j]=arr[--j];
		}
		arr[j] = temp;
	}
	document.querySelector(".right").innerHTML = "插入排序结果： "+arr.toString();
}
function subQuikSort(arr,start,end){
	if(end>start){
		var temp = arr[start],
		    i = start,
		    j = end+1;
		while(true){
			while(i<end&&arr[++i]<temp);
			while(j>start&&arr[--j]>temp);
			if(i<j){
				swap(arr,i,j);
			}else{
				break;
			}
		}
		swap(arr,start,j);
		subQuikSort(arr,start,j-1);
		subQuikSort(arr,j+1,end);
	}
	document.querySelector(".right").innerHTML = "快速排序结果： "+arr.toString();
}
function quikSort(){
	return subQuikSort(arr,0,arr.length-1);
}
function swap(arr,i,j){
	var temp = arr[i];
	arr[i]=arr[j];
	arr[j] = temp;
}

EventUtil.addEvent(document.querySelector(".bubbleSort"),"click",bubbleSort);
EventUtil.addEvent(document.querySelector(".selectSort"),"click",selectSort);
EventUtil.addEvent(document.querySelector(".insertSort"),"click",insertSort);
EventUtil.addEvent(document.querySelector(".quikSort"),"click",quikSort);