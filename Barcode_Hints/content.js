if (document.title=='Edit Item'){
	inp=document.getElementsByName('UDFIELD_2')[0]
	inp.placeholder=inp.value
	inp.value=''
	elm=document.createElement('span')
	elm.textContent=inp.placeholder
	inp.parentElement.appendChild(elm)

	inp=document.getElementsByName('UDFIELD_18')[0]
	inp.placeholder=inp.value
	inp.value=''
	elm=document.createElement('span')
	elm.textContent=inp.placeholder
	inp.parentElement.appendChild(elm)

	old=document.getElementsByName('cataloging_servlet_AssetItemEditForm')[0].onsubmit
	document.getElementsByName('cataloging_servlet_AssetItemEditForm')[0].onsubmit=function onsubmit(event){
		if (document.getElementsByName('UDFIELD_2')[0].value.length==0){
			document.getElementsByName('UDFIELD_2')[0].value = document.getElementsByName('UDFIELD_2')[0].placeholder;
		}
		if (document.getElementsByName('UDFIELD_18')[0].value.length==0){
			document.getElementsByName('UDFIELD_18')[0].value = document.getElementsByName('UDFIELD_18')[0].placeholder;
		}
		return old
	}
}
