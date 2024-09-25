// Dylan Johnson Assignment 7 CSCE 242

const addStars = (e) => {
    const numStars = document.getElementById("num-stars");
    const sky = document.getElementById("sky");
    for (let i = 0; i < numStars.value; i++) {
        const left = Math.random() * (600 - 14.86);
        const right = Math.random() * (600 - 16);
        // learned about star from: https://www.w3schools.com/howto/howto_css_star_rating.asp
        const star = `<span style=\"left:${left}px;top:${right}px;\"class=\"fa fa-star\"></span>`
        sky.innerHTML += star;
    }
}

document.getElementById("draw").onclick = addStars;
