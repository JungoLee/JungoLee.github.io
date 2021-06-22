<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Keywords"
        content="이시우, Leesiwoo 포트폴리오,이시우 포트폴리오, portfolio, jungo's portfolio, 웹디자인, web design, 퍼블리셔, publisher" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="refresh" content="300">
    <meta name="author" content="Lee Siwoo">
    <meta name="description" content="Lee Siwoo Web project Portfolio">
    <meta name="naver-site-verification" content="67f066eaf6dcbc2fd6760e4f8394a1496f687750" />


    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/src/css/style.css?v=<?= date_timestamp_get(date_create())?>">
    <link rel="stylesheet" href="/src/css/gallery.css?v=<?= date_timestamp_get(date_create())?>">
    <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css?v=<?= date_timestamp_get(date_create())?>">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">

    <script src="//code.jquery.com/jquery-latest.min.js"></script>

    <script src="/src/js/script.js?v=<?= date_timestamp_get(date_create())?>"></script>

    <title>Jungo's Portfolio</title>
</head>


<body>
    <!-- Swiper -->
    <div class="swiper-container my-swiper01">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img class="this_width" src='//drive.google.com/uc?export=view&id=13GQ9-e5L_TyDICDZvavJ8KP29MfiFl49' /></div>
            <div class="swiper-slide"><img class="this_width" src='//drive.google.com/uc?export=view&id=1BbSR-lsoP7eJyFIoSL48hUDEyVE_766O' /></div>
            <div class="swiper-slide"><img class="this_width" src='//drive.google.com/uc?export=view&id=1jWScsyzYdvf4DFhB0L5wo4pQd9nddTyS' /></div>
            <div class="swiper-slide"><img class="this_width" src='//drive.google.com/uc?export=view&id=1bReyHuLiRxAWmjmKeV3XnL5K4cjasC4Q' /></div>
            <div class="swiper-slide"><img class="this_width" src='//drive.google.com/uc?export=view&id=16CnNneVQQMuflFquxMHGnaPhwxuWhLsN' /></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>

    <!-- Swiper JS -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
  var swiper = new Swiper('.my-swiper01', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    $(function(){

        var findWidth = $('.swiper-slide .this_width [class^="swiper-slide-shadow"]').each(function(){
            $(this).width(function(){
                $(this).siblings('img').width();
            });
        })
        
    });
    
    </script>





</body>

</html>