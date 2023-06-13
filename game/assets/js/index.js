// // function triggerAlert(){
// //     document.getElementById('paragraph').innerHTML = 'Hi!'
// // }

// // $("button").click(,'.circle',function(){

// //     alert(1)
// // })

// $("button").click(function(){
//     $("#paragraph").html('Hi')
//     $("a").css({
//         'color':'red',
//         'font-size':'30pt'
//     })
//     $("#paragraph").animate({
//         'font-size':'30pt'
//     },{
//         duration:1000,
//         queue:false,
//         complete:function(){

//         }
//     })
//     // $("#paragraph").fadeOut();
//     // $("#paragraph").fadeIn();

// })




var score = 0

$(document).on("click",'.circle',function(){
    var type = $(this).attr('data-type')
    if(type == 1){
        score = score + 3
    }else if(type == 2){
        score = score + 3
    }else if(type == 3){
        score = score + 2
    }else if(type == 4){
        score = score + 1
    }else{
        score = score + 1
    }

    $("#score").html(score)
    $(this).fadeOut()
})

var timer = 30;
var time = '';
var circles = 200

startGame()
function startGame(){
    timer = 30
    score = 0
    $("#score").html(score)

    for(var x=0;x<circles;x++){
        var size = Math.round((Math.random() * 4)) + 1
        var color = Math.round((Math.random() * 4)) + 1
        
        $("#game").append('<span data-type="'+color+'" style="left:'+(Math.random() * parseInt($('#game').css('width')))+'px;top:'+(Math.random() * parseInt($('#game').css('height')))+'px" class="circle circle'+size+' color'+color+'"></span>')
    }
    time = setInterval(function(){
        timer--
        $("#timer").html(timer < 10 ? '0'+timer:timer)
        if(timer == 0){
            clearInterval(time)
            if(confirm('Game over! Your total score is '+score+'. Do you wanna play again?')){
                startGame();
            }
        }
    },1000)
}
