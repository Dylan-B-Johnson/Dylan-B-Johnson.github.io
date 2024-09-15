let timer;

const positionRelativeRec = (func, elementToPosition, otherElement, registerListener) => {
    const otherRect = otherElement.getBoundingClientRect();
    const width = elementToPosition.offsetWidth;
    const height = elementToPosition.offsetHeight;
    const otherWidth = otherElement.offsetWidth;
    const otherHeight = otherElement.offsetHeight;
    const rect = elementToPosition.getBoundingClientRect();
    const results = func(rect, otherRect, width, height, otherWidth, otherHeight);
    if (registerListener) {
        window.addEventListener("resize", () => {
            timer = setInterval(positionRelativeRec(func, elementToPosition, otherElement, false), 100);
        });
    }
    elementToPosition.style.position = "fixed";
    elementToPosition.style.margin = "0px";
    elementToPosition.style.padding = "0px";
    elementToPosition.style.top = (results[0]).toString() + "px";
    elementToPosition.style.left = (results[1]).toString() + "px";
    elementToPosition.contentWindow.location.reload(true);
    clearInterval(timer)
}

/** 
 * Absolutely positions an element relative to another using provided func
 * @param func (toPosRect, otherRect, toPosWidth, toPosHeight, otherWidth, otherHeight) -> [top, left] 
*/
const positionRelative = (func, elementToPosition, otherElement) => {
    positionRelativeRec(func, elementToPosition, otherElement, true);
}

/**
 * Positions main title relative to main image
 */
const positionMainTitle = (toPosRect, otherRect, toPosWidth, toPosHeight, otherWidth, otherHeight) => {
    return [(otherHeight - toPosHeight) / 2.0 + otherRect.top, otherRect.right + 20];
}


// positionRelative(positionMainTitle, document.getElementById("main-title"), document.getElementById("main-img"));