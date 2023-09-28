function changeBackgroundColor(color) {
    
    if(color=='pink'){
        document.body.style.backgroundColor = color;
    alert("U have turned on");
    playaudio();
}
    else{
        document.body.style.backgroundColor = color;
        alert('Turned Off');
    }
}
function playaudio(){
    var audio = document.getElementById('audio');
    audio.play();
}