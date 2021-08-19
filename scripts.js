const inputArea = document.querySelector("#english");
const outputArea = document.querySelector("#minion_lang");
const translateBtn = document.querySelector("#translate_btn");

var minionURL = "https://api.funtranslations.com/translate/minion.json";

function translateToMinion(text){
    return minionURL + "?" + "text=" + text;
};

function errorHandler(error){
    console.log("error occured : ", error);
};

function clickHandler(){
    var textInput = inputArea.value;

    fetch(translateToMinion(textInput))
    .then(response => response.json())
    .then(json => showOutput(json.contents.translated))
    .catch(errorHandler)
};

function showOutput(text){
    outputArea.innerHTML = text;
}

translateBtn.addEventListener("click", clickHandler);