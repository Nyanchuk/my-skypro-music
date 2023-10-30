import { useContext, useEffect } from 'react';
import UserContext, { useUser } from '../../Context';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ isAllowed, children }) => {
  const { userToken } = useContext(UserContext);
  
  let navigate = useNavigate(); //use navigate

  // ДЛЯ редиректа на страницу логина
  useEffect(() => {        
    if (!isAllowed || !userToken) {
      navigate("/login");
    }
  }, [isAllowed, userToken, navigate]);

  return <>{children}</>;

  // return isAllowed && Boolean(userToken)
  //   ? children
  //   : navigate("/login");
};
