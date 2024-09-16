// Dylan Johnson ASsignment 5 CSCE 242
let count = 0;
const slider = document.getElementById("slider");
const sliderImg = document.getElementById("slider-img");

const updateSliderImg = () => {
    const width = (document.getElementById("slider-section").offsetWidth - sliderImg.offsetWidth);
    // think is has something to do with the border because turning that off fixes it
    sliderImg.style.left = (width * slider.value / 100.0 - width / 2.0).toString() + "px";
};

slider.oninput = updateSliderImg; 

document.getElementById("count").onclick = () => {
    count += 1;
    document.getElementById("counter").innerHTML = count.toString();
};

document.getElementById("img-button").onclick = () => {
    window.location.reload();
};