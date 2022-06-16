import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {AuthContext} from './Context/';
import AppRouter from './AppRouter';



function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}


export default App;
