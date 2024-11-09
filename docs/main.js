const cardRecieveTitle = document.getElementById("card-recieve-title");

const cardRecieveText = document.getElementById("card-recieve-text");

const card = document.getElementById("task-container");

function addTask(){
    if(cardRecieveText === '' || cardRecieveTitle === ''){
        alert("You must type something in both sections");
    }
    else{
        const divOne = document.createElement("div");
        const styling = "card m-2 bg-secondary";
        divOne.className = styling;
        divOne.id = "divOne";

        const divTwo = document.createElement("div");
        const stylingTwo = "card-body";
        divTwo.className = stylingTwo;
        divTwo.id = "card-Body";

        const headerOne = document.createElement("h5");
        headerOne.innerHTML = cardRecieveTitle.value;

        const p = document.createElement("p");
        p.innerHTML = cardRecieveText.value;
        const type = "text-wrap";
        p.className = type;

        const button = document.createElement("a");
        button.innerHTML = "finished";
        button.hrefValue = "#";
        const typeOne = "btn btn-secondary";
        button.className = typeOne;

        card.appendChild(divOne);
        divOne.appendChild(divTwo);
        divTwo.appendChild(headerOne);
        divTwo.appendChild(p);
        divTwo.appendChild(button);
    }
    cardRecieveTitle.value = "";
    cardRecieveText.value = "";
    saveData();
}

card.addEventListener("click", function(e){
    if(e.target.tagName === "div.card"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "A"){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", card.innerHTML);
}
function showTask(){
    card.innerHTML = localStorage.getItem("data");
}
showTask();