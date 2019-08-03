let topPortion = document.getElementById('greeting');
let goTopButton = document.getElementById('gotop');
let bodyDom = document.querySelector('body');
let pageLoader = document.getElementById('page-loader')

goTopButton.style.display = 'none';

const scrollToTop = () =>{
    let c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c>0){
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10)
    }
}

const showOrHide = () =>{
    if(scrollY > 350){
        goTopButton.style.display = 'block'
    }
    else{
        goTopButton.style.display = 'none'
    }
}

const fadeOutLoader = () =>{
    setTimeout(() => pageLoader.style.display = 'none', 1500);
}


window.onscroll = () => showOrHide()

const main = () =>{
    goTopButton.addEventListener('click', () => scrollToTop())
    fadeOutLoader();
}

main()