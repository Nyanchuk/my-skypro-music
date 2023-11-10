import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import { UserProvider } from "./Context";
import { AppRoutes } from "./routes";
import { fetchLikedTracksThunk } from './store/actions/thunks/playerThunks';

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

