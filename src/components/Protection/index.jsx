import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children, redirectPath = "/login", isAllowed }) => {
    const user = localStorage.getItem('user');
    if(!user) {
        return <Navigate to = {redirectPath} replace={true} />
    }
    return children;
}
