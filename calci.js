function insert(n) {
	document.cal.result.value = document.cal.result.value + n;
}
function erase() {
	var v = document.cal.result.value;
	document.cal.result.value = v.substring(0, v.length - 1);
}
function equal() {
	var e = document.cal.result.value;
	if (
		e.substring(e.length - 1, e.length) == "+" ||
		e.substring(e.length - 1, e.length) == "-" ||
		e.substring(e.length - 1, e.length) == "/" ||
		e.substring(e.length - 1, e.length) == "*" ||
        e.substring(e.length - 1, e.length) =="("||
        e.substring(e.length - 1, e.length) ==")"
	) {
		document.cal.result.value = "Syntax Error";
	} else {
		document.cal.result.value = eval(e);
	}
}
