<template>
  <div>
    <a id="kakao-login-btn" href="javascript:loginWithKakao()">
      <img
        src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        width="222"
        alt="카카오 로그인 버튼"
      />
    </a>
    <p id="token-result"></p>
  </div>
</template>

methods: { kakaoLogin(){ window.Kakao.Auth.login ({ scope : "profile,
account_email', success : this.getKakaoAccount, }); }, getKakaoAccount(){
window.Kakao.API,request({ url:'/v2/user/me', success : res => { const
kakao_account = res.kakao_account; const nickname =
kakao_account.profile.nickname; const email = kakao_account.email
console.log('nickname', nickname); console.log('email', email) //로그인 처리
구현 alert("로그인 성공!"); }, fail : error => { console.log(error); } }) } }
