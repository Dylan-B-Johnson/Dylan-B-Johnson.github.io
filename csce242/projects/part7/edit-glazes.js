const getRecipes = async() => {
    try {
        return (await fetch("./recipes.json")).json();
    } catch(error) {
        console.log(error);
    }
};

const getDeleteDiv = (recipe) => {
    const deleteDiv = document.createElement("div");
    const deleteBtn = document.createElement("a");
    const deleteH = document.createElement("h3");
    deleteDiv.classList.add("delete-button");
    deleteBtn.setAttribute("href", "#");
    deleteH.innerHTML = "Delete";
    deleteBtn.append(deleteH);
    deleteDiv.append(deleteBtn);
    return deleteDiv;
};

const getTableDiv = (recipe) => {
    const table = document.createElement("table");
    const tableDiv = document.createElement("div");
    tableDiv.classList.add("one");
    tableDiv.classList.add("table-div");
    const cone = document.createElement("p");
    cone.classList.add("cone");
    cone.innerHTML = "Cone: " + recipe.cone;
    //tableDiv.append(cone);
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
    //tableDiv.append(table);
    const a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", recipe.link);
    a.innerHTML = recipe.credit;
    //tableDiv.append(a);
    tableDiv.append(getDeleteDiv(recipe));
    return tableDiv;
};

const getRecipeDiv = (recipe) => {
    const placcard = document.createElement("div");
    placcard.classList.add("placcard");
    placcard.classList.add("placcard-glazes");
    const title = document.createElement("p");
    title.innerHTML = recipe.name;
    const img = document.createElement("img");
    img.setAttribute("src", recipe.image);
    img.classList.add("one");
    img.classList.add("contain");
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("one", "img-div");
    imgDiv.append(img);
    const mobileDiv = document.createElement("div");
    mobileDiv.classList.add("mobile-div");
    mobileDiv.classList.add("columns-mobile");
    //placcard.append(title);
    placcard.append(mobileDiv);
    mobileDiv.append(imgDiv);
    mobileDiv.append(getTableDiv(recipe));
    return placcard;
};

const showRecipes = async() => {
    const recipes = await getRecipes();
    recipes.forEach((recipe) => {
        const space = document.getElementById("remaining-content-child");
        space.append(getRecipeDiv(recipe));
    });
};

showRecipes();
