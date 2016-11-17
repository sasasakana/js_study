$(function(){

  console.log('Hello');

  var array = ['a', 'yujiro'];


  var obj = {
    hoge: 'hoge',
    init: function(){
    },
    uses:['hoge', 'fuga', 'piyo']
  };


  $('li').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
      $('li').removeClass('active');
      $(this).addClass('active');
    }
  });

  $('#show').click(function(){
    $('#modal').css({'position':'absolute', 'top':'100px', 'left' : '100px'})
    $('#modal').fadeIn();
  });

});
