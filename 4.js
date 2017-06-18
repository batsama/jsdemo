function addEvent(element, event, listener) {
	if(element.addEventListener) {
		element.addEventListener(event, listener, false);
	} else if(element.attachEvent) {
		element.attachEvent('on' + event, listener, false);
	} else {
		element['on' + event] = listener;
	}
} //跨浏览器添加事件
function each(arr, fn) {
	for(var cur = 0; cur < arr.length; cur++) {
		fn(arr[cur], cur);
	}
}   //从0到i 实现fun(arr[i],i);

window.onload = function() {
	var container = document.getElementById('container');   //获取输出框对象
	var buttonList = document.getElementsByTagName('input');  //获取按钮对象列表

	var queue = {  //点击事件对象
		str: [],                                  
    //模拟数组
		leftPush: function(num) {
			this.str.unshift(num);
			this.paint();
		},
   //左添加
		rightPush: function(num) {
			this.str.push(num);
			this.paint();
		},
  //右添加
		isEmpty: function() {
			return(this.str.length == 0);

		},
   //检测是否为空
		leftPop: function() {
			if(!this.isEmpty()) {
				alert(this.str.shift());   //检验是否为空
				this.paint();
			} else {
				alert("队列以空");
			}
		},
   //左去除
		rightPop: function() {
			if(!this.isEmpty()) {
				alert(this.str.pop());   
				this.paint();
			} else {
				alert("队列以空");
			}
		},
   //右去除
		paint: function() {
			var str = "";
			each(this.str, function(item) {     
				str += ('<div>' + parseInt(item) + '</div>')
			});
			container.innerHTML = str;
			addDivDelEvent();
		},
    //每次改变都要重新打印DOM结构
		deleteID: function(id) {
			console.log(id);
			this.str.splice(id, 1);
			this.paint();     //每次重新打印，都要重新绑定事件
		}
   //删除第几个
	}

	function addDivDelEvent() {
		for(var cur = 0; cur < container.childNodes.length; cur++) {

			addEvent( container.childNodes[cur], "click", function(cur) {
				return function() {
					return queue.deleteID(cur)
				};
			}(cur));
		}
	}
	
	
	addEvent(buttonList[1], "click", function() {
		var input = buttonList[0].value;
		if((/^[0-9]+$/).test(input)) {    //正则检测
			queue.leftPush(input);   
		} else {
			alert("Please enter an interger!");
		}
	});     //绑定事件到按钮1
	addEvent(buttonList[2], "click", function() {
		var input = buttonList[0].value;
		if((/^[0-9]+$/).test(input)) {
			queue.rightPush(input);
		} else {
			alert("Please enter an interger!");
		}
	});     //绑定事件到按钮2
	addEvent(buttonList[3], "click", function() {
		queue.leftPop()             
	});
	addEvent(buttonList[4], "click", function() {
		queue.rightPop()
	});

}