$(document).ready(function () {
  /*start  open and select country*/
//   $(".wrapper-country").hide();
//   $(".country").focus(function () {
//     $(".wrapper-country").show();
//   });
$('.wrapper-country').click(function(){
    // скрываем все блоки
    $('.wrapper-country').css("display","none"); 
    // убираем активный класс для продукта
    // $(".wrapper-country").removeClass("product-active")
    // Показываем блок у данного продукта
    $(this).parent(".wrapper-country").children('.wrapper-country').css("display","block");
    // Данному продукта добавляем класс
    // $(this).parent(".product-one").addClass("product-active");
});
 
$(document).click(function (e){ // событие клика по веб-документу
    var div = $('.wrapper-country'); // тут указываем класс элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.hide(); // скрываем его
    }
});

  $(".wrapper-country ul li").click(function (e) {
    let text = $(this).val("li").text();
    $(".country").val(text);
  });
  /* finish open and select country*/
});
