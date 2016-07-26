
jQuery(document).ready(function($) {
  $('.slide-box').height($(window).height()-60);
  
    // document.oncontextmenu=function(){window.event.returnValue=false;};
  for(i in document.images)document.images[i].ondragstart=function(){return false;}; 
  $(window).on('scroll',function()
  {
    if($('.sc').length!=0){
      if($('.sc').offset().top<=$(window).scrollTop()+42)
      {
        $('.fu-sub-nav').removeClass('none');
      }
      else
      {
        $('.fu-sub-nav').addClass('none');
      }
    }
  });

   $('#gotop').click(function(){ 
        $('body,html').animate({
            scrollTop: 0
        },
        800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快

        return false;  
    })

   $(window).scroll(function(){
      t = $(document).scrollTop();       
  })


   
    // 侧滑
    $('.touch-switch,.slide-nav-wrap').on('touchstart',function()
    {
      $('.slide-nav-wrap').toggleClass('none');
    })

    $('.slide-nav-inner ').on('touchstart',function(event)
    {
      event.stopPropagation();
    })
    // 二级菜单
    var flag=false;
    $('#method').on('touchstart',function()
    {
      if(!flag)
      {
        flag=true;
        $('.more-nav').slideDown('300');
        $('#more-content').addClass('check');
      }else{
        flag=false;
        $('.more-nav').slideUp('300');
        $('#more-content').removeClass('check');
      }
      
    })
    // 第一页下滑
    $('#slide-img').on('touchstart',function()
    {
       $('html,body').animate({
        scrollTop: $(window).height()-60},
        'slow', function() {
        /* stuff to do after animation is complete */
       });
    })
    // 禁止弹层滚动
    $('.slide-nav-wrap ').on('touchmove',function()
    {
      return false;
    })
});