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

// //height возвращает
// function height(){
//     const btnheight =$('#height');
// alert(btnheight.height())}


// height изменяет
function height(){
const btnheight =$('#height');
btnheight.height(300);}

// innerHeight
function innerHeight(){
    const btninnerHeight =$('#height');
    alert(btninnerHeight.innerHeight());
}

// outerHeight
function outerHeight(){
    const btnouterHeight =$('#height');
    $('#height').css('margin', 100)
    // btnouterHeight.outerHeight(1500);
    alert(btnouterHeight.outerHeight(true));
}

// width
function width(){
    const btnwidth =$('#width');
    btnwidth.width(500);
    alert(btnwidth.width());
}

// innerWidth
function innerWidth(){
    const btninnerWidth =$('#innerWidth');
    alert(btninnerWidth.innerWidth());
}

// outerWidth
function outerWidth(){
    const btnouterWidth =$('#outerWidth');
    alert(btnouterWidth.outerWidth());
    $('#outerWidth').css('margin', 100);
    alert(btnouterWidth.outerWidth(true));
}

// offset
function offset(){
    const btnoffset =$('#offset');
    alert(btnoffset.offset().left);
    alert(btnoffset.offset().top);
    $('#offset').offset({left:750,top:9512})
}

// scrollTop
function scrolTop(){
    const btnscrollTop =$('#scrollTop');
    alert($(document).scrollTop());
}

// //scrollTop
// $(document).scrollTop(9500)


// Добавление содеожимого----------------------------------------------------------------------

// html
function html(){
    const btnhtml =$('#html');
    // alert(btnhtml.html());
    // $('.html').html('<p>New html</p>')
    $('h3').html(function(ind, oldVal){
        if(ind%2 == 0){
            return oldVal.toUpperCase()
        }
    })
}

// / text
function tex(){
    const btntext =$('#text');
    alert(btntext.text());
    // btntext.text('some '+ 'changed-text')
}

// append
function append(){
    const newText =$('.append p').clone();
    //вырезает обект неоюходимо.clone()

    // $('#append ').append('<p>New html</p>')
    console.log(newText[0]);
    $('#append').append(newText[0])
}

// appendTo
function appendTo(){
   const newtext= $('#appendTo').clone()
   //вырезает обект неоюходимо.clone()
   newtext.appendTo($('.appendTo'))
//указать обьект.appendTo($('куда вставить'))
}

// prepend
function prepend(){
    const newtext= $('#prepend').clone()
    //вырезает обект неоюходимо.clone()
    $('.prepend').prepend(newtext)
    //куда вставить         что вставить

    //  $('.prepend').prepend(function(ind, oldVal){
    //  })
 }

 // after
function after(){
    const newtext= $('#after').clone()
    //вырезает обект неоюходимо.clone()
    $('.after').after(newtext)
 //($('куда вставить').after (указать обьект)
 }


  // insertAfter
function insertAfte(){
    const newtext= $('#insertAfter').clone()
    //вырезает обект неоюходимо.clone()
 newtext.insertAfter($('.insertAfter'))
 }

//  before
function before(){
    const newtext= $('#before').clone()
    //вырезает обект неоюходимо.clone()
    $('.before').before(newtext)
 //($('куда вставить').after (указать обьект)
 }

 //  insertBefore
function insertBefor(){
    const newtext= $('#insertBefore').clone()
    //вырезает обект неоюходимо.clone()
    newtext.insertBefore($('.insertBefore'))
}

//  wrap
function wrap(){
    $('.wrap').wrap($('<div class ="redClass"></div>'))
    //Во что обернуть $('<div... создаем тег
 }

 //  wrapAll
function wrapAll(){
    $('.wrapAll').wrapAll($('<div class ="redClass"></div>'))
    //Во что обернуть $('<div... создаем тег
 }

 // Удаление содержимого----------------------------------------------------------

  //  remove
  $('.remove').click(function(){
      alert('hello')
  })
//   вешаем слушателя
  $('.reremove').click(function(){
    const remSave = $('.remove').remove()
    $('#reMove').append(remSave)
})
// удаляем .remove() в переменную
// востанавливаем с переменной
// предидущий слушатель удален



  //  detach
  $('.detach').click(function(){
    alert('hello')
})
//   вешаем слушателя
$('.redetach').click(function(){
  const remSave = $('.detach').detach()
  $('#detach').append(remSave)
})
// удаляем .remove() в переменную
// востанавливаем с переменной
// предидущий слушатель РАБОТАЕТ

 //  empty
 function empty(){
    $('.empty').empty()
 }

  //  unwrap
  function unwrap(){
    $('.unwrap').unwrap()
 }

//  Анимационные еффекты-------------------------------------------------------

// Slider

// hide
 function hide(){
    $('.hide').hide()
 }
