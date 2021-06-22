<!DOCTYPE html>
<html lang="en">

<?php include_once './tamplate/head.php' ?>

<body>
    <?php include_once './tamplate/header.php' ?>

    <?php include_once './tamplate/side_nav.php' ?>

    <?php include_once './tamplate/tools.php' ?>

    <div class="main_head">
        <div class="img_box">
            <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d483d533558787d2af4870954d6418e&auto=format&fit=crop&w=1350&q=80"
                alt="도시1">
            <span class="blocker"></span>
        </div>

        <div class="text">
            <p>고객님의 소중한 후기에 감사드립니다.</p>
            <p>[엄체명] 고객 후기 모음</p>
        </div>
    </div>

    <div class="wrap">

        <div class="contents_wrap">
            <div class="title_box">
                <h3 class="fl">고객 구매 후기</h3>
                <form action="#" class="review_search">
                    <input type="text" placeholder="검색어를 입력하세요">
                    <button class="fas fa-search">검색</button>
                    <a href="#">글쓰기</a>
                </form>
            </div>
            <?php include_once './tamplate/grid_img_1.php' ?>        
        </div>

    </div>

    <?php include_once './tamplate/footer.php' ?>


</body>

</html>