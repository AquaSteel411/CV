function writeTextByJS(cls, text, speed){

    var ele = document.getElementsByClassName(cls)[0],
        txt = text.join("").split("");

    var interval = setInterval(function(){

        if(!txt[0]){

            return clearInterval(interval);
        };

        ele.innerHTML += txt.shift();
    }, speed != undefined ? speed : 80); //скорость

    return false;
};

writeTextByJS(
    "for-me", //селектор
    [
        "I'm 28. I live in Novokuznetsk, Russia.\n",
        "I have been developing websites since 2022."

    ]
);