let heartIcons = document.querySelectorAll('#heartIcon');
let bagIcons = document.querySelectorAll('#bagIcon');
let counter=document.getElementById('cou');

heartIcons.forEach(function(heartIcon) {
    heartIcon.addEventListener('click', function() {
        console.log('test');
        if(heartIcon.classList.contains('bi-heart')){
            heartIcon.classList.remove('bi-heart');
            heartIcon.classList.add('bi-heart-fill');
        }
        else{
            heartIcon.classList.add('bi-heart');
            heartIcon.classList.remove('bi-heart-fill');
        }
    
    });
});
bagIcons.forEach(function(bagIcon) {
    bagIcon.addEventListener('click', function() {
        console.log('tezzz');
        if(bagIcon.classList.contains('bi-bag')){
            bagIcon.classList.remove('bi-bag');
            bagIcon.classList.add('bi-bag-check-fill');
            counter.innerText = parseInt(counter.innerText) + 1;
        }
        else{
            bagIcon.classList.add('bi-bag');
            bagIcon.classList.remove('bi-bag-check-fill');
            counter.innerText = parseInt(counter.innerText) - 1;
        }
    
    });
});

let plusIcons = document.querySelectorAll('.bi-plus-circle');
let dashIcons = document.querySelectorAll('.bi-dash-circle');
plusIcons.forEach(function(plusIcon) {
    plusIcon.addEventListener('click', function() {
        console.log('test');
        if(plusIcon.classList.contains('bi-plus-circle')){
            plusIcon.classList.remove('bi-plus-circle');
            plusIcon.classList.add('bi-plus-circle-fill');
        }
        else{
            plusIcon.classList.add('bi-plus-circle');
            plusIcon.classList.remove('bi-plus-circle-fill');
        }
    
    });
});
dashIcons.forEach(function(dashIcon) {
    dashIcon.addEventListener('click', function() {
        console.log('test');
        if(dashIcon.classList.contains('bi-dash-circle')){
            dashIcon.classList.remove('bi-dash-circle');
            dashIcon.classList.add('bi-dash-circle-fill');
        }
        else{
            dashIcon.classList.add('bi-dash-circle');
            dashIcon.classList.remove('bi-dash-circle-fill');
        }
    
    });
});





///card 

let cardlist = document.getElementsByClassName('hiddencard');
let totalPrice = document.getElementById('Totalprice');
let totalProduct = document.getElementById('Totalproduct');


for(let card of cardlist){
    let addIcon = card.querySelector('.bi-plus-circle')
    let noaddIcon = card.querySelector('.bi-dash-circle')
    let amine = 0
    addIcon.onclick=function(){
        console.log("hh")
        let price = parseInt(card.querySelector('.price').innerText)
        totalProduct.innerText = parseInt(totalProduct.innerText) +1
        totalPrice.innerText = parseInt(totalPrice.innerText) + price
        amine ++
    }
    noaddIcon.onclick=function(){
        if (amine > 0) {
            console.log("hh")
        let price = parseInt(card.querySelector('.price').innerText)
        totalProduct.innerText = parseInt(totalProduct.innerText) -1
        totalPrice.innerText = parseInt(totalPrice.innerText) - price
        amine --
        }
    }
}