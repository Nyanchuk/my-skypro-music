import { useUser } from '../../Context';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ isAllowed, children }) => {
  const { userToken } = useUser();
  let navigate = useNavigate(); //use navigate

  return isAllowed && Boolean(userToken)
    ? children
    : navigate("/login");
};
