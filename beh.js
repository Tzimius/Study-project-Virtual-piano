const audioKeys = ["A.mp3","S.mp3","D.mp3","F.mp3","G.mp3","H.mp3","J.mp3","W.mp3","E.mp3","T.mp3","Y.mp3","U.mp3"];
let pianoKeys = "asdfghjwetyu";
document.addEventListener("keypress",function (event) {
    let varKey = event.key;
    for (let i = 0;i<pianoKeys.length;i++){
        if (varKey == pianoKeys[i]) {
            console.log(varKey);
            createSound("sound/"+audioKeys[i]);
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