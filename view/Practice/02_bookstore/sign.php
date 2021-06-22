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
                    <p>회원가입을 위해 이름 / 비밀번호 <br> 이메일을 입력해주세요.</p>

                    <input type="text" placeholder="User Name">
                    <input type="text" placeholder="1900-01-01 Birth Day">

                    <input type="text" placeholder="E-mail [ ID ]">
                    <input type="text" placeholder="User Password">
                    
                    <a href="login.php" class="enter_login"><button>회원가입 완료 </button></a>

                    <p class="sign_up">아이디가 이미 있으신가요? <a href="login.php">로그인 하기</a></p>
                </form>

                <div class="social_login">

                </div>
            </div>

        </div>
    </div>
</body>

</html>