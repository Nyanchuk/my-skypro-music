import { Route, Routes } from "react-router-dom"
import Authorization from "./pages/Authorization/index"
import Registration from "./pages/Registration/index"
import Main from "./pages/Main/index"
import { ProtectedRoute } from "./components/Protection"
import PlaylistPage from "./pages/Playlists/PlaylistPage"
import { useParams } from "react-router-dom";
import MyTracks from "./pages/My tracks"
import UserContext, { useUser } from "./Context"
import { useContext } from "react"

export const AppRoutes = () => {

    const { userToken } = useContext(UserContext); // Получаем userToken из контекста

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

            <Route path="/" element= {
                <ProtectedRoute isAllowed={Boolean(userToken)}>
                    <Main />
            </ProtectedRoute>
            }></Route>

            <Route path="/favorites" element= {
                <ProtectedRoute isAllowed={Boolean(userToken)}>
                    <MyTracks />
            </ProtectedRoute>
            }></Route>
        </Routes>
    )
}
