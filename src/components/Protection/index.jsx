import { useEffect } from 'react';
import { useUser } from '../../Context';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ isAllowed, children }) => {
  const { userToken } = useUser();
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
