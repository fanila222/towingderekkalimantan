$(document).on('ready', function() {
    var menu_btn = document.querySelector("#menu-btn");
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    var close_btn = document.querySelector(".closebtn");

    sidebar.classList.remove("active-nav");
    menu_btn.addEventListener("click", () => {
//			menu_btn.classList.toggle("active-cont")
        sidebar.classList.toggle("active-nav");
        //container.classList.toggle("active-cont");
    });
    close_btn.addEventListener("click", () =>{
        sidebar.classList.toggle("active-nav");
    })
    var $homeIcon = $('#sidebar');
    $(window).resize(function() {
        if (window.innerWidth >= 1200){
            $homeIcon.removeClass('active-nav')
            $homeIcon.removeClass('active-cont')
            menu_btn.classList.remove("active-cont")
        }
    });
    $(".lazy").slick({
         dots: true,
         slidestoshow: 1,
         slidesToScroll: 1,
         infinite: true,
         autoplay: true,
        //  arrows: true,
        //  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
        //  nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi-chevron-right' aria-hidden='true'></i></button>"
    });

    $(".ads").slick({
        dots: true,
        slidestoshow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
   });

    $(".variable").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{breakpoint: 900,settings: {slidesToShow: 1,slidesToScroll: 1,infinite: true, autoplay: true,}}]
    });
    
  

});
document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
    document.querySelectorAll('#sidebar .nav-link').forEach(function(element){
        element.addEventListener('click', function (e) {
            let iconArrow = element.lastChild;
            let nextEl = element.nextElementSibling;
            let parentEl  = element.parentElement;	
    
            if(nextEl) {
                e.preventDefault();	
                let mycollapse = new bootstrap.Collapse(nextEl);
                
                if(nextEl.classList.contains('show')){
                    mycollapse.hide();
                } else {
                    console.log("icon", iconArrow);
                    if(iconArrow.classList.contains('right2')){
                        iconArrow.classList.remove("right2");
                        iconArrow.classList.add("down2");
                    }else{
                        iconArrow.classList.remove("down2");
                        iconArrow.classList.add("right2");
                    }
                    mycollapse.show();
                    // find other submenus with class=show
                    var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                    // if it exists, then close all of them
                    if(opened_submenu){
                      new bootstrap.Collapse(opened_submenu);
                    }
                }
            }
        }); // addEventListener
    }) 
}); 