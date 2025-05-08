const btnOpen = document.querySelector(".button_modal-open");
const btnClose = document.querySelector(".btn_close-modal");
const MODAL = document.querySelector(".background-modal");
ModalOperation();
function ModalOperation(){
    btnClose.addEventListener('click',()=>{
        MODAL.classList.add('is_hiden')
    })
    btnOpen.addEventListener('click',()=>{
        MODAL.classList.remove('is_hiden')
    })
}
