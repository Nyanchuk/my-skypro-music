import logoModal from "../../img/logo_modal.png";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from './style'
import { UserContext } from "../../Context.js";
import { getToken, login } from "../../api";
import { validateEmail, validatePassword } from "../../helpers";

const Autorization = () => {

  const { setUserToken } = useContext(UserContext); 
  const { setUsername } = useContext(UserContext); 
  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");

  useEffect(() => {
    if (errorResponse) {
      const timer = setTimeout(() => {
        setErrorResponse('');
      }, 7000); // время до автоматического закрытия модального окна
      return () => clearTimeout(timer);
    }
  }, [errorResponse]);

  // ВСЕ ЗАПРОСЫ ПЕРЕНЕСЕНЫ В API.JS

  const handleLogin = async (e) => {
    e.preventDefault();

    const errorEmail = validateEmail(email);
    const errorPassword = validatePassword(password); 
    
    setEmailError(errorEmail);
    setPasswordError(errorPassword);

    if (errorPassword || errorEmail) {
        return;
    }

    setIsLoading(true);

    try {
      const data = await login({email, password});
      const tokenData = await getToken({email, password});
      setUserToken(tokenData.access);
      setUsername(data.username);
      setEmailError('');
      setPasswordError('');
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
            name="email"
            value={email}
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
          <S.ModalBtnEnter type="submit" disabled={isLoading} style={{opacity: isLoading ? 0.3 : 1}}>
            Войти
          </S.ModalBtnEnter>
          <S.ModalBtnSignup>
              <Link to="/register">Зарегистрироваться</Link>
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
    </S.ContainerEnter>
  </S.Wrapper>)
}

export default Autorization;

