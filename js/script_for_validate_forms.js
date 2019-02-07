function Check_FIO(input_date){
	var fio = document.getElementById('fio');
	var input = input_date.value;
	if(input.length!==0){
		MyReg_FIO=/^[A-zА-я]{1,}[\ ][A-zА-я]{1,}[\ ][A-zА-я]{1,}$/i;
		if(!(MyReg_FIO.test(input))) {
			OutErrorCaption(fio,"Введите ФИО в правильном формате (три слова, с одним пробелом между словами)","capt_fio");
			return false;
		}
	}
	else{
		OutErrorCaption(fio,"Поле не должно быть пустым","capt_fio");
		return false;
	}
	RemoveCaption(fio,"capt_fio");
	$("#fio").css("border", "2px solid green");
	return true;
}

function Check_Phone(input_date){
	var phone = document.getElementById('phone');
	var input = input_date.value;
	if(input.length!==0){
		MyReg_PHONE=/^[+][37][0-9]{10}$/;
		if(!(MyReg_PHONE.test(input))) {
			OutErrorCaption(phone,"Введите номер телефон в правильном формате (+7 или +3 и остальные 10 цифр номера телефона)","capt_phone");
			return false;
		}
	}
	else if(input.length===0){
		OutErrorCaption(phone,"Поле не должно быть пустым","capt_phone");
		return false;
	}
	RemoveCaption(phone,"capt_phone");
	$("#phone").css("border", "2px solid green");
	return true;
}

function Check_Email(input_date){
	var mail = document.getElementById('email');
	var input = input_date.value;
	if(input.length!==0){
		MyReg_Mail=/^[A-z0-9]{1,}[@][A-z]{1,}[.][A-z]{1,}$/;
		if(!(MyReg_Mail.test(input))) {
			OutErrorCaption(mail,"Введите email в правильном формате","capt_mail");
			return false;
		}
	}
	else if(input.length===0){
		OutErrorCaption(mail,"Поле не должно быть пустым","capt_mail");
		return false;
	}
	RemoveCaption(mail,"capt_mail");
	$("#email").css("border", "2px solid green");
	return true;
}

function Check_Text(input_date){
	var comment = document.getElementById('comment');
	var input = input_date.value;
	if(input.length===0){
		OutErrorCaption(comment,"Поле не должно быть пустым","capt_comment");
		return false;
	}
	RemoveCaption(comment,"capt_comment");
	$("#comment").css("border", "2px solid green");
	return true;
}

function OutErrorCaption(obj,text,id_capt){
	if(document.getElementById(id_capt)!=null){
		caption = document.getElementById(id_capt);
		caption.textContent=text;
	}
	else{
		var caption = document.createElement('span');
		var caption_text = document.createTextNode(text);
		caption.appendChild(caption_text);
		caption.id=id_capt;
		obj.parentNode.appendChild(caption);
	}
	$(obj).css("border", "2px solid red");
}

function RemoveCaption(obj,id_capt){
	if(document.getElementById(id_capt)!=null){
		caption = document.getElementById(id_capt);
		obj.parentNode.removeChild(caption);
	}
}

function Check()
{
    var fio = document.getElementById('fio');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
	var comment = document.getElementById('comment');
	var sub = document.getElementById('submit');
	fio.style.border === "2px solid green"
    && phone.style.border === "2px solid green"
    && email.style.border === "2px solid green"
    && comment.style.border === "2px solid green"
	&& (document.forms.commentary.checkbox.checked===true)
	? sub.disabled = false : sub.disabled = true;
}

