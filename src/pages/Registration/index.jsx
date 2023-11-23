import logoModal from "../../img/logo_modal.png";
import * as S from "./style";
import React, { useState, useContext, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context.jsx";
import { getToken, registerUser } from "../../api";
import { registerValidatePassword, validateEmail } from "../../helpers";

const Registration = () => {
    const { setUserToken } = useContext(UserContext); 
    const { setUsername } = useContext(UserContext); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorResponse, setErrorResponse] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);

    useEffect(() => {
      if (errorResponse) {
        const timer = setTimeout(() => {
          setErrorResponse('');
        }, 7000); // время до автоматического закрытия модального окна
        return () => clearTimeout(timer);
      }
    }, [errorResponse]);

    const handleSignup = async (e) => {
        e.preventDefault();

    // ПРОВЕРКА ПАРОЛЯ

    const emailError = validateEmail(email);
    const passwordError = registerValidatePassword(password, repeatPassword);
    if (emailError || passwordError) {
        setEmailError(emailError);
        setPasswordError(passwordError);
        return;
    }

    setIsLoading(true);

    try {
        const data = await registerUser({email, password, username: email});
        const tokenData = await getToken({email, password});
        setUserToken(tokenData.access);
        setUsername(data.username);
        navigate("/");
    } catch (error) {
      let message = '';
      switch(error.statusCode) {   
          case 400:
              message = "Проблема с запросом";
              break;
          case 401:
              message = "Вы ввели неверные данные для входа";
              break;
          case 500:
              message = "Внутренняя ошибка сервера";
              break;
          default:
              message = "Неизвестная ошибка";
              break;
      }
      setErrorResponse(message);
  } finally {
      setIsLoading(false);
  }
}

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleSignup}>
            <S.ModalLogo>
              <img src={logoModal} alt="logo" />
            </S.ModalLogo>
            <S.ModalInput
              type="text"
              name="email"
              placeholder="Почта"
              value={email}
              onChange={handleEmailChange}
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
            <S.ModalBtnSignup type="submit" disabled={isLoading} style={{opacity: isLoading ? 0.3 : 1}}>
              Зарегистрироваться
            </S.ModalBtnSignup>
            <S.ModalBtnSignup>
              <Link to="/login">Назад</Link>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        {errorResponse && 
          <S.ModalError>
            <S.ModalErrorText>{errorResponse}</S.ModalErrorText>
            
          </S.ModalError>
        }    
          { emailError &&
          <S.ModalInputError>
              {emailError}
          </S.ModalInputError>
          }
          { passwordError &&
          <S.ModalInputError>
              {passwordError}
          </S.ModalInputError>
          }

        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  );
};

export default Registration;

