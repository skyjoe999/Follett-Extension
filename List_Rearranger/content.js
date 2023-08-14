if (document.title=='Item Status'){
	info0=document.getElementById('CopyInformationDetail_0').firstElementChild.children
	info1=document.getElementById('CopyInformationDetail_1').firstElementChild.children

	info0[0].after(info0[2])
	info0[1].after(document.createElement('br'))
	info0[1].after(document.createElement('br'))
	info1[0].before(info0[7])
	info1[0].after(info1[6])
	info1[1].after(document.createElement('br'))
	info1[1].after(document.createElement('br'))
	info1[1].children[2].style.display='none'

}

