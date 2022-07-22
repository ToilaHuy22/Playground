const buyBtns = document.querySelectorAll('.banner__options-buytickets')
const buyVisits = document.querySelectorAll('.feature__visit')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

//Hàm Hiển thị modal mua vé ( thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}

//Hàm ẩn thị modal mua vé ( gỡ bỏ class open vào modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}

//Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {

    buyBtn.addEventListener('click', showBuyTickets);

}
for (const buyVisit of buyVisits) {

    buyVisit.addEventListener('click', showBuyTickets);

}

//Click X ẩn modal
modalClose.addEventListener('click', hideBuyTickets)

//Click ngoài ẩn modal
modal.addEventListener('click', hideBuyTickets)

//Sự kiện nổi bọt
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})