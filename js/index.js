// Вызов------------------------------------------------------

// jQuery()
// $()

// $(document).ready()

// $(function(){})

// Selector---------------------------------------------------

$(".grid-6 .text-1").css({ border: "1px solid black" });
// 'Родитель селектор'
$(".text-2", ".grid-6").css({ border: "1px solid red" });
// 'Селектор', 'родитель'

$("span, h4, p", ".tag").css({
  border: "1px solid orange",
  "border-radius": "25px",
});
// 'Несколько селектров',' родитель'

$(".tag > *").css({ "background-color": "grey" });
// 'Родитель > дети все'

$(".parent-tag + span").css({ color: "orange" });
// Родитель + ребенок след.

// ('.parent-tag ~ span').css({'color':'orange'})
// Родитель + все дети след.

const obj = $(".tag > *");
console.log(obj);
console.log(obj[0]);

$("[href]").css({ "font-size": "30px" });

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
function changeAtr() {
  const atrib = $(".atr");
  if (atrib.attr("id")) {
    // atrib.attr('id','changed-id')
    // Замена "атр","на что заменить"

    atrib.attr("id", function (ind, newAtr) {
      // Замена "атр","на что заменить"
      return "changes-id";
    });
  }
  alert(atrib.attr("id"));
}

// Удалить
function removeAtr() {
  const atrib = $(".remove-atr");
  atrib.removeAttr("src");
}

// hasClass
function hasClass() {
  const btnHasClass = $("#hasClass");
  if (btnHasClass.hasClass("redClass")) {
    btnHasClass.attr("class", "greenClass");
  } else {
    btnHasClass.attr("class", "redClass");
  }
}

// add Class
function addClass() {
  const btnaddClass = $("#addClass");
  btnaddClass.addClass("greenClass");
}

//removeClass
function removeClass() {
  const btnremoveClass = $("#removeClass");
  btnremoveClass.removeClass("greenClass");
}

// //toggleClass
// function toggleClass(){
//     const btntoggleClass =$('#toggleClass');
//     btntoggleClass.toggleClass('greenClass');
//                // тоглит класс
// }

//toggleClass
function toggleClass() {
  const btntoggleClass = $("#toggleClass");
  btntoggleClass.toggleClass(function (ind, tekSodergimoe) {
    if (tekSodergimoe === "redClass") {
      return "greenClass";
    } else if (tekSodergimoe == "redClass greenClass") {
      return "redClass greenClass";
    }
    return "redClass";
  });
}

//val() изменяет
// function val(){
//     $('input[name=name]').val('hello');
// }

// val возвращает
function val() {
  alert($("input[name=name]").val());
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
function css() {
  const btncss = $("#css");
  btncss.css("fontSize", function (ind, tekZnach) {
    return (ind + 35) * 2;
  });
}

// //height возвращает
// function height(){
//     const btnheight =$('#height');
// alert(btnheight.height())}

// height изменяет
function height() {
  const btnheight = $("#height");
  btnheight.height(300);
}

// innerHeight
function innerHeight() {
  const btninnerHeight = $("#height");
  alert(btninnerHeight.innerHeight());
}

// outerHeight
function outerHeight() {
  const btnouterHeight = $("#height");
  $("#height").css("margin", 100);
  // btnouterHeight.outerHeight(1500);
  alert(btnouterHeight.outerHeight(true));
}

// width
function width() {
  const btnwidth = $("#width");
  btnwidth.width(500);
  alert(btnwidth.width());
}

// innerWidth
function innerWidth() {
  const btninnerWidth = $("#innerWidth");
  alert(btninnerWidth.innerWidth());
}

// outerWidth
function outerWidth() {
  const btnouterWidth = $("#outerWidth");
  alert(btnouterWidth.outerWidth());
  $("#outerWidth").css("margin", 100);
  alert(btnouterWidth.outerWidth(true));
}

// offset
function offset() {
  const btnoffset = $("#offset");
  alert(btnoffset.offset().left);
  alert(btnoffset.offset().top);
  $("#offset").offset({ left: 750, top: 9512 });
}

// scrollTop
function scrolTop() {
  const btnscrollTop = $("#scrollTop");
  alert($(document).scrollTop());
}

// //scrollTop
// $(document).scrollTop(9500)

// Добавление содеожимого----------------------------------------------------------------------

// html
function html() {
  const btnhtml = $("#html");
  // alert(btnhtml.html());
  // $('.html').html('<p>New html</p>')
  $("h3").html(function (ind, oldVal) {
    if (ind % 2 == 0) {
      return oldVal.toUpperCase();
    }
  });
}

// / text
function tex() {
  const btntext = $("#text");
  alert(btntext.text());
  // btntext.text('some '+ 'changed-text')
}

// append
function append() {
  const newText = $(".append p").clone();
  //вырезает обект неоюходимо.clone()

  // $('#append ').append('<p>New html</p>')
  console.log(newText[0]);
  $("#append").append(newText[0]);
}

// appendTo
function appendTo() {
  const newtext = $("#appendTo").clone();
  //вырезает обект неоюходимо.clone()
  newtext.appendTo($(".appendTo"));
  //указать обьект.appendTo($('куда вставить'))
}

// prepend
function prepend() {
  const newtext = $("#prepend").clone();
  //вырезает обект неоюходимо.clone()
  $(".prepend").prepend(newtext);
  //куда вставить         что вставить

  //  $('.prepend').prepend(function(ind, oldVal){
  //  })
}

// after
function after() {
  const newtext = $("#after").clone();
  //вырезает обект неоюходимо.clone()
  $(".after").after(newtext);
  //($('куда вставить').after (указать обьект)
}

// insertAfter
function insertAfte() {
  const newtext = $("#insertAfter").clone();
  //вырезает обект неоюходимо.clone()
  newtext.insertAfter($(".insertAfter"));
}

//  before
function before() {
  const newtext = $("#before").clone();
  //вырезает обект неоюходимо.clone()
  $(".before").before(newtext);
  //($('куда вставить').after (указать обьект)
}

//  insertBefore
function insertBefor() {
  const newtext = $("#insertBefore").clone();
  //вырезает обект неоюходимо.clone()
  newtext.insertBefore($(".insertBefore"));
}

//  wrap
function wrap() {
  $(".wrap").wrap($('<div class ="redClass"></div>'));
  //Во что обернуть $('<div... создаем тег
}

//  wrapAll
function wrapAll() {
  $(".wrapAll").wrapAll($('<div class ="redClass"></div>'));
  //Во что обернуть $('<div... создаем тег
}

// Удаление содержимого----------------------------------------------------------

//  remove
$(".remove").click(function () {
  alert("hello");
});
//   вешаем слушателя
$(".reremove").click(function () {
  const remSave = $(".remove").remove();
  $("#reMove").append(remSave);
});
// удаляем .remove() в переменную
// востанавливаем с переменной
// предидущий слушатель удален

//  detach
$(".detach").click(function () {
  alert("hello");
});
//   вешаем слушателя
$(".redetach").click(function () {
  const remSave = $(".detach").detach();
  $("#detach").append(remSave);
});
// удаляем .remove() в переменную
// востанавливаем с переменной
// предидущий слушатель РАБОТАЕТ

//  empty
function empty() {
  $(".empty").empty();
}

//  unwrap
function unwrap() {
  $(".unwrap").unwrap();
}

//  Анимационные еффекты-------------------------------------------------------

// Slider

// hide
function hide() {
  // $('.hide').hide(2000)
  // $('.hide').hide('slow')
  // $('.hide').hide('normal')
  // $('.hide').hide('fast')
  $(".hide").hide({
    duration: "fast",
    easing: "linear",
    complete: function () {
      console.log(" hide done");
    }, // функция по завершению
    // queue:false //в очереды не попадет -мгновенно
    queue: "fx", // по умолчанию в очередь
  });
}

// show
function show() {
  $(".hide").show(2000);
  // $('.hide').hide('slow')
  // $('.hide').hide('normal')
  // $('.hide').hide('fast')
}

//  hide show
function hideShow() {
  const img = $(".hide");
  if (img.css("display") !== "none") {
    img.slideUp(2000, function () {
      // ф-я выполнится после анимационных ефф
      const text = $('<p style="margin:100px" id="mytext">Some text</p>');
      text.insertAfter($(this)).hide().show(1000);
      //this указывает на выбраный елемент
    });
  } else {
    $("#mytext").hide(500, "linear", function () {
      //    linear протекание линейная
      //    swing с ускорением
      img.show("fast");
      $(this).remove();
      //this указывает на выбраный елемент
    });
    // в етой обл remove отработает без выдержки не в очереди анимации
  }
}

// toggle
function toggle() {
  // $('.toggle').toggle(1000)
  // $('.toggle').toggle('slow')
  // $('.toggle').toggle('normal')
  // $('.toggle').toggle('fast')
  $(".toggle").toggle({
    duration: "fast",
    easing: "linear",
    complete: function () {
      console.log(" toggle done");
    }, // функция по завершению
    // queue:false //в очереды не попадет -мгновенно
    queue: "fx", // по умолчанию в очередь
  });
}

// slideUp
function slideU() {
  // $('.slideUp').slideUp(2000)
  // $('.slideUp').slideUp('slow')
  // $('.slideUp').slideUp('normal')
  // $('.slideUp').slideUp('fast')
  $(".slideUp").slideUp({
    duration: "slow",
    easing: "linear",
    complete: function () {
      console.log(" slideUp done");
    }, // функция по завершению
    // queue:false //в очереды не попадет -мгновенно
    queue: "fx", // по умолчанию в очередь
  });
}

// slideDown
function slideDown() {
  // $('.slideUp').slideDown(2000)
  // $('.slideUp').slideDown('slow')
  // $('.slideUp').slideDown('normal')
  // $('.slideUp').slideDown('fast')
  $(".slideUp").slideDown({
    duration: "slow",
    easing: "linear",
    complete: function () {
      console.log(" slideDown done");
    }, // функция по завершению
    // queue:false //в очереды не попадет -мгновенно
    queue: "fx", // по умолчанию в очередь
  });
}

// slideToggle
function slideToggle() {
  // $('.slideToggle').slideToggle(2000)
  // $('.slideToggle').slideToggle('slow')
  // $('.slideToggle').slideToggle('normal')
  // $('.slideToggle').slideToggle('fast')
  $(".slideToggle").slideToggle({
    duration: "slow",
    easing: "linear",
    complete: function () {
      console.log(" slideToggle done");
    }, // функция по завершению
    // queue:false //в очереды не попадет -мгновенно
    queue: "fx", // по умолчанию в очередь
  });
}

// fadeOut
function fadeOut() {
  // $('.fadeOut').fadeOut(2000)
  // $('.fadeOut').fadeOut('slow')
  // $('.fadeOut').fadeOut('normal')
  // $('.fadeOut').fadeOut('fast')
  $(".fadeOut").fadeOut({
    duration: "slow",
    easing: "linear",
    complete: function () {
      console.log(" fadeOut done");
    }, // функция по завершению
    // queue:false //в очереды не попадет -мгновенно
    queue: "fx", // по умолчанию в очередь
  });
}

// fadeIn
function fadeIn() {
  // $('.fadeOut').fadeIn(2000)
  // $('.fadeOut').fadeIn('slow')
  // $('.fadeOut').fadeIn('normal')
  // $('.fadeOut').fadeIn('fast')
  $(".fadeOut").fadeIn({
    duration: "slow",
    easing: "linear",
    complete: function () {
      console.log(" fadeIn done");
    }, // функция по завершению
    // queue:false //в очереды не попадет -мгновенно
    queue: "fx", // по умолчанию в очередь
  });
}

// fadeToggle
function fadeToggle() {
  // $('.fadeToggle').fadeToggle(2000)
  // $('.fadeToggle').fadeToggle('slow')
  // $('.fadeOut').fadeToggle('normal')
  // $('.fadeToggle').fadeToggle('fast')
  $(".fadeToggle").fadeToggle({
    duration: "slow",
    easing: "linear",
    complete: function () {
      console.log(" fadeToggle done");
    }, // функция по завершению
    // queue:false //в очереды не попадет -мгновенно
    queue: "fx", // по умолчанию в очередь
  });
}

// fadeTo
function fadeTo() {
  // $('.fadeTo').fadeTo(1000, 0.2)
  // $('.fadeTo').fadeTo('slow', 0.2)
  // $('.fadeTo').fadeTo('normal', 0.2)
  $(".fadeTo").fadeTo("fast", 0.2);
}

// animation
function animat() {
  const sliderWidth = $(".slider-item").outerWidth();
  const sliderWrap = $(".slider-wrap");
  const scrollSlider = sliderWrap.position().left - sliderWidth;
  // выберем смещение слайдера
  function sl() {
    sliderWrap.animate(
      {
        left: scrollSlider,
        opacity: 0.5,
      },
      1000,
      "linear",
      function () {
        sliderWrap
          .find(".slider-item:first")
          .appendTo(sliderWrap)
          .parent()
          .css({ left: 0 });
        // выберем первый слайдер              добавим его в конец -вернем родителя-обнулим растояние
      }
    );
  }
  setInterval(sl, 3000);
}

// queue очередь
function queu() {
  $(".queue ")
    .fadeTo(1000, 0.2)
    .hide(1000)
    .delay(1000) //delay
    .fadeIn(1000)
    .animate({ fontSize: "40px" })
    .delay(1000) //delay
    .slideUp(1000)
    .queue(function () {
      //Поставит в очередь замену текста
      $(this).text("Some text Queue"); // добавит в очередь без запуска
      $(this).dequeue(); //запустит
    })
    .text("Some text") //new text без очереди заменит сразу
    .show(1000)
    .stop() // остановит выполнение отменяет другие анимации
    .fadeTo(1000, 1);
}

//   queu своя очередь
function que() {
  $(".queu")
    .queue("myqueue", function () {
      // имя очереди
      $(this).animate({ fontSize: "35px" });
      // анимация
      $(this).dequeue("myqueue");
      // запуск с именем очереди
    })
    .delay(1000, "myqueue")
    // задержка для очереди
    .queue("myqueue", function () {
      $(this).text("New text");
      $(this).dequeue("myqueue");
      // запуск с именем очереди
    })
    .queue("myqueue", function () {
      $(this).hide(1000).show(1000);
      $(this).dequeue("myqueue");
      // запуск с именем очереди
    })
    .dequeue("myqueue");
}

// События------------------------------------------------------------------------

// mouseenter
function mouseenter() {
  $(".mouseenter")
    .stop()
    .mouseenter({ a: " hello ", b: " word " }, function (event) {
      // stop отменит другие анимации // пример передачи в ф-ю параметры
      alert("mouseenter" + event.data.a + event.data.b);
    });
}

// mouseleave
function mouseleave() {
  $(".mouseleave")
    .stop()
    .mouseleave({ a: " hello ", b: " word " }, function (event) {
      // stop отменит другие анимации    // пример передачи в ф-ю параметры
      alert("mouseleave" + event.data.a + event.data.b);
    });
}

// hover
function hover() {
  $(".hover").hover(
    function () {
      alert("mouseenter");
    },
    // mouseenter обработчик
    function () {
      alert("mouseleave");
    }
  );
  // mouseleave обработчик
}

// mouseover
function mouseover() {
  $(".mouseover").mouseover({ a: " hello ", b: " word " }, function (event) {
    // stop отменит другие анимации // пример передачи в ф-ю параметры
    alert("mouseover" + event.data.a + event.data.b);
  });
}

// mouseout
function mouseout() {
  $(".mouseout").mouseout({ a: " hello ", b: " word " }, function (event) {
    // stop отменит другие анимации // пример передачи в ф-ю параметры
    alert("mouseout" + event.data.a + event.data.b);
  });
}

// mousemoove
function mousemov() {
  $(".mousemove").mousemove(function (event) {
    $(".mouseOut").text(
      "Координата Х -" + event.pageX + "Координата У-" + event.pageY
    );
  });
}

// click
function clic() {
  $(".click").click(function (event) {
    event.preventDefault();
    //     //отменим стандарный переход href
    $(this).append(" Click ");
  });
}

// dblclick
function dblclic() {
  $(".dblclick").dblclick(function (event) {
    event.preventDefault();
    //     //отменим стандарный переход href
    $(this).append(" dblclick ");
  });
}

//   События клавиатуры---------------------------------------------------------

// keydown
function keydow() {
  $(".keydown").keydown(function (event) {
    alert(event.which);
    // код символа
  });
}

// keyup
function keyup() {
  $(".keyup").keyup(function (event) {
    // alert(event.which);

    const key = $(".keydown");
    key.val($(this).val());
    // повторяет символы в keydown
  });
}

// keypress
function keypres() {
  $(".keypress").keypress(function (event) {
    // alert(event.which);

    const key = $(".keydown");
    key.val($(this).val());
    // повторяет символы в keydown
  });
}

//   События формы----------------------------------------------------------------

// focus
function focu() {
  // $(".focus").focus()
  $(".focus").focus({ a: " hello ", b: " word " }, function () {
    $(this).val("Введите текст");
  });
}

// blur
function blu() {
  $(".blur").blur(function () {
    alert("blur");
  });
}

// focusin
function focusi() {
  $(".focusin").focusin({ a: " hello ", b: " word " }, function () {
    alert("focusin");
  });
}

// focusout
function focusou() {
  $(".focusout").focusout({ a: " hello ", b: " word " }, function () {
    alert("focusout");
  });
}

// select
function selec() {
  $(".select").select({ a: " hello ", b: " word " }, function () {
    alert("select");
  });
}

// submit
function submi() {
  // $(".btnsubmit").click(function (e) {
  //   e.preventDefault();
  //  //Отмена отправки
  //   alert("submit");
  // });

  $("form").submit(function (e) {
    //отследим отправку формы
    e.preventDefault();
    $('.btnsubmit').text($('.inpsubmit').val())
  });
}

// change
function chang() {
  $(".changename").change({ a: " hello ", b: " word " },function (e) {
    const email =$('.changemail');
    email.val($('.changename').val());
  });
};

// События загрузки страницы-------------------------------------------------------
// ready
// $(document).ready(function(){
//   alert('.ready()' )
// })

// // load
// $( "#load" ).load( function(){
//   alert('.load()')}
//   );

// unload
// $(document).ready(function(){
  // $(window).on( "unload", function(){
  //   alert("Goodbye!");
  // });
// });
$(document).on( "unload", function() {
  alert("unload()");
});

// События браузера--------------------------------------------------------------

// error
$( "#error" ).on( "error", function() {
    alert( "Handler for .error() called." )
  })

  // resize
  $(window).trigger( "resize", function() {
    alert( "resize" )
  })

   // scroll
  function scrol(){
    const scrol = $('#scroll');
    scrol.scroll($(window).scrollTop())
  }

   $( window ).scrollTop(function() {
     if ($(this).scrollTop() >500){
       $('.scrollTop').fadeIn(500)
     }
  })
  $('.scrollTop').click(function(){
    $(window).scrollTop(0)
  })

// Универсальные методы--------------------------------------------------------

// on
// function onn() {
// $("#on").on( "mouseout click ", function(e) {
//   e.preventDefault()
//   $("#on").append($('<a>Item 1</a>'))
//   // alert( "on" )
// })}

function onn() {
  $("#on").on( {mouseout:function(){alert('mouseout')}, click: function() {alert("click")
                // Несколько ф-й в обьекте
}})}

// on делегирование
$('.rootOn').on('click','a', function(e){
  // вешаем на родителя("свойство","для кого", ф-я)
  e.preventDefault()
  addNew = $('.rootOn');
  addNew.append($('<a href="#rootOn">.on() делегирование</a>'));
})
// $('.rootOn').click('a', function(e){
//   e.preventDefault()
//   addNew = $('.rootOn');
//   addNew.append($('<a href="#rootOn">.on() делегирование</a>'));
// })

// off
$('#rootOff').on('click','a', function(e){
  e.preventDefault()
  addNew = $('#rootOff');
  addNew.append($('<a href="#rootOff">.off()</a>'));
})
function of(){
  $('#rootOff').off()
}  

// one
function onee() {
  $('#one').one('mouseenter',function(){
    alert('one() один раз')
  })
}

// trigger
function trigge() {
  $('#trigger').mouseenter(function(){
    alert('click trigger')
  })
  $('#trigger').trigger('mouseenter');
}

// userevent
function userevent() {
  $('#userevent').on('userevent',function(){
    alert('userevent')
  })
  $('#userevent').trigger('userevent');
}

// trigerHandler
function trigerHandler() {
  $('#trigerHandler').on('mouseenter',function(){
    alert('mouseenter trigerHandler')
  })
  $('#trigerHandler').triggerHandler('mouseenter');
}

//Методы выбраных елементов-----------------------------------------------------------------------------

// children
function childre() {
  $("#childre").children().css({ border: "1px solid red" });
  $("#childre").children('p').css({ border: "1px solid white" });
}

// closest
function closes() {
  $(".closest").closest('div').css({ border: "1px solid red" });
}

// find
function fin() {
  $("ul").find("li.find").css({ border: "1px solid red" });
  // $('ul li.find').css({ border: "1px solid red" });
}

// next
function nex() {
  $(".next").next().next().css({ border: "1px solid red" });
}

// nextAll
function nextAl() {
  $(".nextAll").nextAll().css({ border: "1px solid red" });
}

// nextUntil
function nextUnti() {
  $("#nextUntil").nextUntil().css({ border: "1px solid red" });
}