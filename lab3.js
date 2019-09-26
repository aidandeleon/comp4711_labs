/* Javascript for Lab 3*/

var isAddButtonPressed = false;

function addButtonPressed() {
	if (isAddButtonPressed == true) {
		return //only need one input form
	}
	
	var listbox = document.getElementById("add-artist-box");
	
	var namebox = document.createElement("input");
	namebox.setAttribute("type", "Text");
	namebox.setAttribute("id", "namebox");
	namebox.setAttribute("placeholder", "Enter Name");  
	
	var descbox = document.createElement("input");
	descbox.setAttribute("type", "Text");
	descbox.setAttribute("id", "descbox");
	descbox.setAttribute("placeholder", "Enter Description");
	
	var urlbox = document.createElement("input");
	urlbox.setAttribute("type", "Text");
	urlbox.setAttribute("id", "urlbox");
	urlbox.setAttribute("placeholder", "Enter Image URL");
	
	var addBtn = document.createElement("input");
	addBtn.setAttribute("type", "Submit");
	addBtn.setAttribute("id", "addBtn");
	addBtn.setAttribute("value", "Add");
	
	listbox.appendChild(namebox);
	listbox.appendChild(descbox);
	listbox.appendChild(urlbox);
	listbox.appendChild(addBtn);
}