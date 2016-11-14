define(function(require,exports,module){
    var Index = {
        init:function(){
            setInterval(function(){
                if( $(document).scrollTop() >= 30 ){
                    $('#header').removeClass('rel').addClass('fix');
                    $('#topHeader').addClass('active');
                    $('ul.manageMoney').addClass('active');
                }else{
                    $('#header').removeClass('fix').addClass('rel');
                    $('#topHeader').removeClass('active');
                    $('ul.manageMoney').removeClass('active');
                } 
            },1);
            $('ul.manageMoney').stop(true,false).slideUp(1);
            $('li.drags').on('mouseenter',function(){
                $('em',$(this)).html('&#xe694;');
                $('ul.manageMoney').stop(true,false).slideDown(600);
            }).on('mouseleave',function(){
                $('em',$(this)).html('&#xe652;');
                $('ul.manageMoney').stop(true,false).slideUp(600);
            });
            $('li.noBrather a').on('click',function(){
                $(this).parent('li.noBrather').addClass('active').siblings().removeClass('active');
            });
            $('li.drags a').on('click',function(){
                $('li.drags').addClass('active').siblings().removeClass('active');
            })
        }
    }
    module.exports = Index.init();
})
