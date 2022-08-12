var inputText = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-div");
var btnTranslate = document.querySelector("#btn-translate");
var btnClear = document.querySelector("#btn-clear");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function generateTranslationURL(text) {
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("Error occured : ",error);
    alert("Something went wrong with server, please try again after some times");
}

function clickHandler(){
    var enteredText = inputText.ariaValueMax;
    fetch(generateTranslationURL(enteredText))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}

function clearHandler(){
    outputDiv.innerHTML="";
    inputText.value="";
}

btnTranslate.addEventListener("click", clickHandler);
btnClear.addEventListener("click", clearHandler);