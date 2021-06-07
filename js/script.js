let reserveButtons = document.getElementsByClassName("reserve__btn");

for( let i = 0; i < reserveButtons.length; i++) {
    reserveButtons[i].addEventListener("click", reserveButtonHandler);
}

function reserveButtonHandler (e) {
    var card = e.path.find(isRoom);
    card.addEventListener("mouseleave", addReserved);
}

function addReserved (e) {
    e.target.classList.add("room_reserved");
    e.target.removeEventListener("mouseleave", addReserved);
    e.target.addEventListener("click", removeReserved);
}

function removeReserved (e) {
    if (e.target.classList.contains("reserved__text_link"))
        return;
    e.currentTarget.classList.remove("room_reserved")
    e.currentTarget.removeEventListener("click", removeReserved);
}

function isRoom (e) {
    return e.classList.contains("room");
}