// So this grabs what you typed for the title of the to do and holds it in a variable called cardRecieveTitle.
// the const means that the variable cannot be changed later on.
// everything is else js syntax which you will have to learn on your own
const cardRecieveTitle = document.getElementById("card-recieve-title");

// this grabs the paragraph section of the to do list
const cardRecieveText = document.getElementById("card-recieve-text");

// and this is the container so where all the todo lists are going to go.
const card = document.getElementById("task-container");

// this is the function itself
function addTask(){
    // although it doesnt work this is supposed to send in an alert by the browser that says that you have to type something.
    // this is a basic if else statement. Essentially if this is true do this. else do something else.
    // so if the boxes are empty remind the user you must type something
    if(cardRecieveText === '' || cardRecieveTitle === ''){
        alert("You must type something in both sections");
    }
    // else section of the statement
    else{
        // This section essentially makes a container inside of a container. you can see that it creates a new div.
        
        const divOne = document.createElement("div");
        // these two lines adds the classes
        const styling = "card m-2 bg-secondary";
        divOne.className = styling;
        // this line gives the div an id of divOne so that i can use it later within the same javascript file.
        divOne.id = "divOne";

        // This section creates another div inside of the earlier div.
        // which essentially does the same thing
        const divTwo = document.createElement("div");
        const stylingTwo = "card-body";
        divTwo.className = stylingTwo;
        divTwo.id = "card-Body";
        // this creates the header of the todo list.
        const headerOne = document.createElement("h5");
        // then puts what the user typed in the header section of the modal into the 'innerHTML' So imagine that javascript is building 
        // html to create the to do list
        headerOne.innerHTML = cardRecieveTitle.value;
        // this section creates the paragraph element then gives it the value of what the user typed in the 
        // big box of the modal. it also gives it a class of text-wrap which limits how lond the todo list can be.
        // This is bootstrap doing its job.
        const p = document.createElement("p");
        p.innerHTML = cardRecieveText.value;
        const type = "text-wrap";
        p.className = type;
        // and this creates the button at the end of the to do list which makes the todo list disappear.
        const button = document.createElement("a");
        button.innerHTML = "finished";
        button.hrefValue = "#";
        const typeOne = "btn btn-secondary";
        button.className = typeOne;
        //  This attaches the first div created earlier to the card element which is the container of all the to do's
        card.appendChild(divOne);
        // this attaches the second div created to the first div created.
        divOne.appendChild(divTwo);
        // the next three lines attach the header paragrapgh and button within the same div created earlier.
        divTwo.appendChild(headerOne);
        divTwo.appendChild(p);
        divTwo.appendChild(button);
    }
    // These next two lines makes the value of what you typed within the modal itsle nothing
    // so that it doesnt save and you dont ahve to manually delete it when you want to make 
    // another to do list.
    cardRecieveTitle.value = "";
    cardRecieveText.value = "";
    saveData();
}
// This one was supposed to do some cool styling stuff but i never finished it. 
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

// This makes the browser save the new divs you created in the website since the original website doesnt hold anything
function saveData(){
    localStorage.setItem("data", card.innerHTML);
}
// and this actually puts up what you saved to the browser
function showTask(){
    card.innerHTML = localStorage.getItem("data");
}
showTask();