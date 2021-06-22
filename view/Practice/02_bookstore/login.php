<!DOCTYPE html>
<html lang="en">

<?php include_once './include/head.php'?>

<body>
    <div class="login_wrap">
        <div class="black_blind"></div>
        <div class="login_box">
            <h2><a href="index.php"><img src="./images/dummy-logo.png" alt="더미로고" width="150"></a></h2>
            <div class="double_box">

                <form class="login" action="#">
                    <p>아이디와 비밀번호를 입력해주세요</p>
                    <input type="text" placeholder="User Id">
                    <input type="password" placeholder="User Password" class="mb_15">

                    <div class="keep_id" id="login">
                        <input type="checkbox" name="login"><span>로그인 유지</span>
                    </div>
                    <a href="#" class="forgot_id">아이디를 잊으셨나요?</a>

                    <div class="for_border">
                        <a href="#" class="facebook">Facebook</a>
                        <a href="#" class="google">Goggle</a>
                        <a href="#" class="naver">Naver</a>
                        <a href="#" class="twitter">Twitter</a>
                    </div>

                    <a href="#" class="enter_login"><button>로그인 하기</button></a>

                    <p class="sign_up">아이디가 없으신가요? <a href="sign.php">회원가입하기</a></p>
                </form>

                <div class="social_login">

                </div>
            </div>

        </div>
    </div>
</body>

</html>