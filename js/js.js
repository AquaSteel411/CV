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

const btnMenu = document.querySelector(".collapsible");
const menu = document.querySelector(".hidden");
const toggleMenu = function () {
    menu.classList.toggle("open");
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("open");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});
