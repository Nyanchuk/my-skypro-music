import logoModal from "../../img/logo_modal.png";
import * as S from "./style"

const Registration = () => {
    return <S.Wrapper>
        <S.ContainerSignup>
          <S.ModalBlock>
            <S.ModalFormLogin>
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
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <S.ModalBtnSignup
            > Зарегистрироваться
            </S.ModalBtnSignup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerSignup>
      </S.Wrapper>
}

export default Registration;