console.log(window.location.href)
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.header').addClass('color-header');
    }
    else {
        $('.header').removeClass('color-header');
    }
});
// change src

let countimg = 0;
let toogleBtn = document.querySelector('.navbar-toggler');

toogleBtn.addEventListener('click',()=>{
    if(countimg == 0){
        document.querySelector('.navbar-toggler-icon').src ="./assest/images/x-mark.svg";
      countimg = 1;
    }
    else{
        document.querySelector('.navbar-toggler-icon').src ="./assest/images/Menu-Button.svg";
        countimg = 0;
    }
})




// sldier home page



