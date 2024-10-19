// fixes a wierd problem in chrome where a div is "above" years, even though mousing over it in inspect element shows it's
// not in chrome 
if (window.chrome) {
    document.getElementById("years").style.marginTop = "28px";
}