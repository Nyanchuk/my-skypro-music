import { UserProvider } from "./Context";
import { AppRoutes } from "./routes";

function App() {
  const user = localStorage.getItem("user");
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
