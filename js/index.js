// Вызов------------------------------------------------------

// jQuery()
// $()

// $(document).ready()

// $(function(){})

// Selector---------------------------------------------------

$('.grid-6 .text-1' ).css({'border':'1px solid black'});
// 'Родитель селектор'
$('.text-2','.grid-6' ).css({'border':'1px solid red'});
// 'Селектор', 'родитель'

$('span, h4, p', '.tag').css({'border':'1px solid orange','border-radius':'25px'})
// 'Несколько селектров',' родитель'

$('.tag > *').css({'background-color':'grey'})
// 'Родитель > дети все'

$('.parent-tag + span').css({'color':'orange'})
// Родитель + ребенок след.

// ('.parent-tag ~ span').css({'color':'orange'})
// Родитель + все дети след.


const obj = $('.tag > *')
console.log(obj);
console.log(obj[0]);

 
$('[href]').css({'font-size':'30px'})

// Фильтры-----------------------------------------------------

// $('input').css({'color':'red'})

// jQuery(function($){
//     $('input[name="name"]').focus()
//     $('input:focus').css({'color':'red'});;
// })

// $("*:header").css({'color':'red'});

// $("*:even").css({'color':'yellow'});

// $("*:odd").css({'color':'purple'});


// Атрибуты---------------------------------------------------------
//Прочитать
// $(function func(){
//     const atrib = $('.atr'); 
//     alert(atrib.attr('id'));
// })

//Заменить
function changeAtr(){
    const atrib = $('.atr');
    if(atrib.attr('id')){
       // atrib.attr('id','changed-id') 
        // Замена "атр","на что заменить"

       atrib.attr('id',function(ind, newAtr){
        // Замена "атр","на что заменить"
           return 'changes-id'
       }) 
};
    alert(atrib.attr('id'));
};

// Удалить
function removeAtr(){
    const atrib = $('.remove-atr');
    atrib.removeAttr('src')
};

// hasClass
function hasClass(){
    const btnHasClass =$('#hasClass')
if(btnHasClass.hasClass('redClass')){
    btnHasClass.attr('class', 'greenClass')
}else{
    btnHasClass.attr('class', 'redClass')
}
};

// add Class
function addClass(){
    const btnaddClass =$('#addClass');
    btnaddClass.addClass('greenClass');
}


//removeClass
function removeClass(){
    const btnremoveClass =$('#removeClass');
    btnremoveClass.removeClass('greenClass');
}

// //toggleClass
// function toggleClass(){
//     const btntoggleClass =$('#toggleClass');
//     btntoggleClass.toggleClass('greenClass');
//                // тоглит класс
// }

//toggleClass
function toggleClass(){
    const btntoggleClass =$('#toggleClass');
    btntoggleClass.toggleClass(function(ind, tekSodergimoe){
        if(tekSodergimoe === 'redClass'){
            return 'greenClass'
        }else if(tekSodergimoe == 'redClass greenClass'){
            return'redClass greenClass'
        } return 'redClass'
    });
};

//val() изменяет
// function val(){
//     $('input[name=name]').val('hello');
// }

// val возвращает
function val(){
    alert($('input[name=name]').val())
}

// // val возвращает значение индекса
// $('input[name=name]').val(function(ind, tekZnach){
//         return ind
// })

//Работа с параметрами и стилями---------------------------------------------------

// //css изменяем
// function css(){
//     const btncss =$('#css');
//     btncss.css('font-size', 50)
//             // 'правило', значение
// }

// //css считываем
// function css(){
//     const btncss =$('#css');
//    alert(btncss.css('font-size'))
//             // 'правило'
// }

// //css изменяем обьектом
// function css(){
//     const btncss =$('#css');
// btncss.css({'font-size':'25px', 'color':'red', 'marginBottom':'100px'})}
//             // 'правило обьект'

//             // margin-top => marginTop



//css изменяем функцией
function css(){
    const btncss =$('#css');
btncss.css('fontSize', function(ind, tekZnach){
return (ind+35)*2
}  )}