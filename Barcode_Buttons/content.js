if ((document.title=='Item Status'||document.title=='Edit Item')){
var maxTimeDelta=50
var lastTime=-maxTimeDelta
var barFuncs={}
var watchedInputs=[]
function watchInput(inputElm){
	watchedInputs.push(inputElm)
}

document.addEventListener("keypress", function onEvent(event) {	
	let timeDelta=event.timeStamp-lastTime
	if (event.key === "`" ) {
		for (let i=0; i<watchedInputs.length;i++){
			watchedInputs[i].disabled=true

		}
		lastTime=event.timeStamp
		
	}else if(timeDelta<maxTimeDelta){
		if (event.key in barFuncs){
			barFuncs[event.key]()
		}
	}
	else{
		
		for (let i=0; i<watchedInputs.length;i++){
			watchedInputs[i].disabled=false
		}
	}
	
})
function create_barcode(key,src,func,width='120px'){
	barFuncs[key]=func
	var barcode=document.createElement('img')
	barcode.style.width='120px'
	barcode.src=chrome.runtime.getURL('Barcode_Buttons/'+src)
	return barcode
}


if (document.title=='Item Status'){
	watchInput(document.getElementsByName('searchString')[0])
	barcode=create_barcode("e","e.png",()=>{
		document.getElementById('copyactions').getElementsByTagName('a')[0].click()
	})
	
	row=document.createElement('tr')
	row.appendChild(barcode)
	document.getElementById('copyactions').firstElementChild.appendChild(row)
	//removes weird space
	document.getElementById('copyactions').firstElementChild.firstElementChild.firstElementChild.lastChild.remove()
}
if (document.title=='Edit Item'){
	watchInput(document.getElementsByName('UDFIELD_2')[0])
	watchInput(document.getElementsByName('UDFIELD_18')[0])
	//watchInput(document.getElementsByName('UDFIELD_3')[0])
	//watchInput(document.getElementsByName('UDFIELD_4')[0])
	document.getElementsByName('saveCopy')[0].after(create_barcode("s","s.png",()=>{
		document.getElementsByName('saveCopy')[0].click()
	}))
	document.getElementsByName('org.apache.struts.taglib.html.CANCEL')[0].after(create_barcode("c","c.png",()=>{
		document.getElementsByName('org.apache.struts.taglib.html.CANCEL')[0].click()
	}))
	document.getElementsByName('Working')[0].after(create_barcode("w","w.png",()=>{
		document.getElementsByName('Working')[0].click()
	}))
	document.getElementsByName('Retired')[0].after(create_barcode("r","r.png",()=>{
		document.getElementsByName('Retired')[0].click()
	}))
	document.getElementsByName('Damaged')[0].after(create_barcode("d","d.png",()=>{
		document.getElementsByName('Damaged')[0].click()
	}))
}
}