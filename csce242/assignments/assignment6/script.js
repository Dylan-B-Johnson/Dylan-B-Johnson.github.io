// Dylan Johnson Assignment 6 CSCE 242
const slider = document.getElementById("slider");

const switchExercise = (e) => {
    if (e.target.id == "exe2" || e.target.id == "exe3") {
        document.getElementById("slider-section").classList.add("hide");
        document.getElementById("random-img").classList.remove("hide");
    } else  {
        document.getElementById("slider-section").classList.remove("hide");
        document.getElementById("random-img").classList.add("hide");
    }
};

const sliderWork = (e) => {
    let r = (~~(slider.value / 100 * 256)).toString(16);
    if (r.length < 2)
        r = "0" + r;
    document.getElementById("slider-section").style.setProperty("background-color", "#" + r + "0000");
    if (slider.value < 10) 
        document.getElementById("cool").innerHTML = "Dark";
    if (slider.value >= 10 && slider.value <= 80) 
        document.getElementById("cool").innerHTML = "Angry";
    if (slider.value > 80) 
        document.getElementById("cool").innerHTML = "Wow, that's bright!";
}

const imgButtonWork = (e) => {
    if (e.target.id == "small-button") {
        document.getElementById("img-small").classList.remove("hide");
        document.getElementById("img-large").classList.add("hide");
        document.getElementById("img-med").classList.add("hide");
    } else if (e.target.id == "large-button") {
        document.getElementById("img-large").classList.remove("hide");
        document.getElementById("img-small").classList.add("hide");
        document.getElementById("img-med").classList.add("hide");
    } else {
        document.getElementById("img-med").classList.remove("hide");
        document.getElementById("img-small").classList.add("hide");
        document.getElementById("img-large").classList.add("hide");
    }
};

const arrowWork = (e) => {
    if (e.target.innerText == String.fromCodePoint(129169)) {
        // down arrow
        e.target.style.setProperty("top", "25px");
        e.target.innerHTML = "&#129171;";
    } else {
        // up arrow
        e.target.style.setProperty("top", "0px");
        e.target.innerHTML = "&#129169;";
    }
    document.getElementById("exe1").classList.toggle("hide");
    document.getElementById("exe2").classList.toggle("hide");
};

slider.oninput = sliderWork;
document.getElementById("arrow").onclick = arrowWork;
document.getElementById("small-button").onclick = imgButtonWork;
document.getElementById("med-button").onclick = imgButtonWork;
document.getElementById("large-button").onclick = imgButtonWork;
document.getElementById("exe1").onclick = switchExercise;
document.getElementById("exe3").onclick = switchExercise;
document.getElementById("exe2").onclick = switchExercise;
document.getElementById("pipe-after").onclick = switchExercise;
