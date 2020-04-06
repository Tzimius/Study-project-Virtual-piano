let pianoKeys = "asdfghjwetyu";
document.addEventListener("keypress",function (event) {
    let varKey = event.key;
    for (let i = 0;i<pianoKeys.length;i++){
        if (varKey == pianoKeys[i]) {
            console.log(varKey);
            createSound("sound/"+pianoKeys[i].toUpperCase()+".mp3");
        }
    }
    if (!pianoKeys.match(varKey)){
        console.log("Wrong key!");
    }
})
function createSound(soundKey) {
    let sound = new Audio(soundKey);
    sound.play();
}