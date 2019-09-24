function hideWhenClicked(element){
	element.hidden = true
}

$(document).click(function(event){
	hideWhenClicked(event.currentTarget.activeElement)
})