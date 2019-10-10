/* Javascript for Lab 4*/

let storage = window.localStorage;
var isAddButtonPressed = false;
var artistCount = 0;
var artistNames = [];

if (storage.getItem("artist-count") != null) {
	artistCount = storage.getItem("artist-count");
}

if (storage.getItem("artist-names") != null) {
	artistNames = storage.getItem("artist-names").split(",");
}

//reload artists after page loads
document.addEventListener('DOMContentLoaded', function () {
	window.onload = reloadAllArtists(artistCount);
}, false);

//save artist info to local storage
function storeArtist(name, desc, url) {
	artistCount++;
	var artist = [name, desc, url];
	storage.setItem("artist" + artistCount, artist);
	storage.setItem("artist-count", artistCount);
}

//add all artists already added
function reloadAllArtists(count) {
	for (i = count; i > 0; i--) {
		reloadArtist(i);
	}
}

//add the recently added artist
function reloadArtist(count) {
	var listbox = document.getElementById("list-box");
	console.log("List box is null? " + (listbox == null));

	var artist = storage.getItem("artist" + count).split(",");

	var listitem = document.createElement("div");
	listitem.setAttribute("class", "list-item");

	var listinfo = document.createElement("div");
	listinfo.setAttribute("class", "list-info");

	var listimgdiv = document.createElement("div");
	listimgdiv.setAttribute("class", "list-img");

	var listname = document.createElement("h3");
	listname.textContent = artist[0];
	console.log(artist[0]);

	var listdesc = document.createElement("p");
	listdesc.textContent = artist[1];
	console.log(artist[1]);

	var listimg = document.createElement("img");
	listimg.setAttribute("src", artist[2]);
	console.log(artist[2]);

	listinfo.appendChild(listname);
	listinfo.appendChild(listdesc);
	listimgdiv.appendChild(listimg);

	listitem.appendChild(listimgdiv);
	listitem.appendChild(listinfo);

	listbox.appendChild(listitem);
}

//filter list of artist based on search
function searchArtists() {

}

function addButtonPressed() {
	var addartistbox = document.getElementById("add-artist-box");

	if (isAddButtonPressed == true) {
		while (addartistbox.hasChildNodes()) {
			addartistbox.removeChild(addartistbox.lastChild);
		}
		isAddButtonPressed = false;
		
	} else {
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

	var listinfo = document.createElement("div");
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

	storeArtist(namebox.value, descbox.value, urlbox.value);

	addartistbox.removeChild(namebox);
	addartistbox.removeChild(descbox);
	addartistbox.removeChild(urlbox);
	addartistbox.removeChild(addBtn);

	isAddButtonPressed = false;
}
