import axios from "axios";
import { useEffect } from "react";
import Loading from "../../common/Loading";

function NaverCallback() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    const state = new URL(window.location.href).searchParams.get("state");
    console.log(code);
    console.log(state);

    axios.post('/api/client/login/oauth/naver', {
      authorizationCode: code,
      state: state
    }).then((response) => {
      //spring에서 발급된 jwt 반환
      console.log(response.headers.accesstoken);

      //localStorage 저장
      localStorage.setItem("accessToken", response.headers.accesstoken);

      //메인 페이지로 이동
      window.location.href = "/";
    }).catch((err) => {
      //에러발생 시 경고처리 후 login 페이지로 전환
      alert(err.response.data.detail);
      window.location.href = "/login";
    })
  }, []);

  return <Loading />
}

export default NaverCallback;