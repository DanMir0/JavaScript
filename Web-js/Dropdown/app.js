const dropdownItem = document.querySelector('.dropdown-item')
dropdownItem.addEventListener('click', (e) => {
    e.classList.toggle('.d-none')
})