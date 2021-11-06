const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

$("#move").mouseenter(function () {

    $(this).animate({
        top: Math.random() * 300
    }, 100);
    $(this).animate({
        left: Math.random() * 300
    }, 100);

});
