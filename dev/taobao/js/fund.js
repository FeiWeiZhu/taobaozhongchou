var num = 123;
var string = "str";
var boolean = false;
var _null = null;
var _undefined = undefined;
var _function = function(){};
function func(){}
var obj = {};
var _obj = function(){
	this.a = 123;
};
var __obj = new Object();
console.log(__obj)
if(num){
	console.log(num);
}
switch(num){
	case "123":
		console.log(num);
		break;
	case 123:
		console.log(num);
		break;
}
while(num){
	num = 0;
	console.log(num);
}
for(;!num;){
	num = 1;
	console.log(num);
}
console.log(num.toString());
console.log(string.replace(/t/, "123"));
console.log(string.indexOf("r"));
console.log(string.search(/r/));
console.log(typeof _obj);
console.log(!0 && (3 || 2));
//IE7, IE8不支持
// console.log(document.getElementsByClassName("hot")[0]);
//IE7不支持
// console.log(document.querySelector(".hot"));
var body = document.body;
var a = document.getElementById("home");
a.innerHTML = 123;
a.innerText = "首页";
document.getElementsByTagName("div")[0].id = "firstDiv";
document.getElementsByTagName("div")[0].className = "firstDiv";
//IE7, IE8, IE9均不支持
console.log(document.getElementsByTagName("div")[0].classList);
var ipt = document.createElement("input");
body.appendChild(ipt);
ipt.value = "值";
//IE9及以上，Chrome，Firefox不能用getAttribute获取value
//IE7，IE8支持用getAttribute获取value
console.log(ipt.getAttribute("value"));
console.log(a.getAttribute("id"));
console.log(ipt.value);
//文档碎片
var fragment = document.createDocumentFragment();
var arr = new Array(10);
for(var i = 0, arrLen = arr.length; i < arrLen; i++){
	fragment.appendChild(document.createElement("div"));
}
body.appendChild(fragment);
var fixedNav = document.getElementById("fixedNav");
console.log(fixedNav.nodeType);
console.log(fixedNav.attributes[0].nodeType);
console.log(fixedNav.childNodes[0].nodeType);
// console.log(document.doctype.nodeType);
console.log(fragment.nodeType);
body.onclick = function(){
	console.log(123);
};
//IE7, IE8不支持
// body.addEventListener("click", function(){
// 	console.log(233);
// }, 0);
//原生Ajax兼容性
//IE专属ajax对象
// console.log(ActiveXObject);
//IE6不支持ajax对象XMLHttpRequest

//windows XP 的IE浏览器不支持console

//jQuery1.*版本支持至IE6，jQuery2.*+版本不支持IE8及以下
//Canvas对象不支持IE8及以下
//css3不支持IE8及以下