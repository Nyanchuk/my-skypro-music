import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { UserProvider } from "./Context";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </Provider>
  );
}

export default App;


// import { UserProvider } from "./Context";
// import { AppRoutes } from "./routes";

// function App() {
//   return (
//     <UserProvider>
//       <AppRoutes />
//     </UserProvider>
//   );
// }

// export default App;

