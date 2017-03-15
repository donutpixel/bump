function setScreen(screen){
  switch(screen){
    case 'feed':
    $('.content').attr('src','feed.html');
    $('#feed').css("background-color","#01FF70");
    $('#post').css("background-color","#2ECC40");
    $('#discover').css("background-color","#2ECC40");
    break;
    case 'post':
    $('.content').attr('src','post.html');
    $('#post').css("background-color","#01FF70");
    $('#feed').css("background-color","#2ECC40");
    $('#discover').css("background-color","#2ECC40");
    break;
    case 'discover':
    $('.content').attr('src','discover.html');
    $('#discover').css("background-color","#01FF70");
    $('#post').css("background-color","#2ECC40");
    $('#feed').css("background-color","#2ECC40");
  }
}
$( document ).ready(function(){

})
