const getRecipes = async() => {
    try {
        return (await fetch("./recipes.json")).json();
    } catch(error) {
        console.log(error);
    }
};

const getRecipeDiv = (recipe) => {
    const placcard = document.createElement("div");
    placcard.classList.add("placcard");
    placcard.classList.add("placcard-glazes");
    const title = document.createElement("p");
    title.innerHTML = recipe.name;
    const table = document.createElement("table");
    const img = document.createElement("img");
    img.setAttribute("src", recipe.image);
    img.classList.add("one");
    img.classList.add("contain");
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("one", "img-div");
    imgDiv.append(img);
    const tableDiv = document.createElement("div");
    tableDiv.classList.add("one");
    tableDiv.classList.add("table-div");
    const mobileDiv = document.createElement("div");
    mobileDiv.classList.add("mobile-div");
    mobileDiv.classList.add("columns-mobile");
    placcard.append(title);
    placcard.append(mobileDiv);
    mobileDiv.append(imgDiv);
    mobileDiv.append(tableDiv);
    const cone = document.createElement("p");
    cone.classList.add("cone");
    cone.innerHTML = "Cone: " + recipe.cone;
    tableDiv.append(cone);
    const tr = document.createElement("tr");
    const material = document.createElement("th");
    material.innerHTML = "Material";
    const amount = document.createElement("th");
    amount.innerHTML = "Amount";
    tr.append(material);
    tr.append(amount);
    table.append(tr);
    recipe.recipe.forEach((i) => {
        const row = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.innerHTML = i.material;
        td2.innerHTML = i.amount;
        row.append(td1);
        row.append(td2);
        table.append(row);
    });
    tableDiv.append(table);
    const a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", recipe.link);
    a.innerHTML = recipe.credit;
    tableDiv.append(a);
    const downloadDiv = document.createElement("div");
    const downloadBtn = document.createElement("a");
    const download = document.createElement("h3");
    downloadDiv.classList.add("download-recipe", "text-align-left", "delete-button", "delete-button-edit-users");
    downloadBtn.setAttribute("href", "#");
    download.innerHTML = "Download";
    downloadBtn.append(download);
    downloadDiv.append(downloadBtn);
    tableDiv.append(downloadDiv);
    return placcard;
};

let updatedHeight = false;

const showRecipes = async() => {
    const recipes = await getRecipes();
    const space = document.getElementById("remaining-content-child");
    recipes.forEach((recipe) => {
        space.append(getRecipeDiv(recipe));
    });
    updateGlazeHeight();
};

const updateGlazeHeight = () => {
    if (updatedHeight || window.innerWidth < 687) 
        return;
    let maxHeight = 0;
    const space = document.getElementById("remaining-content-child");
    const children = space.children;
    for (let i = 0; i < children.length; i++) {
        document.querySelector(':root').style.setProperty("--glaze-height", "fit-content");
    }
    for (let i = 0; i < children.length; i++) {
        if (children[i].offsetHeight > maxHeight)
            maxHeight = children[i].offsetHeight;
    }
    for (let i = 0; i < children.length; i++) {
        document.querySelector(':root').style.setProperty("--glaze-height", maxHeight.toString() + "px");
    }
    updatedHeight = true;
};

showRecipes();
window.addEventListener('resize', updateGlazeHeight);
