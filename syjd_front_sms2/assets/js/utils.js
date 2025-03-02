const config = {
	// baseUrl:'http://192.168.3.38:8080'
	baseUrl:'https://transhoutai.youhavestock.com/prod-api'//短信1
	// baseUrl:'https://transhoutaitwo.havenicestock.com/prod-api'//短信2
}
function getUrlParams(){
	// 获取完整路径
	const path = window.location.pathname;
	console.log(path)
	// 分割路径，获取最后一部分
	const parts = path.split('/');
	const endString = path.endsWith('/')
	const part = endString?parts[parts.length - 2]:parts[parts.length - 1];
	return part;
}