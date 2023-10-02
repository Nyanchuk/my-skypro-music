import logoModal from "../../img/logo_modal.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from './style'

const Autorization = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser && storedUser.login === login && storedUser.password === password) {
      navigate("/");
    } else {
      alert("Пожалуйста введите корректные данные или пройдите регистрацию!");
    }
  };

  return (<S.Wrapper>
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin onSubmit={handleLogin}>
          <a href="../">
            <S.ModalLogo>
              <img src={logoModal} alt="logo" />
            </S.ModalLogo>
          </a>
          <S.ModalInput
            type="text"
            name="login"
            value={login}
            onChange={e => setLogin(e.target.value)}
            placeholder="Почта"
          />
          <S.ModalInput
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Пароль"
          />
          <S.ModalBtnEnter type="submit">
            Войти
          </S.ModalBtnEnter>
          <S.ModalBtnSignup>
              <Link to="/registration">Зарегистрироваться</Link>
          </S.ModalBtnSignup>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  </S.Wrapper>)
}

export default Autorization;
