/* Javascript for Lab 3*/

var isAddButtonPressed = false;
var count = 0;

function addButtonPressed() {
	if (isAddButtonPressed == true) {
		return
	}
	console.log(isAddButtonPressed + " " + count);
	
	
	var addartistbox = document.getElementById("add-artist-box");
	
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
		addBtn.setAttribute("onclick", "addArtist()");
	
	addartistbox.appendChild(namebox);
	addartistbox.appendChild(descbox);
	addartistbox.appendChild(urlbox);
	addartistbox.appendChild(addBtn);
	
	isAddButtonPressed = true;
}

function addArtist() {
	var listbox = document.getElementById("list-box");
	var addartistbox = document.getElementById("add-artist-box");
	var namebox = document.getElementById("namebox");
	var descbox = document.getElementById("descbox");
	var urlbox = document.getElementById("urlbox");
	var addBtn = document.getElementById("addBtn");
	
	var listitem = document.createElement("div");
		listitem.setAttribute("class", "list-item");
	
	var listinfo =  document.createElement("div");
		listinfo.setAttribute("class", "list-info");
	
	var listimgdiv = document.createElement("div");
		listimgdiv.setAttribute("class", "list-img");
	
	var listimg = document.createElement("img");
		listimg.setAttribute("src", urlbox.value);
	
	var listname = document.createElement("h3");
		listname.textContent = namebox.value;
	
	var listdesc = document.createElement("p");
		listdesc.textContent = descbox.value;
	
	listinfo.appendChild(listname);
	listinfo.appendChild(listdesc);
	listimgdiv.appendChild(listimg);

	listitem.appendChild(listimgdiv);
	listitem.appendChild(listinfo);

	listbox.appendChild(listitem);
	
	addartistbox.removeChild(namebox);
	addartistbox.removeChild(descbox);
	addartistbox.removeChild(urlbox);
	addartistbox.removeChild(addBtn);
	
	isAddButtonPressed = false;
	console.log(isAddButtonPressed);

}