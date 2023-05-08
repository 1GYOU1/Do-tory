$('.main .button').on('click', function(){
    $('.main').hide();
    $('.card_section').show();
    $('.card_section ul li .card_wrap').stop().addClass('on');
    setTimeout(function(){
        $('.card_section ul li .card_wrap').stop().removeClass('on');
    },2000)

});

$('.card_section > ul > li .card_wrap').on('click', cardOpen)

function cardOpen(el){
    $(this).addClass('on')
    cardMatch(el)
    
};

let elArr = [];
const cardWrap = $('.card_section > ul > li .card_wrap');

function cardMatch(el){
    const liClass = el.target.closest('li').className;
    elArr.push(liClass);
    
    if(elArr.length%2 == 0){
        if(elArr[elArr.length-1] == elArr[elArr.length-2]){
            setTimeout(function(){
                $(`.${liClass}`).stop().addClass('off');
            },800)

            setTimeout(clearGame, 1000);

        }else{
            setTimeout(removeOn,800);
        }
    }
};

function removeOn(){
    cardWrap.stop().removeClass('on')
};

function clearGame(){
    if($(".card_section ul li.off").length == 12) {
        $('.card_section').hide();
        $('.result').show();
    }
};

function reload(){
    window.location.reload()
}
