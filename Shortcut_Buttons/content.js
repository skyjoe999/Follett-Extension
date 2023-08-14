if (document.title=='Edit Item'){
	var autoSave=true
	panel=document.getElementById('divToHideonSave')
	panel.lastChild.before(document.createElement('br'))
	panel.lastChild.before(document.createElement('br'))
	function set_status(val){
		document.getElementsByName('UDFIELD_3')[0].value=val
	}
	function set_condition(val){
		document.getElementsByName('UDFIELD_4')[0].value=val
	}
	function create_shortcut(icon_path, status, condition){
		panel.lastChild.before(document.createElement('br'))
		working_button=document.createElement('img')
		// working_button.type='image'
		working_button.src=chrome.runtime.getURL('Shortcut_Buttons/'+icon_path)
		working_button.addEventListener('click', (event) => {
			set_status(status)
			set_condition(condition)
			if(autoSave){
				panel=document.getElementById('divToHideonSave')
				panel.children[0].click()
			}
		})
		working_button.name=icon_path.slice(0,icon_path.lastIndexOf('.'))
		panel.lastChild.before(working_button)
	}
	create_shortcut("Working.png",0,0)
	create_shortcut("Retired.png",205,1)
	create_shortcut("Damaged.png",202,1)
}
