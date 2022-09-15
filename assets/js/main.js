$(document).ready(function () {
  /*start  open and select country*/
//   $(".wrapper-country").hide();
//   $(".country").focus(function () {
//     $(".wrapper-country").show();
//   });
// $( ".wrapper-country" ).click(function( e ) { // задаем функцию при нажатии на элемент <button> или <input>
//     e.stopPropagation(); // предотвращаем всплытие события
//     $( ".wrapper-country" ).is( ":visible" ) ?  null : $( ".wrapper-country" ).fadeIn() // проверяем является ли элемент <input> видимым, если нет, то вызываем эффект fadeIn
                    
//     $( "html" ).one({ // приcоединяем функцию обработчика, которая будет выполнена не более одного раза по типу события "click"
//       "click": function( e ) { 
//       $( ".wrapper-country" ).is( ":visible" ) ? $( ".wrapper-country   " ).fadeOut() : null // проверяем является ли элемент <input> видимым, если да, то вызываем эффект fadeOut
//       }
//     })
//   })
  $(".wrapper-country ul li").click(function (e) {
    let text = $(this).val("li").text();
    $(".country").val(text);
  });
  /* finish open and select country*/
});
