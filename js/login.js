var user = document.getElementById("user");
var password = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
var login = document.getElementById("login");
var hello = document.getElementById("hello");

eyeIcon.onclick = function(){
	if(password.type == "password"){
		password.type = "text";
		eye.style.display = "block";
		eyeSlash.style.display = "none";

	} else {
		password.type = "password";
		eye.style.display = "none";
		eyeSlash.style.display = "block";
	}
}

function loginClick(){	
	var name = document.querySelector("#user-name");
	if((user.value == '' || checkName(user.value)) && (password.value == '' || checkPasswork(password.value))) 	{
		name.innerHTML = user.value;
		login.style.display = 'none';
		hello.style.display = 'block';
	}
	else {
		alert('Họ Tên hoặc Mật khẩu không hợp lệ.');

	}
}

function logoutClick(){
	login.style.display = 'block';
	hello.style.display = 'none';
}

function checkName(str){
	var format = /\s\s|^\s|\s$|[^A-Za-z0-9_\s]/;
	if (format.test(str)){
		return false;
	}
	return true;
}
function checkPasswork(str){
	var format = /^[a-z0-9@]+$/i;
	return format.test(str);
	
}