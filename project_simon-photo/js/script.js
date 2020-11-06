

/*JQUERY
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
    
ibg();
*/

function ibg(){

    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}

ibg();


function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});



var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
if(isMobile.any()){}

if(location.hash){
        var hsh=location.hash.replace("#","");
    if($(".popup-"+hsh).length>0){
        popupOpen(hsh);
    }else if($("div."+hsh).length>0){
        $("body,html").animate({scrollTop:$("div."+hsh).offset().top,},500, function(){});
    }
}
$(".wrapper").addClass("loaded");

    var act="click";
if(isMobile.iOS()){
    var act="touchstart";
}

$(".page-header__icon").click(function(event) {
    $(this).toggleClass("active");
    $(".page-header__menu").toggleClass("active");
    if($(this).hasClass("active")){
        $("body").data("scroll",$(window).scrollTop());
    }
        $("body").toggleClass("lock");
    if(!$(this).hasClass("active")){
        $("body,html").scrollTop(parseInt($("body").data("scroll")));
    }
});


//ZOOM
if($(".gallery").length>0){
    baguetteBox.run(".gallery", {
        // Custom options
    });
}
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
    <img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/

//POPUP
$(".pl").click(function(event) {
        var pl=$(this).attr("href").replace("#","");
        var v=$(this).data("vid");
    popupOpen(pl,v);
    return false;
});
function popupOpen(pl,v){
    $(".popup").removeClass("active").hide();
    if(!$(".header-menu").hasClass("active")){
        $("body").data("scroll",$(window).scrollTop());
    }
    if(!isMobile.any()){
        $("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock");
        $(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()});
    }else{
        setTimeout(function() {
            $("body").addClass("lock");
        },300);
    }
    //history.pushState('', '', "#"+pl);
    //if(v!='' && v!=null){
    //    $(".popup-"+pl+' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen
    //}
}