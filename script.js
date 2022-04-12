document.querySelector("#button").addEventListener('click', logDebug);

function logDebug(){
    logMessage()

}
function logMessage(){
    var m = "message";
    console.log(m);
    m = "attention!";
    console.warn(m);
    m = "erreur!";
    console.erreur(m);
}
