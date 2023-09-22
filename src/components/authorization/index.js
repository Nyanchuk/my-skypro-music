import logoModal from "../../img/logo_modal.png";
import * as S from './style'

const Autorization = () => {
    return <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
              <img src={logoModal} alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter>
              <a href="../index.html">Войти</a>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  }

  export default Autorization;