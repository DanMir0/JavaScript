const dropdownItem = document.querySelectorAll('.dropdown-item')

dropdownItem.forEach(elem => {
    const dropdownMenu =  elem.querySelector('.dropdown-menu')
    elem.addEventListener('click', (e)=> {
        dropdownMenu.classList.toggle('d-none')
    }) 
})