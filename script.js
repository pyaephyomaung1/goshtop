const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = () => {
    dropDownMenu.classList.toggle('open')
}

/* scripts.js */

let count = 0;

document.getElementById("add-to-cart").onclick = ()=> {
    count++;
    document.getElementById("cartCount").textContent = count;
}