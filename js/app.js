const header = document.querySelector('.header')

document.addEventListener('scroll', (e) =>{
    if(window.scrollY > header.clientHeight){
        header.classList.add('blue-header')
    }else{
        header.classList.remove('blue-header')
    }
})