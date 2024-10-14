const modal = document.getElementById("main-modal");
const modalChild = document.getElementById("modal-child");
const cone = ["10", "9", "04", "19", "07", "7", "09", "09", "8", "10", "10", "10", "9", "09", "07", "08", "10", "10", "11", "9", "08", "4", "5"];
const sitsOnPedestal = [0, 5, 7, 8, 9];

const basename = (aString) => {
   return aString.split('/').reverse()[0];
};

const hangs = (indexArg) => {
        if (sitsOnPedestal.includes(indexArg)) {
                return ". Sits on pedestal.";
        } else {
                return ". Hangs on wall.";
        }
};

const expandSection = (placcard) => {
        const sect = document.createElement("section");
        const top = document.createElement("div");
        const bottom = document.createElement("div");
        const close = document.createElement("p");
        const info = document.createElement("p");
        info.classList.add("gallery-info");
        const index = Array.prototype.indexOf.call(placcard.parentNode.children, placcard);
        info.innerHTML = "Slip cast with Cone " + cone[index] + hangs(index);
        close.innerHTML = "&times;";
        close.style.zIndex = 400;
        close.style.fontSize = "37px";
        close.style.width = "fit-content";
        close.classList.add("pointer");
        //close.style.marginLeft = "auto";
        //close.style.marginRight = "10px";
        close.onclick = () => {
                modalChild.style.display = "none";
                modal.style.display = "none";
                modalChild.innerHTML = "";
        };
        sect.style.padding = "5px";
        const title = document.createElement("h2");
        title.innerHTML = placcard.firstElementChild.innerHTML;
        top.classList.add("columns-all");
        close.style.position = "relative";
        close.style.left = "calc(100% - 20px - 12.29px)";
        close.setAttribute("id", "close");
        top.append(close);
        top.append(title);
        sect.append(top);
        sect.append(bottom);
        const img = document.createElement("img");
        img.setAttribute("src", "./images/work/high-res/" + basename(placcard.children[1].src));
        img.onerror = () => {
                img.setAttribute("src", "./images/work/high-res/" + basename(placcard.children[1].src).slice(0,-3) + "png");
        }
        img.style.height = "auto";
        img.style.width = "auto";
        img.classList.add("contain");
        img.style.maxHeight = "800px";
        bottom.append(img);
        bottom.append(info);
        return sect;
};

const parent = document.getElementById("remaining-content-child");
for (let i of parent.children) {
        i.onclick = () => {
                if (window.innerWidth > 687) { 
                        const sect = expandSection(i);
                        modalChild.innerHTML = "";
                        modalChild.append(sect);
                        modal.style.display = "block";
                        modalChild.style.display = "block";
                }
        };
        i.classList.add("desktop-pointer");
        const info = document.createElement("p");
        info.classList.add("gallery-info-mobile");
        info.classList.add("gallery-placcard");
        const localIndex = Array.prototype.indexOf.call(i.parentNode.children, i);
        info.innerHTML = "Slip cast with Cone " + cone[localIndex] + hangs(localIndex);
        i.append(info);
}

