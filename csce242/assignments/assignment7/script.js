// Dylan Johnson Assignment 7 CSCE 242

const addStars = (e) => {
    const numStars = document.getElementById("num-stars");
    const starSelected = document.getElementById("star-selected");
    const sky = document.getElementById("sky");
    if (numStars.value <= 0) {
        document.getElementById("error").classList.remove("hide");
    } else {
        sky.innerHTML = "";
        document.getElementById("error").classList.add("hide");
        starSelected.classList.add("hide");
    }
    for (let i = 0; i < numStars.value; i++) {
        const left = Math.random() * (600 - 14.86);
        const top = Math.random() * (600 - 16);
        // learned about star from: https://www.w3schools.com/howto/howto_css_star_rating.asp
        const star = document.createElement("span");
        star.style.left = "" + left + "px";
        star.style.position = "absolute";
        star.style.top = "" + top + "px";
        star.classList.add("fa");
        star.classList.add("fa-star");
        star.onclick = () => {    
            starSelected.innerHTML = `You selected star ${1 + i}!`;
            starSelected.classList.remove("hide");
        };
        sky.append(star);
    }
}

document.getElementById("draw").onclick = addStars;
