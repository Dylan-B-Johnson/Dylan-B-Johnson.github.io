// Dylan Johnson Assignment 8 CSCE 242

const images = [];
images["read"] = "My favorite authors are Antoine de Saint-Exup&eacute;ry and Terry Pratchett.";
images["rain"] = "An umbrella isn't enough for this weather!";
images["work"] = "Making a website?";
images["clown"] = "Quite the getup there.";
images["shovel"] = "Call before you dig!!";
images["birthday"] = "Zum Geburtstag viel Gl&uuml;ck! &#119136;&#119136;&#119136;";

for (let image in images) {
    console.log(image);
    const img = document.createElement("img");
    img.setAttribute("src", "./images/" + image + ".jpg");
    img.onclick = () => {
        document.getElementById("top").classList.remove("hide");
        const title = image.charAt(0).toUpperCase() + image.substring(1, image.length);
        document.getElementById("pic-name").innerHTML = title;
        document.getElementById("pic-desc").innerHTML = images[image];
    };
    document.getElementById("middle").append(img);
    if (image == "work") {
        const newRow = document.createElement("div");
        newRow.classList.add("new-row-wrap");
        document.getElementById("middle").append(img);
        document.getElementById("middle").append(newRow);
    }
}
