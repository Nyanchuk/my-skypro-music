import { Route, Routes } from "react-router-dom"
import Authorization from "./pages/Authorization/index"
import Registration from "./pages/Registration/index"
import PageLayout from "./pages/PageLoyuot/index"
import { ProtectedRoute } from "./components/Protection"
import UserContext from "./Context"
import { useContext } from "react"

export const AppRoutes = () => {

    const { userToken } = useContext(UserContext); // Получаем userToken для входа

    return (
        <Routes>
            {/* Незащищенные страницы */}
            <Route path="/login" element= {<Authorization />}></Route>
            <Route path="/register" element= {<Registration />}></Route>

            {/* Защищенные страницы */}

            {/* <Route path="/category/:id" element={
                <ProtectedRoute isAllowed={Boolean(user)}>
                    <PlaylistPage id={useParams().id} />
                </ProtectedRoute>
            } /> */}

            <Route
                path="/"
                element={
                <ProtectedRoute isAllowed={Boolean(userToken)}>
                    <PageLayout />
                </ProtectedRoute>
                }
            />

            <Route
                path="/favorites"
                element={
                <ProtectedRoute isAllowed={Boolean(userToken)}>
                    <PageLayout />
                </ProtectedRoute>
                }
            />
        </Routes>
    )
}
