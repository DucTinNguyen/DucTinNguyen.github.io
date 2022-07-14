const $ = document.querySelector.bind(document);
// Dispay or hidden all menu
let allMenu = $('.wrapAllmenu');
let liAllmenu = $('.all_menu');
let btnCancel = $('.allmenu__cancel');
liAllmenu.onclick = () =>{
    allMenu.classList.toggle('showAllmenu')
}

btnCancel.onclick = () =>{
    allMenu.classList.replace('showAllmenu','hidden');

}
///Xử lí phần modal
const userElement = $('.right__user');
const modalElement = $('.modal');
const btnClost = $('.icon__close');

toggleModal = () =>{
    modalElement.classList.toggle('hide');
}   

userElement.addEventListener('click',toggleModal);
btnClost.addEventListener('click',toggleModal);
modalElement.addEventListener('click',(e)=>{
    if(e.target == e.currentTarget)
        {
            toggleModal();
        }
})
// Xử lí tab
const $$ = document.querySelectorAll.bind(document);
const listTabElement = $$('.tab-item');
const listTabContent = $$('.tab__content');
const modalBody = $('.modal__body');
listTabElement.forEach((item,index)=>{
    item.onclick =()=>{
        let tab = listTabContent[index];
        
        $('.tab-item.active').classList.remove('active'); 
        item.classList.add('active');

        $('.tab__content.activeContent').classList.remove('activeContent');
        tab.classList.add('activeContent    ');
    }
})
// Lấy ngày tháng hiện Tại
const timeElement = $('.header__top--timer');

let dateObj = new Date();

timeElement.innerHTML = dateObj.toLocaleString();