// Dylan Johnson ASsignment 5 CSCE 242
let count = 0;
const slider = document.getElementById("slider");
const sliderImg = document.getElementById("slider-img");

const updateSliderImg = () => {
    let marginLeft = (document.getElementById("slider-section").offsetWidth - sliderImg.offsetWidth) * slider.value / 100.0;
    // for some reason it goes outside of the box by default, so this fixes that
    // think is has something to do with the border because turning that off fixes it
    if (marginLeft > 276.5) {
        marginLeft = 279.5;
    }
    sliderImg.style.marginLeft = marginLeft + "px"; 
};

slider.oninput = updateSliderImg; 

document.getElementById("count").onclick = () => {
    count += 1;
    document.getElementById("counter").innerHTML = count.toString();
};

document.getElementById("img-button").onclick = () => {
    window.location.reload();
};