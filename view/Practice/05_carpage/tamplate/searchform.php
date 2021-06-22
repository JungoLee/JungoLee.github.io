<form action="#" class="search">
    <p>간편 차량 검색</p>
    <div class="center">
        <select name="" id="" class="custom-select sources" placeholder="제조사선택">
            <option value="1">현대</option>
            <option value="2">기아</option>
            <option value="3">한국GM</option>
            <option value="4">르노삼성</option>
        </select>
    </div>
    <div class="center">
        <select name="" id="" class="custom-select sources" placeholder="가격대">
            <option value="1">100만원~500만원</option>
            <option value="2">500만원~1000만원</option>
            <option value="3">1000만원~1500만원</option>
            <option value="4">1500만원~2000만원</option>
        </select>
    </div>
    <div class="center">
        <select name="" id="" class="custom-select sources" placeholder="차량모델">
            <option value="1">르망</option>
            <option value="2">맵시</option>
            <option value="3">매그너스</option>
            <option value="4">쉐보레 이쿼녹스</option>
        </select>
    </div>
    <div class="center">
        <select name="" id="" class="custom-select sources" placeholder="연식">
            <option value="1">2018년</option>
            <option value="2">2017년</option>
            <option value="3">2016년</option>
            <option value="4">2015년</option>
            <option value="5">2014년</option>
            <option value="6">2013년</option>
        </select>
    </div>
    <div class="center">
        <select name="" id="" class="custom-select sources" placeholder="주행거리">
            <option value="1">1 만km</option>
            <option value="2">2 만km</option>
            <option value="3">3 만km</option>
            <option value="4">4 만km</option>
            <option value="5">5 만km</option>
        </select>
    </div>

    <div class="button_box">
        <button class="not_btn width_50">현재 96001대 </button>
        <button type="submit" class="btn width_50">찾아보기 <span class="fas fa-long-arrow-alt-right"></span></button>
    </div>
</form>

<script>
   $(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});

$(".custom-select-trigger").on("click", function() {
  let par = $(this).parents(".custom-select");
    $('html').on('click',function() {
    $(".custom-select").removeClass("opened");
  });

  if (par.hasClass("opened")){
    par.removeClass("opened");
} else{
    $(".custom-select").removeClass("opened");
    par.hasClass("opened") ? par.removeClass("opened") : par.addClass("opened"); 

}
  
  event.stopPropagation();
});

$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});
</script>