// Dylan Johnson Assignment 10 CSCE 

const getIceCreams = async() => {
    try {
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch(error) {
        console.log(error);
    }
};

const getIceCreamSection = (iceCream) => {
	const container = document.createElement("div");
	container.classList.add("one");
	container.classList.add("container");
	container.style.position = "relative";
	const img = document.createElement("img");
	img.src = "https://portiaportia.github.io/json/images/ice-creams/" + iceCream.image;
	const overlay = document.createElement("div");
	overlay.classList.add("overlay");
	const name = document.createElement("h2");
	name.innerHTML =  iceCream.name;
	name.classList.add("name");
	container.append(img);
	overlay.style.position = "relative";
	overlay.append(name);
	container.append(overlay);
	return container;
};

const showIceCreams = async() => {
	const iceCreams = await getIceCreams();
	const content = document.getElementById("main-content");
	let i = 1;
	let row;
	iceCreams.forEach((iceCream) => {
		content.append(getIceCreamSection(iceCream));
		if (i % 4 == 0) {
			const row = document.createElement("div");
			row.style.width = "100%";
			content.append(row);
		}
		i++;
	});
	
};

showIceCreams();
