import "./style.css";
import logoModal from "../../img/logo_modal.png";


export function autorization() {
    return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <a href="../">
              <div className="modal__logo">
              <img src={logoModal} alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter">
              <a href="../index.html">Войти</a>
            </button>
            <button
              className="modal__btn-signup"
            > Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
    ); 
  }