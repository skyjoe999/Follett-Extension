if (document.title=='Item Status'){
	info0=document.getElementById('CopyInformationDetail_0').firstElementChild.children
	info1=document.getElementById('CopyInformationDetail_1').firstElementChild.children
	function highlight(element){
		element.style.fontWeight='bold'
		switch (element.textContent.trim()) {
			case 'Damaged':
			case 'Unusable':
			case 'No Longer in Use':
				element.style.background='lightcoral'
				break;
			case 'Usable':
			case 'Available':
			case 'New':
				element.style.background='lightgreen'
				break;
			case 'Retired':
				element.style.background='lightgrey'
				break;
			default:
				element.style.background='lightcyan'
		}
	}
	highlight(info0[2].children[1])
	highlight(info1[5].children[1])
	
switch (info1[4].children[1].textContent.trim()) {
	case '21st Century Acad Acad WMS 21-22':
	case '21st Century Car &amp; Gil 16-20':
	case '21st Century NEMS &amp; Enlight 19-20':
	case '21st Century Reed &amp; Duggan 16-1':
	case '21st Century Regan 1920':
	case '21st Century Wash &amp; Driggs 19-20':
	case 'Adult Ed Prov-Carryover':
	case 'Adult Education-Provider 20-21':
	case 'Adult Education-Provider 21-22':
	case 'Adult Education Provider 22-23':
	case 'Bilingual Grant 18-19':
	case 'Bilingual Grant 19-20':
	case 'Bilingual Grant 20-21':
	case 'Bucks Hill Program Expenditures':
	case 'Bucks Hill SIG 20-22':
	case 'Career Academy Program Expenditures':
	case 'Carrington Program Expenditure':
	case 'CN NEMS 20-21':
	case 'CN NEMS 21-22':
	case 'CN NEMS S1 22-23':
	case 'CN Wallace S2 22-23':
	case 'CN Wilby 21-22':
	case 'CN WSMS 20-21':
	case 'CN WSMS 21-22':
	case 'CN WSMS S3 22-23':
	case 'Commissioner Net NEMS':
	case 'Commissioner Net Wallace':
	case 'Commissioner Net WSMS':
	case 'Crosby Program Expenditure':
	case 'Driggs Program Expenditures':
	case 'Driggs SIG 19-20':
	case 'Duggan Program Expenditures':
	case 'Enlightenment Program Expenditures':
	case 'First Robot Comp Crosby 21-22':
	case 'Generali Program Expenditures':
	case 'Gilmartin SIG 18-19':
	case 'Hopeville SIG 19-20':
	case 'Hopeville SIG 20-22':
	case 'Hopeville SIG Add 2019':
	case 'InterDis Magnet Maloney 22-23':
	case 'InterDis Magnet Rotella 22-23':
	case 'InterDis Magnet WAMS 22-23':
	case 'Kennedy Program Expenditures':
	case 'Kennedy SIG 21-23':
	case 'LPS Bond Bucks Hill 18-20':
	case 'LPS Bond Crosby 20-22':
	case 'LPS Bond Driggs 18-20':
	case 'LPS Bond Gilmartin 18-20':
	case 'LPS Bond Hopeville 18-20':
	case 'LPS Bond Kennedy 18-20':
	case 'LPS Bond Kennedy 20-22':
	case 'LPS Bond North End 20-22':
	case 'LPS Bond Sprague 18-20':
	case 'LPS Bond Sprague 19-20':
	case 'LPS Bond Wallace 20-22':
	case 'LPS Bond Washington 18-20':
	case 'LPS Bond West Side 20-22':
	case 'LPS Bond Wilby 18-20':
	case 'LPS Bond Wilby 20-22':
	case 'LPS Bond Wilson 18-20':
	case 'LPS Kennedy 17-19':
	case 'LPS Wilby 17-19':
	case 'Magnet Operating Grant 18-19':
	case 'Magnet Operating Grant 19-20':
	case 'Magnet Operating Grant 20-21':
	case 'Magnet Operating Grant 21-22':
	case 'Magnet Operating Grant 22-23':
	case 'North End MS Add 2019':
	case 'North End Program Expenditures':
	case 'North End SIG 17-18':
	case 'North End SIG 18-19':
	case 'North End SIG 19-20':
	case 'North End SIG 20-22':
	case 'North End SIG Add 2018':
	case 'Reed Program Expenditures':
	case 'SDE Chase Park/Hopeville 1920':
	case 'SDE Kingsbury/Wilson 1920':
	case 'SIG 6 Kennedy 22-24':
	case 'SIG 6 North End 22-24':
	case 'SIG 6 West Side 22-24':
	case 'SIG 6 Wilby 22-24':
	case 'Sprague SIG 20-22':
	case 'State Bilingual Grant 22-23':
	case 'Tinker Program Expenditures':
	case 'Wallace MS Add 2019':
	case 'Wallace Program Expenditures':
	case 'Wallace SIG 18-19':
	case 'Wallace SIG 19-20':
	case 'Wallace SIG Add 2018':
	case 'Walsh SIG 18-19':
	case 'Walsh SIG 19-20':
	case 'Walsh SIG 20-22':
	case 'Washington SIG 18-19':
	case 'Washington SIG 20-22':
	case 'West Side SIG 18-19':
	case 'West Side SIG 19-20':
	case 'West Side SIG 21-23':
	case 'West Side SIG Add 2018':
	case 'Wilby Program Expenditures':
	case 'Wilson SIG 18-19':
	case 'Wilson SIG 20-22':
		info1[4].children[1].style.background='lightgreen'
		break;
	default:
		info1[4].children[1].style.background='lightcyan';
}

}
