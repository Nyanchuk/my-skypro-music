import logoModal from "../../img/logo_modal.png";
import * as S from "./style";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleLoginChange = (e) => setLogin(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);

    let navigate = useNavigate();

    const handleSignup = (e) => {
      e.preventDefault();
        if (password !== repeatPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        const user = {
            login,
            password
        }

        localStorage.setItem("user", JSON.stringify(user));
        navigate("/login");
    }

    return <S.Wrapper>
        <S.ContainerSignup>
            <S.ModalBlock>
              <S.ModalFormLogin onSubmit={handleSignup}>
                    {/* <a href="../"> */}
                        <S.ModalLogo>
                            <img src={logoModal} alt="logo" />
                        </S.ModalLogo>
                    {/* </a> */}
                    <S.ModalInput
                        type="text"
                        name="login"
                        placeholder="Почта"
                        value={login}
                        onChange={handleLoginChange}
                    />
                    <S.ModalInput
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <S.ModalInput
                        type="password"
                        name="password"
                        placeholder="Повторите пароль"
                        value={repeatPassword}
                        onChange={handleRepeatPasswordChange}
                    />
                    <S.ModalBtnSignup type='submit'>
                      Зарегистрироваться
                    </S.ModalBtnSignup>
                    <S.ModalBtnSignup> 
                      <Link to="/login">Назад</Link>
                    </S.ModalBtnSignup>
                </S.ModalFormLogin>
            </S.ModalBlock>
        </S.ContainerSignup>
    </S.Wrapper>
}

export default Registration;
