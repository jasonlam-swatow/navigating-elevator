// 根據class名獲取元素
function getElementsByClassName(fatherId, tagName, className){
	node = fatherId && document.getElementById(fatherId) || document;
	tagName = tagName || "*";
	className = className.split(" ");
	var classNameLength = className.length;
	for(var i=0, j=classNameLength; i<j; i++){
		// 匹配類名的正則
		className[i]= new RegExp("(^|\\s)" + className[i].replace(/\-/g, "\\-") + "(\\s|$)"); 
	}
	var elements = node.getElementsByTagName(tagName);
	var result = [];
	for(var i=0, j=elements.length, k=0; i<j; i++){
		var element = elements[i];
		while(className[k++].test(element.className)){
			if(k == classNameLength){
				result[result.length] = element;
				break;
			}	
		}
		k = 0;
	}
	return result;
}

// 判斷有無指定class名的方法
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// 移除class名方法
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
		while (newClass.indexOf(' ' + className + ' ') >= 0) {
			newClass = newClass.replace(' ' + className + ' ', ' ');
		}
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	}
}

// 添加class名方法
function addClass(elem, className) {
	if (!hasClass(elem, className)) {
		elem.className += ' ' + className;
	}
}


window.onload = function() {

	var topBtn = document.getElementById('top');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll = function() {
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		var elevators = document.getElementById('elevator').getElementsByTagName('a');
		var items = getElementsByClassName('content', 'div', 'item');
		var currentId = '';
		
		for (var i=0; i<items.length; i++) {
			var _item = items[i];
			var _itemTop = _item.offsetTop;
			// 當item頂端離視口頂端200px時（爲優化起見）
			if (top > _itemTop - 200) {
				currentId = _item.id;
			} else {
				break;
			}
		}
		
		if (currentId) {
			for (var i=0; i<elevators.length; i++) {
				var _elevator = elevators[i];
				var _href = _elevator.href.split('#');
				if (_href[_href.length - 1] != currentId) {
					removeClass(_elevator, 'current');
				} else {
					addClass(_elevator, 'current');
				}
			}
		}

		if (top >= clientHeight) {
			topBtn.style.display = 'block';
		} else {
			topBtn.style.display = 'none';
		}

	}

}