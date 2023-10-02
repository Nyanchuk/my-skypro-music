import { styled } from 'styled-components';

// Стили для окна регистрации

export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
`
export const ContainerSignup = styled.div`
max-width: 100%;
height: 100vh;
margin: 0 auto;
position: relative;
background: radial-gradient(ellipse at center, #9b5de5, black);
`
export const ModalBlock = styled.div`
position: absolute;
z-index: 2;
left: calc(50% - (366px/2));
top: calc(50% - (439px/2));
opacity: 1;
`
export const ModalFormLogin = styled.form`
width: 366px;
height: 439px;
background-color: #FFFFFF;
border-radius: 12px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
gap: 10px;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
padding: 43px 44px 47px 40px;
`
export const ModalLogo = styled.div`
width: 140px;
height: 21px;
margin-bottom: 25px;
background-color: transparent;
`
export const ModalInput = styled.input`
margin-bottom: 20px;
width: 100%;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid #d0cece;
padding: 8px 1px;
&::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #d0cece;
}
`
export const ModalBtnSignup = styled.button`
width: 278px;
height: 52px;
background-color: #ad61ff;
border: none;
border-radius: 10px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
display: flex;
color: #583282;
display: -webkit-box;
display: -ms-flexbox;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
transition: all .4s;
&:hover {
  background-color: #7542ab;
}
&:active {
  background-color: #d9d9d9;
}
`