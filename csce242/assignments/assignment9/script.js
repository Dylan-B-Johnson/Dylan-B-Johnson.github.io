// Dylan Johnson Assignment 9 CSCE 242
const modal = document.getElementById("main-modal");
const modalChild = document.getElementById("modal-child");

class Cat {
	constructor(name, size, lifespan, range, status, fact, pic, picAuthor, picLink) {
		this.name = name;
		this.size = size;
		this.lifespan = lifespan;
		this.range = range;
		this.status = status;
		this.pic = pic;
		this.fact = fact;
		this.picAuthor = picAuthor;
		this.picLink = picLink;
	}

	get section() {
		const sect = document.createElement("section");
		sect.classList.add("one");
		const title = document.createElement("h2");
		title.innerHTML = this.name;
		sect.append(title);
		const img = document.createElement("img");
		img.setAttribute("src", "./images/" + this.pic);
		sect.append(img);
		const credit = document.createElement("a");
		credit.innerHTML = `Image by ${this.picAuthor} on FreePik`;
		credit.setAttribute("href", this.picLink);
		credit.style.display = "block";
		sect.append(credit);
		sect.onclick = () => {
			modalChild.append(this.expandedSection);
			modal.style.display = "block";
			modal.classList.remove("hide");
		};
		return sect;
	}

	get expandedSection() {
		const sect = document.createElement("section");
		const left = document.createElement("div");
		const right = document.createElement("div");
		const top = document.createElement("div");
		const bottom = document.createElement("div");
		const close = document.createElement("p");
		close.innerHTML = "&times;";
		close.style.width = "fit-content";
		//close.style.marginLeft = "auto";
		//close.style.marginRight = "10px";
		close.onclick = () => {
			modal.classList.add("hide");
			modalChild.innerHTML = "";
		};
		sect.classList.add("one");
		bottom.classList.add("columns");
		sect.style.padding = "5px";
		bottom.append(left);
		bottom.append(right);
		const title = document.createElement("h2");
		title.innerHTML = this.name;
		const size = document.createElement("p");
		size.innerHTML = "<b>Size:</b> " + this.size;
		left.style.flex = "1";
		right.style.flex = "1";
		left.append(size);
		top.classList.add("columns-all");
		close.style.position = "relative";
		close.style.left = "calc(100% - 20px - 12.29px)";
		close.setAttribute("id", "close");
		top.append(close);
		top.append(title);
		sect.append(top);
		sect.append(bottom);
		const lifespan = document.createElement("p");
		const range = document.createElement("p");
		const fact = document.createElement("p");
		const status = document.createElement("p");
		lifespan.innerHTML = "<b>Lifespan:</b> " + this.lifespan;
		left.append(lifespan);
		range.innerHTML = "<b>Range:</b> " + this.range;
		left.append(range);
		status.innerHTML = "<b>Status:</b> " + this.status;
		fact.innerHTML = "<b>Interesting Fact:</b> " + this.fact;
		left.append(fact);
		left.append(status);
		const img = document.createElement("img");
		img.setAttribute("src", "./images/" + this.pic);
		right.append(img);
		const credit = document.createElement("a");
		credit.innerHTML = `Image by ${this.picAuthor} on FreePik`;
		credit.setAttribute("href", this.picLink);
		credit.style.display = "block";
		right.append(credit);
		sect.onclick = () => {
			const modal = document.getElementById("main-modal");
			modal.style.display = "block";
		};
		return sect;
	}
}

const cats = [new Cat("Bobcat", "50 inches", "7 years", "North America", "Least Concern", "Bobcats will ocassionally prey on adult deer.", "bobcat.jpg", "vladimirchech", "https://www.freepik.com/free-photo/small-bobcat-his-nature-habitat-american-wild-cats-animals-forests-red-lynx_22456239.htm#fromView=search&page=1&position=0&uuid=64fe5563-27f3-432d-9ade-915f63f17f3b"),
new Cat("Ocelot", "40 inches", "12 years", "South and Central America", "Least Concern", "Ocelots are strong swimmers.", "ocelot.jpg", "vladimirchech", "https://www.freepik.com/free-photo/very-rare-ocelot-night-brazilian-jungle_17897634.htm#fromView=search&page=1&position=1&uuid=dcce54f7-6652-42bf-9541-c454af1b50e4"),
new Cat("Clouded Leopard", "42 inches", "11 years", "East Asia", "Vulnerable", "Clouded Leopards retreat to trees after eating to rest and digest.", "leopard.jpg", "vladimirchech", "https://www.freepik.com/free-photo/clouded-leopard-is-walking-towards-from-shadows-light-big-cat-male-from-darkness-zoo-czech-republic-neofelis-nebulosa-very-rare-creature_25337607.htm#fromView=search&page=1&position=23&uuid=20e28d1f-013e-4f1a-b1bb-e3d794d28ba8"),
new Cat("Siberian Tiger", "59 inches", "18 years", "Easy Asia", "Endangered", "Siberian Tigers are the largest cats in the world.", "tiger.jpg", "vladimirchech", "https://www.freepik.com/free-photo/closeup-siberian-tiger-laying-ground-surrounded-by-greenery-sunlight_10990837.htm#fromView=search&page=3&position=31&uuid=67168c83-348c-4659-9eb5-2ce37646e0d4")];

cats.forEach((cat) => {
	document.getElementById("main-content").append(cat.section);
});
