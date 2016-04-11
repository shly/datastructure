var EventUtil = {
  addEvent:function(ele,event,func){
    if(ele.addEventListener){
      ele.addEventListener(event,func,false);
    }else if(ele.attachEvent){
      ele.attachEvent("on"+event,fun);
    }else{
      ele["on"+event] = func;
    }
  },
  removeEvent:function(ele,event,func){
  	if(ele.removeEventListener){
      ele.removeEventListener(event,func,false);
    }else if(ele.detachEvent){
      ele.detachEvent("on"+event,fun);
    }else{
      ele["on"+event] = null;
    }
  }
};