let reserveButtons = document.getElementsByClassName("reserve_btn");

for( let i = 0; i < reserveButtons.length; i++) {
    reserveButtons[i].addEventListener("click", reserveButtonHandler);
}

function reserveButtonHandler (e) {
    e.target.offsetParent.addEventListener("mouseleave", addReserved);
}

function addReserved (e) {
    e.target.classList.add("reserved");
    e.target.removeEventListener("mouseleave", addReserved);
    e.target.addEventListener("click", removeReserved);
}

function removeReserved (e) {
    e.currentTarget.classList.remove("reserved")
    e.currentTarget.removeEventListener("click", removeReserved);
}