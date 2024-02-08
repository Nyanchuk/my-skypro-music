import { styled } from 'styled-components';


// Стили для сайдбара

export const MainSidebar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
height: 100vh;
`
export const SidebarPersonal = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
padding: 12px 0 15px 0;
`
export const SidebarPersonalName = styled.p`
color: #ffffff;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 16px;
transition: all .3s;
&:hover {
  text-shadow: 0 0 7px violet;
  color: violet;
}
`
export const Icon = styled.div`
width: 43px;
height: 43px;
border-radius: 50%;
cursor: pointer;
`
export const SidebarBlock = styled.div`
margin-bottom: 200px;
height: 100%;
padding: 140px 0 0 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
export const SidebarList = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
export const SidebarItem = styled.div`
width: 250px;
height: 150px;
margin-bottom: 30px;
transition: all .3s;
&:hover {
    /* transform: scale(1.02); */
    box-shadow: 0 0 10px #4e4e4e;
  }
`
export const SidebarLink = styled.a`
width: 100%;
height: 100%;
`
export const SidebarImg = styled.img`
width: 100%;
height: auto;
`
export const SidebarSkeleton = styled.div`
width: 250px;
height: 170px;
border-radius: 4px;
background-color: #e0e0e035;
animation: pulse 2s ease-in-out infinite;

@keyframes pulse {
    0% {
      background-color: #e0e0e035;
    }
    50% {
      background-color: #e0e0e050;
    }
    100% {
      background-color: #e0e0e035;
    }
  }
`
