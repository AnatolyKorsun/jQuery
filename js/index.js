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

jQuery(function($){
    $('input[name="name"]').focus()
    $('input:focus').css({'color':'red'});;
})