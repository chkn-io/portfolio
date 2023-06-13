// var ind = 0
// function changeText(){
//     var obj = document.getElementById('text')
//     if(ind == 0){
//         obj.innerHTML = 'Hi'
//         obj.style.color = 'red'
//         ind = 1
//     }else{
//         obj.innerHTML = 'Hello'
//         obj.style.color = 'black'
//         ind = 0
//     }
// }

$('button').click(function(){
    $('#text').html('Hi')
    $('#text').css({
        'color':'red',
        'font-size':'12pt',
        'padding':'10pt',
        'border':'1px solid red'
    })

   
    $('#text').css("width")
    $('#text').val()
    // $('#text').fadeOut()
    // $('#text').fadeIn()
    // $('#text').slideDown()

    // $('#text').animate({
    //     'font-size':'50pt',
    //     'color':'green'
    // },2000)

    $('#text').animate({
        'font-size':'50pt',
        'color':'green'
    },{
        duration:2000,
        complete:function(){
            alert(1)
        }
    })

})