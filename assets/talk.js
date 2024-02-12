//кнопка наверх
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('#top').fadeIn();
        }
        else{
            $('#top').fadeOut();
        }
    })
});
//кнопка наверх
//боковая панель справа
$('#top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
});
const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDeafult;
        offcanvasCart.hide();
        let href = item.dataset.href;
        offcanvasCartEl.addEventListener('hidden.bs.offcanvas', () =>{
            document.getElementById(href).scrollIntoView();
        });
    })
})
//боковая панель справа
//видео
window.addEventListener('DOMContentLoaded', function(){

    var videos = document.querySelectorAll('.video');

    videos.forEach(function(video){
        video.addEventListener('click', function(){
            if(video.classList.contains('ready')){
    
                return;
    
            }
            video.classList.add('ready');
    
            var src = video.dataset.src
    
            video.insertAdjacentHTML('afterbegin', '<iframe src="'+ src +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    
        });
    
    });
});



//видео
//поиск



//поиск