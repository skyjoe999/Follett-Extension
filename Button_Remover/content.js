if (document.title=='Item Status'){
	panel=document.getElementById('copyactions').firstElementChild
	panel.children[1].remove()
	panel.children[1].remove()
	panel.children[1].remove()
	panel.children[1].remove()
}
if (document.title=='Edit Item'){
	panel=document.getElementById('divToHideonSave')
	panel.children[1].remove()
	panel.children[1].remove()
	panel.children[1].remove()
	panel.children[1].remove()
	table = document.getElementById('tableMain').firstElementChild.children
	function hide(element){
		element.style.display='none'
	}
	hide(table[7])
	hide(table[8])
	hide(table[9])
	table[9].after(document.createElement('br'))
	table[9].after(document.createElement('br'))
	hide(table[13])
	hide(table[14])
	hide(table[15])
	for (var i = 17; i < table.length; i++) {
		hide(table[i])
	}
	table[table.length-1].after(document.createElement('br'))
	table[table.length-1].after(document.createElement('br'))
	table[table.length-1].after(document.createElement('br'))

}
