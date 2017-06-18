var EventUtil = {
	addHandler: function(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if(event.preventDefault) {
			event.preventDefault();
		} else {
			event.preventDefault = false;
		}
	},
	removeHandler: function(element, type, handler) {
		if(element.removeLister) {
			element.removeLister(type, hander, false);
		} else if(element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	stopPropagation: function(event) {
		if(event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = ture;
		}
	},
	getRelatedTatget: function(event) {
		if(event.relatedTarget) {
			return event.relatedTarget;
		} else if(event.toElement) {
			return event.toElement;
		} else if(event.fromElement) {
			return event.fromElement;
		} else {
			return null;
		}
	}
};
(function(){
	var Button=document.getElementById("button");
	var Input=document.getElementById("aqi-input");
	var out=document.getElementById("aqi-display");
	EventUtil.addHandler(Button,"click",function(event){
	    var text=Input.value;
	    out.innerHTML=text;
	})
})();
